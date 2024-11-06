import { FC, ReactNode } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
interface layoutProps {
  children: ReactNode;
}
const LayoutSite: FC<layoutProps> = ({ children }) => {
  return (
    <div className={scss.LayoutSite}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default LayoutSite;
