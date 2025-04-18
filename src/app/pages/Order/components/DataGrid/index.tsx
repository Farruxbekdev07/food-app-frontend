import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Chip, Drawer, Typography } from "@mui/material";
import { useLazyQuery, useSubscription } from "@apollo/client";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { DataGrid, GridColDef, GridActionsCellItem } from "@mui/x-data-grid";

import { GET_ALL_ORDERS } from "../../../../graphql/Query/Orders";
import {
  setOrderId,
  setOrderNumber,
} from "../../../../../store/reducer/orderSlice";
import OrderDetails from "../Details";
import { getChipColor } from "./helpers";
import { DataGridStyles } from "./DataGrid.style";
import ROUTE_PATHS from "../../../../routes/paths/paths";
import { CREATE_ORDER } from "../../../../graphql/Subscription/Orders";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
// import NotificationSound from "../../../../assets/audio/notification.mp3";

const TableOfOrder = () => {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [open, setOpen] = useState(false);
  const [orders, setOrders] = useState<any>([]);
  const [audio] = useState(
    new Audio("../../../../assets/audio/notification.mp3")
  );
  const token = useAppSelector((state) => state.auth.token);
  const [subscribe, setSubscribe] = useState<boolean>(false);
  const userRole = useAppSelector((state) => state.auth.role);
  const [userInteracted, setUserInteracted] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [getAllOrders, { data: ordersData }] = useLazyQuery(GET_ALL_ORDERS, {
    variables: { page: 1, limit: 100 },
    fetchPolicy: "network-only",
  });

  const { data: subscribeOrdersData } = useSubscription(CREATE_ORDER, {
    // skip: !subscribe,
  });

  const enableAudio = () => {
    setUserInteracted(true);
    document.removeEventListener("click", enableAudio);
  };

  const fetchLocation = () => {
    if (!navigator.geolocation) {
      toast.error("Geolocation is not supported in your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("position coords:", position.coords);
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error("There was an error getting location:", error.message);
        toast.error(`There was an error getting location!, ${error.message}`);
      }
    );
  };

  const toggleDrawer = (newOpen: boolean) => setOpen(newOpen);

  const adminOrderColumns: GridColDef[] = [
    {
      width: 250,
      headerName: "ID",
      field: "orderNumber",
      renderCell: (params) => <Typography>#{params.value}</Typography>,
    },
    {
      width: 250,
      field: "totalPrice",
      headerName: "Total price",
      renderCell: (params) => <Typography>{params.value} UZS</Typography>,
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
      getActions: ({ id, row }) => [
        <GridActionsCellItem
          label="Details"
          icon={<InfoOutlinedIcon />}
          onClick={() => {
            toggleDrawer(true);
            dispatch(setOrderId(id?.toString()));
            dispatch(setOrderNumber(row?.orderNumber || 0));
          }}
        />,
      ],
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
      renderCell: (params) => <Typography>{params.value} UZS</Typography>,
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
      getActions: () => [
        <GridActionsCellItem
          label="Details"
          icon={<InfoOutlinedIcon />}
          onClick={() => navigate(ROUTE_PATHS.USER_ORDER_MAP)}
        />,
      ],
    },
  ];

  useEffect(() => {
    console.log("fetching location...");
    fetchLocation();

    document.addEventListener("click", enableAudio);

    return () => {
      document.removeEventListener("click", enableAudio);
    };
  }, []);

  useEffect(() => {
    if (token && location?.latitude && location?.longitude) {
      setSubscribe(true);
    }
  }, [token, location]);

  useEffect(() => {
    if (token && userRole === "admin") {
      getAllOrders();
    } else {
      toast.error("Token or user role is incorrect!");
    }
  }, [token, userRole, subscribe, getAllOrders]);

  useEffect(() => {
    if (ordersData?.getOrders?.payload) {
      setOrders(
        ordersData.getOrders.payload.map((order: any, index: any) => ({
          ...order,
          orderNumber: index + 1,
        }))
      );
    }
  }, [ordersData]);

  useEffect(() => {
    console.log("subscribeOrdersData:", subscribeOrdersData);

    if (subscribeOrdersData?.createOrder) {
      setOrders((prevOrders: any) => [
        subscribeOrdersData.createOrder.payload.map(
          (order: any, index: number) => ({
            ...order,
            orderNumber: index + 1,
          })
        ),
        ...prevOrders,
      ]);
    }
  }, [subscribeOrdersData]);

  useEffect(() => {
    if (userInteracted) {
      audio
        .play()
        .then(() => console.log("Audio ijro etildi"))
        .catch((err) => console.error("Audio ijro etishda xatolik:", err));
    }
  }, [userInteracted, audio]);

  console.log("get all orders:", ordersData);

  return (
    <DataGridStyles>
      <DataGrid
        rows={orders}
        disableRowSelectionOnClick
        getRowId={(row) => row._id} // Ensure that the row has a valid unique ID
        columns={userRole === "admin" ? adminOrderColumns : userOrderColumns}
      />
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <OrderDetails toggleDrawer={toggleDrawer} />
      </Drawer>
    </DataGridStyles>
  );
};

export default TableOfOrder;
