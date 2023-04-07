import { useState } from 'react'
import { NoTasks } from './noTasks'
import styles from './tasks.module.css'
import { useTask } from '../hooks/task'
import { Task } from './task'

export const Tasks = () => {
    const { tasks } = useTask()
    console.log(tasks)
    return (
        <div className={styles.main}>
            <div className={styles.infoTasks}>
                <div className={styles.amountTasks}>Tarefas criadas<span>4</span></div>
                <div className={styles.tasksCompleted}>Concluídas<span>2 de 4</span></div>
            </div>
            <div className={styles.containerTasks}>
                {tasks.length < 1 ? <NoTasks /> : <Task listTask={tasks}/>}
            </div>
        </div>
    )
}