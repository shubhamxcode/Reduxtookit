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
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
    }//prop and function
})

export const {addtodo,removetodo}=todoslice.actions
export default todoslice.reducer