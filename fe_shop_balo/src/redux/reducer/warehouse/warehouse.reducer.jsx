import { createSlice } from '@reduxjs/toolkit';

export const warehouseReducer = createSlice({
  name: 'warehouse',
  initialState: {
    key: 0,
    isAdd: false,
    isExport: false,
    warehouse: {},
    importPrint: false,
    importPrintContent: {},
  },
  reducers: {
    setKey: (state, action) => {
      state.key = action.payload;
    },
    setIsImportStorage: (state, action) => {
      state.isAdd = action.payload;
    },
    setIsExportStorage: (state, action) => {
      state.isExport = action.payload;
    },
    setWareHouse: (state, action) => {
      state.warehouse = action.payload;
    },
    setImportPrint: (state, action) => {
      state.importPrint = action.payload;
    },
    setImportPrintContent: (state, action) => {
      state.importPrintContent = action.payload;
    },
  },
});

export const { setIsImportStorage, setWareHouse, setIsExportStorage, setImportPrint, setImportPrintContent } =
  warehouseReducer.actions;

export default warehouseReducer.reducer;
