import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import {
  GridColDef,
  GridActionsCellItem,
  GridRowsProp,
} from "@mui/x-data-grid";
import {
  randomArrayItem,
  randomId,
  randomTraderName,
} from "@mui/x-data-grid-generator";

export const getColumns = ({
  rowModesModel,
  handleEditClick,
  handleSaveClick,
  handleDeleteClick,
  handleCancelClick,
}: any): GridColDef[] => [
  { field: "name", headerName: "Name", width: 250, editable: true },
  {
    width: 250,
    align: "left",
    type: "number",
    field: "phone",
    editable: true,
    headerName: "Phone",
    headerAlign: "left",
  },
  { field: "status", headerName: "Status", width: 250, editable: true },
  {
    width: 250,
    type: "actions",
    field: "actions",
    headerName: "Actions",
    getActions: ({ id }) => {
      const isInEditMode = rowModesModel[id]?.mode === "edit";

      if (isInEditMode) {
        return [
          <GridActionsCellItem
            key="save"
            icon={<SaveIcon />}
            label="Save"
            onClick={handleSaveClick(id)}
          />,
          <GridActionsCellItem
            key="cancel"
            icon={<CancelIcon />}
            label="Cancel"
            onClick={handleCancelClick(id)}
          />,
        ];
      }

      return [
        <GridActionsCellItem
          key="edit"
          icon={<EditIcon />}
          label="Edit"
          onClick={handleEditClick(id)}
        />,
        <GridActionsCellItem
          key="delete"
          icon={<DeleteIcon />}
          label="Delete"
          onClick={handleDeleteClick(id)}
        />,
      ];
    },
  },
];

const roles = ["Market", "Finance", "Development"];

const randomRole = () => {
  return randomArrayItem(roles);
};

export const InitialRows: GridRowsProp = [
  {
    id: randomId(),
    status: "pending",
    orders: randomRole(),
    name: randomTraderName(),
    phone: "+998 (93)-222-80-66",
  },
  {
    id: randomId(),
    status: "pending",
    orders: randomRole(),
    name: randomTraderName(),
    phone: "+998 (93)-222-80-66",
  },
  {
    id: randomId(),
    status: "pending",
    orders: randomRole(),
    name: randomTraderName(),
    phone: "+998 (93)-222-80-66",
  },
  {
    id: randomId(),
    status: "pending",
    orders: randomRole(),
    name: randomTraderName(),
    phone: "+998 (93)-222-80-66",
  },
  {
    id: randomId(),
    status: "pending",
    orders: randomRole(),
    name: randomTraderName(),
    phone: "+998 (93)-222-80-66",
  },
];
