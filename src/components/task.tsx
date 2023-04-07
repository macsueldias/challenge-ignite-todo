import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from '@phosphor-icons/react'
import styles from './task.module.css'
import { useTask } from '../hooks/useTask'

interface TaskData {
  id: string
  title: string
  isCompleted: boolean
}

interface TaskProps {
  listTask: TaskData[]
}

export const Task = ({ listTask }: TaskProps) => {
  const { deleteTask, completedTask } = useTask()

  return (
    <ul className={styles.listTasks}>
      {listTask.map((task) => {
        return (
          <li key={task.id} className={styles.itemTask}>
            <div className={styles.contentTask}>
              <div>
                <Checkbox.Root
                  className={styles.CheckboxRoot}
                  aria-checked={task.isCompleted}
                  onClick={() => completedTask(task.id)}
                >
                  <Checkbox.Indicator className={styles.CheckboxIndicator}>
                    <Check size={16} weight="bold" color="#fff" />
                  </Checkbox.Indicator>
                </Checkbox.Root>
              </div>
              <p>{task.title}</p>
              <button
                className={styles.deleteTask}
                onClick={() => deleteTask(task.id)}
              >
                <Trash size={18} weight="bold" />
              </button>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
