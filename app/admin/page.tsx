// app/admin/page.tsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Lock, Unlock, Save, Image as ImageIcon, Trash2, ArrowLeft, 
  CheckCircle, XCircle, Type, AlignLeft 
} from "lucide-react";

const DEFAULT_DATA = {
  title: "Hi, I'm Tristan Pearrow",
  heading: "Your Mortgage\nLoan Officer",
  paragraph: "A 4th generation Sunshine State native and dedicated mortgage loan officer, I hail from St. Augustine — the Nation's Oldest City — and studied at the University of Central Florida...",
  image: "/img/tr.png",
};

export default function AdminPanel() {
  // ✅ FIX: Initialize state directly from localStorage (runs before first render)
  // This prevents the "cascading render" error.
  const [password, setPassword] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("adminPass") || "";
    }
    return "";
  });

  // ✅ FIX: Check if password exists to set initial auth state
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      return !!localStorage.getItem("adminPass");
    }
    return false;
  });

  const [authError, setAuthError] = useState("");
  const [formData, setFormData] = useState({ title: "", heading: "", paragraph: "" });
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [removeImage, setRemoveImage] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Fetch data once authenticated
  useEffect(() => {
    if (!isAuthenticated) return;
    
    fetch("/api/hero")
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          title: data.subtitle || data.title || DEFAULT_DATA.title, 
          heading: data.heading || DEFAULT_DATA.heading,
          paragraph: data.description || data.paragraph || DEFAULT_DATA.paragraph,
        });
        setPreview(data.image || DEFAULT_DATA.image);
      });
  }, [isAuthenticated]); // Only runs when authentication state changes

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setAuthError("Please enter a password.");
      return;
    }
    localStorage.setItem("adminPass", password);
    setIsAuthenticated(true);
    setAuthError("");
  };

    const handleLogout = () => {
    // 1. Remove the password from storage
    localStorage.removeItem("adminPass");
    
    // 2. Clear state immediately (optional, but helps UI feel fast)
    setIsAuthenticated(false);
    setPassword("");
    
    // 3. Force a hard reload to wipe any React state or cached fetches
    window.location.reload(); 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: "", text: "" });

    const body = new FormData();
    body.append("subtitle", formData.title);
    body.append("title", formData.heading);
    body.append("description", formData.paragraph);
    if (removeImage) body.append("removeImage", "true");
    else if (image) body.append("image", image);

    try {
      const res = await fetch("/api/hero", { 
        method: "POST", 
        body,
        headers: { "Authorization": `Bearer ${password}` }
      });
      const result = await res.json();

      if (res.status === 401) {
        setMessage({ type: "error", text: " Incorrect password. Please log out and try again." });
      } else if (result.success) {
        setMessage({ type: "success", text: " Updated successfully!" });
        setPreview(result.data.image);
        setImage(null);
        setRemoveImage(false);
      } else {
        setMessage({ type: "error", text: " Update failed." });
      }
    } catch (err) {
      setMessage({ type: "error", text: " Network error occurred." });
    } finally {
      setLoading(false);
    }
  };

  // --- LOGIN SCREEN ---
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-100 p-4 rounded-full">
              <Lock className="w-8 h-8 text-blue-600 animate-pulse" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Admin Access</h1>
          <p className="text-center text-gray-500 mb-6 text-sm">Enter password to manage content</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Admin Password"
                className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              />
              {authError && <p className="text-red-500 text-xs mt-1">{authError}</p>}
            </div>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all flex justify-center items-center gap-2">
              <Unlock className="w-5 h-5" /> Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // --- ADMIN PANEL ---
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center pt-20 sm:p-32">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-2xl transition-all">
        
               {/* Header */}
        <div className="flex justify-between items-center mb-8 border-b pb-4 relative z-10">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Lock className="w-6 h-6 text-blue-600" /> Admin Panel
          </h1>
          
          <button 
            type="button" // Prevents it from acting like a submit button
            onClick={(e) => {
              e.preventDefault();
              localStorage.removeItem("adminPass");
              setIsAuthenticated(false);
              setPassword("");
              window.location.reload();
            }}
            className="relative z-50 cursor-pointer text-sm text-red-500 hover:text-red-700 font-semibold flex items-center gap-1 transition-all hover:scale-105 active:scale-95"
          >
            <XCircle className="w-5 h-5 pointer-events-none" /> 
            <span className="pointer-events-none">Logout</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
              <Type className="w-4 h-4" /> 1. Title (Top Text)
            </label>
            <input type="text" value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>

          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
              <Type className="w-4 h-4" /> 2. Heading (Main Text)
            </label>
            <textarea rows={2} value={formData.heading} onChange={(e) => setFormData({ ...formData, heading: e.target.value })} className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>

          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
              <AlignLeft className="w-4 h-4" /> 3. Paragraph (Description)
            </label>
            <textarea rows={4} value={formData.paragraph} onChange={(e) => setFormData({ ...formData, paragraph: e.target.value })} className="w-full border border-gray-300 p-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 outline-none transition-all" />
          </div>

          <div className="group">
            <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2 group-focus-within:text-blue-600 transition-colors">
              <ImageIcon className="w-4 h-4" /> Profile Image
            </label>
            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
              <input type="file" accept="image/*" onChange={(e) => { setImage(e.target.files?.[0] || null); setRemoveImage(false); }} className="w-full border border-gray-300 p-2 rounded-lg text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-all cursor-pointer" />
              {(preview || image) && (
                <button type="button" onClick={() => { setImage(null); setRemoveImage(true); setPreview(""); }} className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-bold hover:bg-red-100 flex items-center justify-center gap-2 transition-all border border-red-200">
                  <Trash2 className="w-4 h-4" /> Remove
                </button>
              )}
            </div>
            {removeImage && <p className="text-xs text-red-500 mt-2 animate-pulse">Image will be reset to default on save.</p>}
          </div>

          {preview && !removeImage && (
            <div className="border border-dashed border-gray-300 rounded-xl p-4 bg-gray-50 flex justify-center transition-all">
              <img src={preview} alt="Preview" className="h-32 sm:h-40 object-contain rounded-lg shadow-sm" />
            </div>
          )}

          <button type="submit" disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all flex justify-center items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-0.5">
            {loading ? (
              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
            ) : (
              <><Save className="w-5 h-5" /> Save Changes</>
            )}
          </button>

          {message.text && (
            <div className={`p-3 rounded-lg flex items-center gap-2 text-sm font-medium ${message.type === "success" ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
              {message.type === "success" ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
              {message.text}
            </div>
          )}
        </form>

        <div className="mt-8 text-center border-t pt-6">
          <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Landing Page
          </Link>
        </div>
      </div>
    </div>
  );
}