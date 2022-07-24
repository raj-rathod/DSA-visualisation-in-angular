export interface SingleInputField{
     title: string;
     placeholder: string;
     multiple: boolean;
}

export interface DoubleInputField{
     title: string;
     firstField:{
          placeholder: string;
          multiple: boolean;
     };
     secondField:{
          placeholder: string;
          multiple: boolean;
     }
}

export interface MatrixInputField{
     title: string;
     placeholder: string;
     multiple: boolean;
}

export interface DoubleInputFieldOutput{
     firstInput: number[]| number;
     secondInput: number[] | number
}

export interface Matrix{
     row: number | number[];
     column: number | number[];
     data: number[][];
}