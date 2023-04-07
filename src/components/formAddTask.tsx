import styles from './form.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { useTask } from '../hooks/task'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const taskFormSchema = z.object({
    description: z.string().min(4).max(200),
    
})

type TaskDataSchema = z.infer<typeof taskFormSchema>

export const FormAddTask = () => {
    const { createTask } = useTask()

    const {register, handleSubmit} = useForm<TaskDataSchema>({
        resolver: zodResolver(taskFormSchema)
    })

    function handleCreateTask({description}: TaskDataSchema) {
        const data = {description, completed: false}
        createTask(data)
    }
    
    return (
        <div className={styles.containerForm}>
            <form className={styles.formTask} onSubmit={handleSubmit(handleCreateTask)}>
                <input type='text' className={styles.campTask} placeholder='Adicione um nova tarefa' {...register('description')}/>
                <button type='submit' className={styles.buttonAdd}><span>Criar</span> <PlusCircle size={16} weight="bold"/></button>
            </form>
        </div>
    )
}