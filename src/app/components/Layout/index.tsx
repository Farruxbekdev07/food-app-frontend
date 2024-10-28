import Header from "../Header";
import Sidebar from "../Sidebar";
import { LayoutProps } from "../../types";
import { LayoutStyles } from "./Layout.style";
import { SIDEBAR_LINKS } from "../Sidebar/constants";

export default function Layout({ children }: LayoutProps) {
  return (
    <LayoutStyles>
      <Sidebar links={SIDEBAR_LINKS} />
      <Header />
      <div className="main">{children}</div>
    </LayoutStyles>
  );
}
