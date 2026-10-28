// app/api/hero/route.ts
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import Hero from "@/models/hero"; // Ensure your file is models/Hero.ts

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI as string);
};

export async function GET() {
  try {
    await connectDB();
    let data = await Hero.findOne();
    if (!data) data = await Hero.create({});
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    // 1. Verify Password
    const authHeader = req.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.ADMIN_PASSWORD}`) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 },
      );
    }

    await connectDB();
    const formData = await req.formData();

    const subtitle = formData.get("subtitle") as string;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const imageFile = formData.get("image") as File | null;
    const removeImage = formData.get("removeImage") === "true";

    const existingData = (await Hero.findOne()) || {};
    let imageUrl = existingData.image || "/img/tr.png";

    if (removeImage) {
      imageUrl = "/img/tr.png";
    } else if (imageFile && imageFile.size > 0) {
      const bytes = await imageFile.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadResult: any = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "mortgage_hero" }, (error, result) => {
            if (error) reject(error);
            else resolve(result);
          })
          .end(buffer);
      });
      imageUrl = uploadResult.secure_url;
    }

    // ✅ FIX: Allow empty strings to be saved. 
    // If the field is null (not sent), keep existing. If it's "" (cleared), save "".
    const updatedData = await Hero.findOneAndUpdate(
      {},
      {
        subtitle: subtitle !== null ? subtitle : existingData.subtitle,
        title: title !== null ? title : existingData.title,
        description: description !== null ? description : existingData.description,
        image: imageUrl,
      },
      { new: true, upsert: true },
    );

    return NextResponse.json({ success: true, data: updatedData });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { success: false, error: "Update failed" },
      { status: 500 },
    );
  }
}