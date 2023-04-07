import styles from './noTask.module.css'
import Clipboard from '../assets/Clipboard.svg'

export const NoTasks = () => {
  return (
    <div className={styles.currentlyNoTask}>
      <img src={Clipboard} alt="Prancheta de cor cinza sem nenhuma tarefa" />
      <div className={styles.tasksStatusDescription}>
        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}
