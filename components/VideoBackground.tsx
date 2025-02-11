"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const VideoBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false); // Track if the component has mounted

  // useEffect to set mounted to true after the component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render the video until the component has mounted
  if (!mounted) {
    return null; // Return null or a placeholder during SSR
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-50 overflow-hidden">
      <video
        key={theme} // Force video reload when theme changes
        autoPlay
        loop
        muted
        playsInline
        className="min-w-full min-h-full object-cover transition-all duration-300"
      >
        <source
          src={theme === "dark" ? "/videos/dark.mp4" : "/videos/light.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;
