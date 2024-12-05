import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chip, Drawer, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { DataGrid, GridColDef, GridActionsCellItem } from "@mui/x-data-grid";

import {
  GET_ALL_ORDERS,
  GET_ORDERS_BY_USER_ID,
} from "../../../../graphql/Query/Orders";
import {
  setOrderId,
  setOrderNumber,
} from "../../../../../store/reducer/orderSlice";
import OrderDetails from "../Details";
import { getChipColor } from "./helpers";
import { DataGridStyles } from "./DataGrid.style";
import ROUTE_PATHS from "../../../../routes/paths/paths";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";

const adminRows = [
  { _id: 1, orderNumber: "1", totalPrice: "50 000", status: "cooking" },
  { _id: 2, orderNumber: "2", totalPrice: "50 000", status: "delivering" },
  { _id: 3, orderNumber: "3", totalPrice: "50 000", status: "pending" },
  { _id: 4, orderNumber: "4", totalPrice: "50 000", status: "received" },
];

const userRows = [
  { _id: 1, name: "Burger", price: "50 000", status: "cooking" },
  { _id: 2, name: "Sandwich", price: "50 000", status: "delivering" },
  { _id: 3, name: "Cheese burger", price: "50 000", status: "pending" },
  { _id: 4, name: "Xot-dog", price: "50 000", status: "received" },
];

const DataGridWithAccordion = () => {
  const [open, setOpen] = useState(false);
  const userRole = useAppSelector((state) => state.auth.role);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { data: ordersData } = useQuery(GET_ALL_ORDERS, {
    variables: {
      page: 1,
      limit: 10,
    },
  });

  const { data: getOrderByUserId } = useQuery(GET_ORDERS_BY_USER_ID);

  const toggleDrawer = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const adminOrderColumns: GridColDef[] = [
    {
      width: 250,
      headerName: "ID",
      field: "orderNumber",
      renderCell: (params) => (
        <div className="row">
          <Typography>#{params.value}</Typography>
        </div>
      ),
    },
    {
      width: 250,
      field: "totalPrice",
      headerName: "Total price",
      renderCell: (params) => (
        <div className="row">
          <Typography>{params.value} UZS</Typography>
        </div>
      ),
    },
    {
      width: 250,
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        const color = getChipColor(params?.value || "");
        return <Chip label={params.value} color={color} variant="outlined" />;
      },
    },
    {
      width: 250,
      type: "actions",
      field: "actions",
      headerName: "Actions",
      cellClassName: "actions",
      getActions: ({ id, row }) => {
        return [
          <GridActionsCellItem
            label="Details"
            color="inherit"
            icon={<InfoOutlinedIcon />}
            onClick={() => {
              toggleDrawer(true);
              console.log("order id:", id);
              console.log("order row:", row);
              dispatch(setOrderId(id?.toString()));
              dispatch(setOrderNumber(row?.orderNumber || 0));
            }}
          />,
        ];
      },
    },
  ];

  const userOrderColumns: GridColDef[] = [
    {
      width: 250,
      field: "name",
      headerName: "Name",
    },
    {
      width: 250,
      field: "price",
      headerName: "Price",
      renderCell: (params) => (
        <div className="row">
          <Typography>{params.value} UZS</Typography>
        </div>
      ),
    },
    {
      width: 250,
      field: "status",
      headerName: "Status",
      renderCell: (params) => {
        const color = getChipColor(params?.value || "");
        return <Chip label={params.value} color={color} variant="outlined" />;
      },
    },
    {
      width: 250,
      type: "actions",
      field: "actions",
      headerName: "Actions",
      cellClassName: "actions",
      getActions: () => {
        return [
          <GridActionsCellItem
            label="Details"
            color="inherit"
            icon={<InfoOutlinedIcon />}
            onClick={() => navigate(ROUTE_PATHS.USER_ORDER_MAP)}
          />,
        ];
      },
    },
  ];

  const orders =
    ordersData?.getOrders?.payload?.map((order: any, orderNumber: number) => ({
      ...order,
      orderNumber: orderNumber + 1,
    })) || adminRows;

  const userOrders =
    getOrderByUserId?.getOrderByUserId?.payload?.flatMap(
      ({ status, orderItems }: any) =>
        orderItems?.map(({ food }: any) => ({
          status,
          name: food?.name,
          price: food?.price,
        }))
    ) || userRows;

  useEffect(() => {
    console.log("orders data:", ordersData);
    console.log("orders data by user id:", getOrderByUserId);
  }, [open]);

  return (
    <DataGridStyles>
      <DataGrid
        disableRowSelectionOnClick
        getRowId={(row) => row._id}
        rows={userRole === "admin" ? orders : userOrders}
        columns={userRole === "admin" ? adminOrderColumns : userOrderColumns}
      />
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <OrderDetails toggleDrawer={toggleDrawer} />
      </Drawer>
    </DataGridStyles>
  );
};

export default DataGridWithAccordion;
