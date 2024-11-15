import { ChildrenType } from "../../../types";

export interface IConfirmModal {
  open: boolean;
  title: string;
  handleClose: () => void;
  children: ChildrenType[];
}
