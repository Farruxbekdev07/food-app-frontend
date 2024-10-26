import Header from "../Header";
import Sidebar from "../Sidebar";
import { ChildrenType } from "../../types";
import { SIDEBAR_LINKS } from "../Sidebar/constants";
import { LayoutStyles } from "./Layout.style";

type Props = {
  children: ChildrenType;
};

export default function Layout({ children }: Props) {
  return (
    <LayoutStyles>
      <Sidebar links={SIDEBAR_LINKS} />
      <div>
        <Header />
        <div className="content">{children}</div>
      </div>
    </LayoutStyles>
  );
}
