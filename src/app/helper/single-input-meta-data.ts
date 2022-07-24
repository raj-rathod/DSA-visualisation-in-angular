import { SingleInputField } from "../shared/interfaces/input-dialog.interface";


export const arrayInput: SingleInputField ={
   title: "Enter the array elements",
   placeholder: "space separated numbers like 1 2 3",
   multiple:true
}

export const singleInput: SingleInputField ={
   title: "Enter the single input",
   placeholder:"Enter value",
   multiple: false,
}
export const stackPushElement: SingleInputField ={
   title: "Enter the push element",
   placeholder:"Enter value",
   multiple: false,
}
