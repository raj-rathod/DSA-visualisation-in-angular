import { InputTitle } from "../shared/interfaces/single-input.interface";

export const arrayInput: InputTitle ={
   title: "Enter the array elements",
   placeholder: "space separated numbers like 1 2 3",
   multiple:true
}

export const singleInput: InputTitle ={
   title: "Enter the single input",
   placeholder:"Enter value",
   multiple: false,
}