"use client"
import scss from "./Welcome.module.scss";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    Aos.init({ duration: 2000, once: true }); // Initialize AOS with options
  }, []);

  return (
    <section className={scss.Welcome}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.nav} data-aos="fade-up">
            {" "}
            {/* AOS Animation */}
            <h2>добро пожаловать в</h2>
            <h1 data-aos="fade-right">52 ПараЛлель</h1>
            <h2 data-aos="fade-up">вина которые вам понравятся</h2>
          </div>
          <div className={scss.image} data-aos="fade-left">
            {" "}
            {/* AOS Animation */}
            <img
              src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-wine-png-image_9862597.png"
              alt="Man Tasting Wine"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
