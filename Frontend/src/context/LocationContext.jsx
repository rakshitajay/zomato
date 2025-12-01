import React, { createContext, useContext, useEffect, useState } from "react";

const LocationContext = createContext();

export const LocationProvider = ({ children }) => {
  const [location, setLocation] = useState(() => {
    try {
      return localStorage.getItem("location") || "Select Location";
    } catch {
      return "Select Location";
    }
  });

  useEffect(() => {
    try { localStorage.setItem("location", location); } catch {}
  }, [location]);

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationStore = () => useContext(LocationContext);
