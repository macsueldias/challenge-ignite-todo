import { NoTasks } from './noTasks'
import styles from './tasks.module.css'
import { useTask } from '../hooks/useTask'
import { Task } from './task'

export const Tasks = () => {
  const { tasks, amountTask } = useTask()
  const currentTasks = amountTask.amountTasks
  const completedTasks = amountTask.completedTasks

  return (
    <div className={styles.main}>
      <div className={styles.infoTasks}>
        <div className={styles.amountTasks}>
          Tarefas criadas<span>{currentTasks}</span>
        </div>
        <div className={styles.tasksCompleted}>
          Concluídas
          <span>
            {completedTasks} de {currentTasks}
          </span>
        </div>
      </div>
      <div className={styles.containerTasks}>
        {tasks.length < 1 ? <NoTasks /> : <Task listTask={tasks} />}
      </div>
    </div>
  )
}
