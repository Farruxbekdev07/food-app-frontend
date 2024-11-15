import { useState } from "react";
import {
  GridRowModel,
  GridRowModesModel,
  GridRowsProp,
} from "@mui/x-data-grid";

export const useCrudGrid = (initialRows: GridRowsProp) => {
  const [rows, setRows] = useState(initialRows);
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({});

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  return { rows, setRows, rowModesModel, setRowModesModel, processRowUpdate };
};
