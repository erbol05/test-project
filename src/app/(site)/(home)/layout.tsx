import LayoutSections from "@/components/layout/LayoutSections";
import { FC, ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const layout: FC<LayoutProps> = ({ children }) => {
  return <LayoutSections>{children}</LayoutSections>;
};

export default layout;
