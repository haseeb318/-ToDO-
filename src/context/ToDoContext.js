import {createContext, useContext} from "react"

export const ToDoContext = createContext({
   todos: [{
        id:1,
        todo: "To Do Masg",
        completed: false
    }],
    addTodo : (todo)=>{},
    deleteToDo : (id)=>{},
    updateToDo: (id,todo)=>{},
    toggleCompleted : (id)=>{} 
})

export const useToDo =()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider