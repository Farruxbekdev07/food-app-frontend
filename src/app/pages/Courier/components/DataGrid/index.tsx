import {
  DataGrid,
  GridRowId,
  GridColDef,
  GridActionsCellItem,
} from "@mui/x-data-grid";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";
import { GraphQLError } from "graphql";
import { useMutation, useQuery } from "@apollo/client";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import { pxToRem } from "../../../../constants";
import { DataGridStyles } from "./DataGrid.style";
import { formatPhoneNumber } from "../../../../helpers";
import ConfirmModal from "../../../../components/ConfirmModal";
import { GET_ALL_COURIERS } from "../../../../graphql/Query/Couriers";
import { DELETE_COURIER } from "../../../../graphql/Mutation/Couriers";

export default function CouriersTable() {
  const [courierId, setCourierId] = useState<GridRowId>("");
  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const [deleteCourier] = useMutation(DELETE_COURIER, {
    refetchQueries: [{ query: GET_ALL_COURIERS }],
  });
  const { data: couriersData } = useQuery(GET_ALL_COURIERS);

  const handleDeleteCourier = () => {
    if (courierId) {
      deleteCourier({ variables: { courierId } })
        .then(() => {
          setOpenConfirmModal(false);
          toast.success("Courier deleted successfully!");
        })
        .catch((error: GraphQLError) => {
          toast.error(error.message);
          setOpenConfirmModal(false);
        });
    } else {
      toast.error("User ID is not found!");
    }
  };

  const handleOpenDialog = () => {
    setOpenConfirmModal(true);
  };

  const handleCloseDialog = () => {
    setOpenConfirmModal(false);
  };

  const columns: GridColDef[] = [
    {
      width: 250,
      field: "name",
      headerName: "Name",
    },
    {
      width: 250,
      field: "phone",
      headerName: "Phone",
      valueFormatter: (value: string) => formatPhoneNumber(value),
    },
    {
      width: 250,
      field: "orders",
      headerName: "Orders",
      renderCell: (params) => {
        const { row } = params || {};
        const { orders } = row || {};
        const hasOrders = orders && orders?.length > 0;

        return (
          <Typography
            sx={{
              fontSize: pxToRem(14),
              lineHeight: pxToRem(52),
              color: hasOrders ? "green" : "red",
            }}
          >
            {hasOrders ? `# ${orders[0]?.toString()}` : "No Orders"}
          </Typography>
        );
      },
    },
    {
      width: 250,
      type: "actions",
      field: "actions",
      headerName: "Actions",
      cellClassName: "actions",
      getActions: ({ id }) => {
        setCourierId(id);

        return [
          <GridActionsCellItem
            label="Delete"
            color="inherit"
            icon={<DeleteIcon />}
            onClick={handleOpenDialog}
          />,
        ];
      },
    },
  ];

  const couriers = couriersData?.getCouriers?.payload || [];
  const users = couriers.map((courier: any) => courier?.user) || [];

  const rows =
    users.map((user: any, index: number) => ({
      ...user,
      id: couriers[index]._id,
      orders: couriers[index]?.orders,
    })) || [];

  return (
    <DataGridStyles>
      <DataGrid
        rows={rows}
        columns={columns}
        disableMultipleRowSelection
        getRowId={(row) => row.id}
      />
      <ConfirmModal
        open={openConfirmModal}
        title="Delete Courier"
        handleClose={handleCloseDialog}
      >
        <DialogContent
          sx={{ display: "flex", gap: pxToRem(16), flexDirection: "column" }}
        >
          <DialogContentText>
            Do you want to delete this courier?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleDeleteCourier}>Delete</Button>
        </DialogActions>
      </ConfirmModal>
    </DataGridStyles>
  );
}
