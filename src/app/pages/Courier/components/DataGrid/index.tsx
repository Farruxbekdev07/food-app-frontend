import {
  DataGrid,
  GridRowId,
  GridSlots,
  GridColDef,
  GridRowModel,
  GridRowModes,
  GridEventListener,
  GridRowModesModel,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from "@mui/icons-material/Edit";
import CancelIcon from "@mui/icons-material/Close";
import { Autocomplete, TextField } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

import initialRows from "./columns";
import EditToolbar from "../EditToolbar";
import { DataGridStyles } from "./DataGrid.style";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../../../../graphql/Query/Users";
import { CREATE_COURIER } from "../../../../graphql/Mutation/Couriers";
import { GET_ALL_COURIERS } from "../../../../graphql/Query/Couriers";
import { toast } from "react-toastify";
import { GraphQLError } from "graphql";

export default function FullFeaturedCrudGrid() {
  const [rows, setRows] = useState(initialRows);
  const [userId, setUserId] = useState<any>(null);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const { data: getUsersData } = useQuery(GET_ALL_USERS);
  const { data: getCouriersData } = useQuery(GET_ALL_COURIERS);

  const [createCourier, { data, loading }] = useMutation(CREATE_COURIER);

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id: GridRowId) => () => {
    console.log("edit:", id);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => {
    console.log("save id:", id);
    console.log("user id:", userId);
    setRowModesModel((prevRowModesModel) => ({
      ...prevRowModesModel,
      [id]: { mode: GridRowModes.View },
    }));

    setRows((prevRows) => {
      return prevRows.map((row) =>
        row.id === id ? { ...row, isNew: false } : row
      );
    });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    console.log("delete:", id);
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    console.log("cancel:", id);
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = useCallback((newRow: GridRowModel) => {
    const existingRow = rows.find((row) => row.id === newRow.id);
    console.log("existing row:", existingRow);

    if (existingRow) {
      try {
        setRows((prevRows) =>
          prevRows.map((row) =>
            row.id === newRow.id ? { ...newRow, isNew: false } : row
          )
        );
        console.log("Processed row:", newRow);
        return newRow;
      } catch (error) {
        console.log("Error while creating courier:", error);
        return newRow;
      }
    } else {
      if (!userId) {
        console.error("User ID cannot be null when creating courier.");
        return newRow;
      }

      try {
        console.log();
        createCourier({ variables: { userId } });
        setRows((prevRows) =>
          prevRows.map((row) =>
            row.id === newRow.id ? { ...newRow, isNew: false } : row
          )
        );
        console.log("Processed row:", newRow);
        return newRow;
      } catch (error: GraphQLError | any) {
        toast.error(error.message);
        console.log("Error while creating courier:", error);
        return newRow;
      }
    }
  }, []);

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const users =
    getUsersData?.getAllUsers?.payload?.map((user: any) => ({
      label: user.name,
      value: user._id || null,
    })) || [];

  const columns: GridColDef[] = [
    {
      width: 250,
      field: "name",
      editable: true,
      headerName: "Name",
      renderEditCell: (params) => {
        return (
          <Autocomplete
            fullWidth
            autoFocus
            size="small"
            options={users}
            className="searchable-select"
            getOptionLabel={(option) => option.label}
            defaultValue={users.find(
              (user: any) => user.value === params.value
            )}
            onChange={(_, newValue) => {
              console.log("selected user:", newValue);
              if (newValue) {
                setUserId(newValue?.value);
              } else {
                setUserId(null);
              }
              params.api.setEditCellValue({
                id: params.id,
                field: params.field,
                value: newValue?.label || "",
              });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select User"
                className="select-input"
              />
            )}
          />
        );
      },
    },
    {
      width: 250,
      align: "left",
      type: "number",
      field: "phone",
      editable: true,
      headerAlign: "left",
      headerName: "Phone",
    },
    {
      width: 250,
      field: "status",
      editable: true,
      headerName: "Status",
      type: "singleSelect",
      valueOptions: ["Pending", "Cooking", "Delivering", "Received"],
    },
    {
      width: 250,
      type: "actions",
      field: "actions",
      headerName: "Actions",
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              label="Save"
              icon={<SaveIcon />}
              sx={{
                color: "primary.main",
              }}
              onClick={() => handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  useEffect(() => {
    console.log(getUsersData?.getAllUsers?.payload);
    console.log(getCouriersData?.getCouriers?.payload);
    console.log("creating courier data:", data);
  }, [createCourier, data]);

  return (
    <DataGridStyles>
      <DataGrid
        rows={rows}
        editMode="row"
        columns={columns}
        rowModesModel={rowModesModel}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        onRowModesModelChange={handleRowModesModelChange}
        slots={{
          toolbar: EditToolbar as GridSlots["toolbar"],
        }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </DataGridStyles>
  );
}
