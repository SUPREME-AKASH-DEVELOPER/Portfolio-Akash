
import { useEffect } from "react";

// Add TypeScript declarations for Crisp
declare global {
  interface Window {
    $crisp: any[];
    CRISP_WEBSITE_ID: string;
  }
}

export function LiveChat() {
  useEffect(() => {
    // Load Crisp chat
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "99c51a15-4c41-480c-86ea-6c96b9e5f9d6"; // Replace with your Crisp Website ID when you have one
    
    const script = document.createElement("script");
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);
    
    return () => {
      // Clean up
      if (script.parentNode) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
