"use client";
import React, { useState, useEffect } from "react";
import { Fuggles, Shadows_Into_Light, Amatic_SC } from "next/font/google";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export const fuggles = Fuggles({
  subsets: ["vietnamese"],
  weight: "400",
});

export const shadows_into_light = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
});

export const amatic_sc = Amatic_SC({
  subsets: ["latin"],
  weight: "400",
});

const SplashScreen = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        fontSize: "15px",
        fontFamily: "monospace",
      }}
      // className={amatic_sc.className}
    >
      [ Chandu Reddy ]
    </div>
  );
};

export default function Main() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      {loading ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar />
          <div class="container mt-24 mx-auto py-4 px-5 lg:px-20 ">
            <Home />
            <About />
            <Projects />
            <Contact />
          </div>
          <Footer />
        </>
      )}
    </main>
  );
}
