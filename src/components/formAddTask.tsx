import styles from './form.module.css'
import { PlusCircle } from '@phosphor-icons/react'
import { useTask } from '../hooks/useTask'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 as uuidv4 } from 'uuid'

const taskFormSchema = z.object({
  title: z.string().min(4).max(200),
})

type TaskDataSchema = z.infer<typeof taskFormSchema>

export const FormAddTask = () => {
  const { createTask } = useTask()

  const { register, handleSubmit } = useForm<TaskDataSchema>({
    resolver: zodResolver(taskFormSchema),
  })

  function handleCreateTask({ title }: TaskDataSchema) {
    const data = { title, isCompleted: false, id: uuidv4() }
    createTask(data)
  }

  return (
    <div className={styles.containerForm}>
      <form
        className={styles.formTask}
        onSubmit={handleSubmit(handleCreateTask)}
      >
        <input
          type="text"
          className={styles.campTask}
          placeholder="Adicione um nova tarefa"
          {...register('title')}
        />
        <button type="submit" className={styles.buttonAdd}>
          <span>Criar</span> <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </div>
  )
}
