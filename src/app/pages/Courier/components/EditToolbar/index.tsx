import {
  GridRowModes,
  GridRowsProp,
  GridRowModesModel,
  GridToolbarContainer,
} from "@mui/x-data-grid";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { randomId } from "@mui/x-data-grid-generator";

import { EditToolbarStyles } from "./EditToolbar.style";

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void;
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void;
}
function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props;

  const handleAddClick = () => {
    const id = randomId();

    setRows((oldRows) => [
      ...oldRows,
      { id, name: "", phone: "", status: "pending", isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
    }));
  };

  return (
    <EditToolbarStyles>
      <GridToolbarContainer>
        <Button
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleAddClick}
        >
          Add Courier
        </Button>
      </GridToolbarContainer>
    </EditToolbarStyles>
  );
}

export default EditToolbar;
