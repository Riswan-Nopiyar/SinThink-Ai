import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import ServicesImage from "../../components/services/ImageService";
import Layout from "../../layouts/Layout";
import { getCurrentTheme } from "../../utils/themeUtils";

const ImageAi: React.FC = () => {
  useEffect(() => {
    const theme = getCurrentTheme(); // Ambil tema saat ini (light/dark)

    toast("Welcome to Image", {
      theme: theme, // Terapkan tema ke toast
    });
  }, []); // Efek hanya berjalan sekali saat komponen dimuat

  return (
    <Layout>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        closeOnClick
      />
      <ServicesImage />
    </Layout>
  );
};

export default ImageAi;
