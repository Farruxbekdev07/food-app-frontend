import { CircularProgress } from "@mui/material";

import StyledLoader from "./Loader.style";

type Props = {
  isInner?: boolean;
};

function Loader({ isInner }: Props) {
  return (
    <StyledLoader style={{ position: isInner ? "absolute" : "fixed" }}>
      <CircularProgress />
    </StyledLoader>
  );
}

export default Loader;
