import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import ServiceChat from "../../components/services/ChatService";
import Layout from "../../layouts/Layout";
import { getCurrentTheme } from "../../utils/themeUtils";

const ChatAi: React.FC = () => {
  useEffect(() => {
    const theme = getCurrentTheme(); // Ambil tema saat ini (light/dark)

    toast("Welcome to Chat", {
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
      <ServiceChat />
    </Layout>
  );
};

export default ChatAi;
