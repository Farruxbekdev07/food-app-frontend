import Header from "../Header";
import Sidebar from "../Sidebar";
import { ChildrenType, ContainerProps } from "../../types";
import { SIDEBAR_LINKS } from "../Sidebar/constants";
import { ContainerStyles } from "./Layout.style";

export default function Container({ children }: ContainerProps) {
  return (
    <ContainerStyles>
      <Sidebar links={SIDEBAR_LINKS} />
      <Header />
      <div className="main">{children}</div>
    </ContainerStyles>
  );
}
