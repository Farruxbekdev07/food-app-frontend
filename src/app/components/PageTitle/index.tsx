import { Typography } from "@mui/material";

import { PageTitleProps } from "../../types";
import { PageTitleStyles } from "./PageTitle.style";

export default function PageTitle({ title, children }: PageTitleProps) {
  return (
    <PageTitleStyles>
      <Typography className="page__title">{title}</Typography>
      {children}
    </PageTitleStyles>
  );
}
