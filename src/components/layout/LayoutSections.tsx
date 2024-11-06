"use client";
import { FC, ReactNode } from "react";
import scss from "./LayoutSections.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
interface iLayout {
  children: ReactNode;
}
const LayoutSections: FC<iLayout> = ({ children }) => {
  return (
    <div className={scss.layout}>
      <header>
        <Header />
      </header>{" "}
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LayoutSections;
