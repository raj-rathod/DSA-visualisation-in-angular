import { DoubleInputField } from "../shared/interfaces/input-dialog.interface";

export const insertAtIndex: DoubleInputField ={
     title: "Enter index and element for InsertAtIndex",
     firstField:{
          placeholder: "Enter  index",
          multiple: false
     },
     secondField:{
          placeholder: "Enter element",
          multiple: false
     }
     
}