// models/Hero.ts
import mongoose from "mongoose";

const HeroSchema = new mongoose.Schema({
  subtitle: { type: String, default: "Hi, I'm Tristan Pearrow" },
  title: { type: String, default: "Your Mortgage\nLoan Officer" },
  description: { type: String, default: "A 4th generation Sunshine State native..." },
  image: { type: String, default: "/img/tr.png" },
}, { timestamps: true });

export default mongoose.models.Hero || mongoose.model("Hero", HeroSchema);