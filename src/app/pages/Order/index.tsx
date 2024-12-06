import OrderStyle from "./Order.style";
import TableOfOrder from "./components/DataGrid";
import { useAppSelector } from "../../hooks/redux";

const Order = () => {
  const token = useAppSelector((state) => state.auth.token);

  if (token) {
    try {
      const base64Url = token.split(".")[1];
      if (!base64Url) throw new Error("Token format is invalid!");

      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const paddedBase64 = base64.padEnd(
        base64.length + ((4 - (base64.length % 4)) % 4),
        "="
      );

      const decodedToken = JSON.parse(atob(paddedBase64));
      console.log("Token expires at:", new Date(decodedToken.exp * 1000));
    } catch (error: any) {
      console.error("Failed to decode token:", error.message);
    }
  } else {
    console.error("Token is missing!");
  }

  return (
    <OrderStyle>
      <TableOfOrder />
    </OrderStyle>
  );
};

export default Order;
