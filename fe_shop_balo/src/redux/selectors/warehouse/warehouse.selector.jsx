export const isImportStorageSelector = (state) => state.warehouse.isAdd;
export const isExportStorageSelector = (state) => state.warehouse.isExport;
export const isImportPrintSelector = (state) => state.warehouse.importPrint;
export const importPrintSelector = (state) => state.warehouse.importPrintContent;
export const isExportPrintSelector = (state) => state.warehouse.exportPrint;
export const exportPrintSelector = (state) => state.warehouse.exportPrintContent;