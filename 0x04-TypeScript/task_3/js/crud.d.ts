// At the top of the file import RowID and RowElement from interface.ts
import { RowID, RowElement } from './interface';

// Declare the functions exported by crud.js directly
// When using 'import * as CRUD from "./crud";' for a local file,
// TypeScript expects the .d.ts file to directly declare the exports,
// not wrap them in 'declare module "crud"'.
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;