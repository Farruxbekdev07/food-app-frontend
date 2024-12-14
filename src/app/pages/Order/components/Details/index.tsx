import {
  Box,
  Card,
  Chip,
  Avatar,
  Button,
  Typography,
  CardActionArea,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import SendIcon from "@mui/icons-material/Send";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import { getChipColor } from "../DataGrid/helpers";
import { OrderDetailStyles } from "./Details.style";
import { useAppSelector } from "../../../../hooks/redux";
import PageTitle from "../../../../components/PageTitle";
import { GET_ORDER_BY_ID } from "../../../../graphql/Query/Orders";

interface Props {
  toggleDrawer: (value: boolean) => void;
}

function OrderDetails({ toggleDrawer }: Props) {
  const { orderId, orderNumber } = useAppSelector((state) => state?.order);

  const { data: orderData } = useQuery(GET_ORDER_BY_ID, {
    variables: {
      orderId: orderId,
    },
  });

  const orderDetailColumns: GridColDef[] = [
    {
      width: 100,
      field: "photo",
      align: "center",
      headerName: "",
      renderCell: (params) => (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt="order photo"
            src={params.value}
            sx={{ width: 40, height: 40 }}
          >
            {params.row?.name?.charAt(0).toUpperCase() || "?"}
          </Avatar>
        </Box>
      ),
    },
    { field: "name", headerName: "Name", width: 250 },
    {
      width: 250,
      field: "price",
      headerName: "Price",
      renderCell: (params) => (
        <Box
          className="row"
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Typography>{params.value} UZS</Typography>
        </Box>
      ),
    },
  ];

  const { status, totalPrice, createdBy, orderItems } =
    orderData?.getOrderById?.payload || {};

  const { name, phone } = createdBy || {};
  const statusColor = getChipColor(status || "");

  const detailData = [
    { name: "Customer", value: name },
    { name: "Status", value: status },
    { name: "Phone", value: phone },
  ];

  const orders =
    orderItems?.map(
      ({ food }: any) => (
        console.log("food", food),
        {
          name: food?.name,
          photo: food?.image,
          price: food?.price,
          _id: food?._id || `${food?.name}-${food?.price}`,
        }
      )
    ) || [];

  return (
    <OrderDetailStyles>
      <div className="detail__container" role="presentation">
        <PageTitle title={`Order #${orderNumber || 0}`}>
          <Button
            startIcon={<SendIcon />}
            onClick={() => toggleDrawer(false)}
          />
        </PageTitle>
        <Typography gutterBottom>Details</Typography>
        <div className="details">
          {detailData?.map(({ name, value }) => {
            return (
              <CardActionArea className="action__area">
                <Card className="card">
                  <Typography className="card__title">{name}:</Typography>
                  {name === "Status" ? (
                    <Chip
                      label={value}
                      variant="outlined"
                      color={statusColor}
                    />
                  ) : (
                    <Typography textAlign="center" className="card__content">
                      {value || ""}
                    </Typography>
                  )}
                </Card>
              </CardActionArea>
            );
          })}
        </div>
        <Typography className="card__info">Order Info</Typography>
        <div className="datagrid__container">
          <DataGrid
            hideFooter
            rows={orders}
            disableRowSelectionOnClick
            columns={orderDetailColumns}
            getRowId={(row) => row?._id}
          />
        </div>
        <div className="card__total__container">
          <Typography className="card__total">Total</Typography>
          <Typography>{totalPrice || 0} UZS</Typography>
        </div>
      </div>
    </OrderDetailStyles>
  );
}

export default OrderDetails;
