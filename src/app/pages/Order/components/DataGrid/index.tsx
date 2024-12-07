import { useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
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

const TableOfOrder = () => {
  const [open, setOpen] = useState(false);
  const token = useAppSelector((state) => state.auth.token);
  const userRole = useAppSelector((state) => state.auth.role);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [getAllOrders, { data: ordersData }] = useLazyQuery(GET_ALL_ORDERS, {
    variables: {
      page: 1,
      limit: 10,
    },
  });

  const [getOrdersByUserId, { data: getOrderByUserIdData, refetch }] =
    useLazyQuery(GET_ORDERS_BY_USER_ID);

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

  useEffect(() => {
    console.log("user role:", userRole);
    if (token && userRole === "user") {
      getOrdersByUserId();
    }
    if (token && userRole === "admin") {
      refetch();
      getAllOrders();
    }
  }, [token, userRole, getOrdersByUserId, getAllOrders]);

  const orders =
    ordersData?.getOrders?.payload?.map((order: any, orderNumber: number) => ({
      ...order,
      orderNumber: orderNumber + 1,
    })) || [];

  const userOrders =
    getOrderByUserIdData?.getOrderByUserId?.payload?.flatMap(
      ({ status, orderItems }: any) =>
        orderItems?.map(({ food }: any) => ({
          status,
          name: food?.name,
          price: food?.price,
        }))
    ) || [];

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

export default TableOfOrder;
