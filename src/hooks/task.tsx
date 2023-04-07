import { createContext, ReactNode, useContext, useState } from "react";

interface Task {
    description: string
    completed: boolean 
}

interface TaskContextType {
    tasks: Task[]
    createTask: (data: Task) => Promise<void>
}

interface TaskProviderProps {
    children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({children}: TaskProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([])

    const createTask = async (data: Task) =>  {
        const { completed, description } = data
        setTasks((state) => [...state, {completed, description} ])
    }

    console.log(tasks)


    return (
        <TaskContext.Provider value={{ tasks, createTask }}>
            {children}
        </TaskContext.Provider>
    )
}

export function useTask() {
    const context = useContext(TaskContext)
    return context
}
