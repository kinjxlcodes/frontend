import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5174";
const API_KEY = import.meta.env.VITE_SEGMIND_API_KEY; // Load API key from .env

const UploadForm = () => {
  const [modelImage, setModelImage] = useState(null);
  const [clothImage, setClothImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [outputImage, setOutputImage] = useState("");

  const handleFileChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const handleUpload = async () => {
    if (!modelImage || !clothImage) {
      alert("Please upload both images");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append("model_image", modelImage);
    formData.append("cloth_image", clothImage);

    try {
      const response = await axios.post(`${BACKEND_URL}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": API_KEY, // Ensure API key is sent
        },
      });

      console.log("API Response:", response.data);

      if (response.data.image) {
        console.log("Received Image Base64 (First 100 chars):", response.data.image.slice(0, 100));
        setOutputImage(`data:image/jpeg;base64,${response.data.image}`);
      } else {
        alert("No image found in response.");
      }
    } catch (error) {
      console.error("Upload error:", error.response ? error.response.data : error.message);
      alert("Upload failed. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Try Clothes <br /> the right way with AI
      </motion.h1>

      <motion.div className="flex flex-col text-white p-6 relative z-10">
        <motion.div className="flex gap-6 mb-6">
          {[{ image: modelImage, setImage: setModelImage, label: "Upload Model" },
            { image: clothImage, setImage: setClothImage, label: "Upload Cloth" }].map(({ image, setImage, label }, index) => (
            <motion.label key={index} className="border-2 border-gray-600 border-dashed w-40 h-40 flex items-center justify-center cursor-pointer hover:border-white transition-all relative">
              {image ? <img src={URL.createObjectURL(image)} alt={label} className="absolute inset-0 w-full h-full object-cover" /> : <span className="text-gray-500">{label}</span>}
              <input type="file" accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setImage)} />
            </motion.label>
          ))}
        </motion.div>

        <motion.button className="bg-white text-black px-6 py-3 rounded-lg font-bold transition-all" whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.05 }} onClick={handleUpload} disabled={loading}>
          {loading ? "Processing..." : "Try-On"}
        </motion.button>

        {outputImage && (
          <motion.div className="border-2 border-gray-600 p-4 mt-6 w-80 flex items-center justify-center">
            <img src={outputImage} alt="Generated Try-On" className="w-full h-auto" />
          </motion.div>
        )}
      </motion.div>
    </LampContainer>
  );
};

export default UploadForm;
