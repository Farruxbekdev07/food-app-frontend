import Header from "../Header";
import Sidebar from "../Sidebar";
import { ChildrenType } from "../../types";
import { ContainerStyles } from "./Container.style";
import { SIDEBAR_LINKS } from "../Sidebar/constants";

type Props = {
  children: ChildrenType;
};

export default function Container({ children }: Props) {
  return (
    <ContainerStyles>
      <Sidebar links={SIDEBAR_LINKS} />
      <div>
        <Header />
        <div className="content">{children}</div>
      </div>
    </ContainerStyles>
  );
}
