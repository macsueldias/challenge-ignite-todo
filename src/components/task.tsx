import * as Checkbox from '@radix-ui/react-checkbox'
import { Check, Trash } from '@phosphor-icons/react'
import styles from './task.module.css'

interface Task {
    description: string
    completed: boolean 
}

interface TaskProps {
    listTask: Task[]
}

export const Task = ({listTask}: TaskProps) => {
    return (
        <ul className={styles.listTasks}>
           {listTask.map(task => {
            return (
                <li className={styles.itemTask}>
                    <div className={styles.contentTask}>
                        <div>
                            <Checkbox.Root className={styles.CheckboxRoot} aria-checked={task.completed} id="c1">
                                <Checkbox.Indicator className={styles.CheckboxIndicator}>
                                    <Check size={16} weight="bold" color='#fff'/>
                                </Checkbox.Indicator>
                            </Checkbox.Root>
                        </div>
                        <p>{task.description}</p>
                        <button className={styles.deleteTask}><Trash size={18} weight="bold" /></button>
                    </div>
                </li>
            )
           })}
         </ul>
    )
}