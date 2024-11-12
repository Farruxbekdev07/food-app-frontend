import Header from "../Header";
import Sidebar from "../Sidebar";
import { LayoutProps } from "../../types";
import { LayoutStyles } from "./Layout.style";
import SIDEBAR_ROUTES from "../Sidebar/routes";
import { UserRole } from "../../types/enums";
import { useAppSelector } from "../../hooks/redux";

export default function Layout({ children }: LayoutProps) {
  const userRole = useAppSelector((state) => state.auth?.role) as
    | UserRole
    | "user";

  const routes = userRole
    ? SIDEBAR_ROUTES[userRole || "user"]
    : SIDEBAR_ROUTES["user"];

  return (
    <LayoutStyles>
      <Sidebar links={routes} />
      <Header />
      <div className="main">{children}</div>
    </LayoutStyles>
  );
}
