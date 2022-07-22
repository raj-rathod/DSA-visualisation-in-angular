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

export interface DoubleInputFieldOutput{
     firstInput: number[]| number;
     secondInput: number[] | number
}