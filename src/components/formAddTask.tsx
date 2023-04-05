import styles from './form.module.css'
import { PlusCircle } from '@phosphor-icons/react'

export const FormAddTask = () => {
    return (
        <div className={styles.containerForm}>
            <form className={styles.formTask}>
                <input type='text' className={styles.campTask} placeholder='Adicione um nova tarefa'/>
                <button className={styles.buttonAdd}>Criar <PlusCircle size={16} weight="bold"/></button>
            </form>
        </div>
    )
}