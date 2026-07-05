import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: "hello world", isEditable: false }]

}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
                isEditable: false
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state, action) => {
            state.todos.map((todo) => todo.id === action.payload ? todo.text = action.payload.text : todo)
            state.isEditable = false
        },

        toggleEditable: (state, action) => {
            const todo = state.todos.find(
                (todo) => todo.id === action.payload
            );

            if (todo) {
                todo.isEditable = !todo.isEditable;
            }
        },


    }

})

export const { addTodo, updateTodo, removeTodo, toggleEditable } = todoSlice.actions

export default todoSlice.reducer