import { ChildrenType } from "../../../types";

export interface IConfirmModal {
  title: string;
  handleClose: () => void;
  children: ChildrenType[];
}
