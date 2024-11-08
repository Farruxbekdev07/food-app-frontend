import { colors } from "@mui/material";
import styled from "styled-components";

const StyledLoader = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10000;
  background: ${colors.blue[700]};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledLoader;
