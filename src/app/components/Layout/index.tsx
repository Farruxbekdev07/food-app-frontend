import Header from "../Header";
import Sidebar from "../Sidebar";
import { LayoutProps } from "../../types";
import { LayoutStyles } from "./Layout.style";
import SIDEBAR_ROUTES from "../Sidebar/routes";

export default function Layout({ children }: LayoutProps) {
  const userRole = "admin";

  return (
    <LayoutStyles>
      <Sidebar links={SIDEBAR_ROUTES[userRole]} />
      <Header />
      <div className="main">{children}</div>
    </LayoutStyles>
  );
}
