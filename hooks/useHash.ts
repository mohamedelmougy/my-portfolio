"use client";

import { useEffect, useState } from "react";

// Function to get the current hash from the URL
const getCurrentHash = (): string => 
  typeof window !== "undefined" ? window.location.hash.replace(/^#!?/, "") : "";

// Custom hook to track the hash in the URL
const useHash = (): string => {
  const [hash, setHash] = useState<string>(getCurrentHash());

  useEffect(() => {
    // Handler for hash changes
    const onHashChanged = (): void => setHash(getCurrentHash());

    // Override history methods to update the state when pushState or replaceState is called
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args: Parameters<typeof originalPushState>): ReturnType<typeof originalPushState> {
      originalPushState.apply(window.history, args);
      setTimeout(() => setHash(getCurrentHash()), 0);
      return null as unknown as ReturnType<typeof originalPushState>; // Type assertion due to lack of proper return type in override
    };

    window.history.replaceState = function (...args: Parameters<typeof originalReplaceState>): ReturnType<typeof originalReplaceState> {
      originalReplaceState.apply(window.history, args);
      setTimeout(() => setHash(getCurrentHash()), 0);
      return null as unknown as ReturnType<typeof originalReplaceState>; // Type assertion due to lack of proper return type in override
    };

    // Add event listener for hash changes
    window.addEventListener("hashchange", onHashChanged);

    // Cleanup function to remove the event listener
    return (): void => {
      window.removeEventListener("hashchange", onHashChanged);
    };
  }, []);

  return hash;
};

export default useHash;