import Header from "../Header";
import Sidebar from "../Sidebar";
import { ContainerProps } from "../../types";
import { ContainerStyles } from "./Container.style";
import { SIDEBAR_LINKS } from "../Sidebar/constants";

export default function Container({ children }: ContainerProps) {
  return (
    <ContainerStyles>
      <Sidebar links={SIDEBAR_LINKS} />
      <Header />
      <div className="main">{children}</div>
    </ContainerStyles>
  );
}
