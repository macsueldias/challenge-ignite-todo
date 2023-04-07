import { createContext, ReactNode, useEffect, useState } from 'react'

interface Task {
  id: string
  title: string
  isCompleted: boolean
}

interface AmountTasks {
  amountTasks: number
  completedTasks: number
}

interface TaskContextType {
  tasks: Task[]
  amountTask: AmountTasks
  createTask: (data: Task) => void
  deleteTask: (id: string) => void
  completedTask: (id: string) => void
}

interface TaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])
  const [amountTask, setAmountTask] = useState<AmountTasks>({
    amountTasks: 0,
    completedTasks: 0,
  })
  const [completed, setCompleted] = useState(0)

  const createTask = (data: Task) => {
    const { isCompleted, title, id } = data
    setTasks((state) => [...state, { isCompleted, title, id }])
  }

  const deleteTask = (id: string) => {
    const removeTask = tasks.filter((task) => task.id !== id)
    setTasks(removeTask)
  }

  function completedTask(id: string) {
    tasks.forEach((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
    })
    setCompleted(tasks.filter((task) => task.isCompleted === true).length)
  }

  useEffect(() => {
    const amountTasks = tasks.filter((task) => task.isCompleted === true).length
    const currentTask = tasks.length
    setAmountTask({ completedTasks: amountTasks, amountTasks: currentTask })
  }, [tasks, completed])

  return (
    <TaskContext.Provider
      value={{ tasks, amountTask, createTask, deleteTask, completedTask }}
    >
      {children}
    </TaskContext.Provider>
  )
}
