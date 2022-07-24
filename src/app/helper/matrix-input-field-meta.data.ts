import { MatrixInputField } from "../shared/interfaces/input-dialog.interface";

export const matrixInput: MatrixInputField[] = [
     {
          title: "Enter number of rows",
          placeholder: "Enter number of rows",
          multiple: false,
     },
     {
          title: "Enter number of columns",
          placeholder: "Enter number of columns",
          multiple: false,
     },
     {
          title: "Enter the elements of row",
          placeholder: "Space separated number like 1 2 3",
          multiple: true
     }
];