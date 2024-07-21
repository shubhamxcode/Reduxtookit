import { createSlice,nanoid } from "@reduxjs/toolkit";

const intialState={
    todos:[{
        id:1,
        text:"hello world"
    }]
}

export const todoslice=createSlice({
    name:"todo",
    intialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },// state,action
        removetodo:()=>{},

    }//prop and function
})