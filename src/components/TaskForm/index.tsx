import {
  useState,
  ChangeEvent,
  FormEvent,
  Dispatch,
  SetStateAction,
  useEffect
} from 'react'

import { ITask } from '../../interfaces/Task'

interface Props {
  btnText: string
  taskList: ITask[]
  setTaskList?: Dispatch<SetStateAction<ITask[]>>
  task?: ITask | null
}

export const TaskForm = ({ btnText, taskList, setTaskList, task }: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDescription(task.description)
    }
  }, [task])

  const addTaskHandler = (e: FormEvent) => {
    e.preventDefault()
    if (title.trim() === '') {
      alert('Por favor, preencha o título!')
      return
    }
    if (description.trim() === '') {
      alert('Por favor, preencha a descrição!')
      return
    }
    setId(id + 1)
    const newTask: ITask = { id, title, description }
    setTaskList!([...taskList, newTask])
    setTitle('')
    setDescription('')
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
    } else {
      setDescription(e.target.value)
    }
  }

  return (
    <form className="flex flex-col gap-2 font-bold" onSubmit={addTaskHandler}>
      <label htmlFor="title" className="text-lg">
        Título
      </label>
      <input
        type="text"
        id="title"
        name="title"
        placeholder="Digite o título da tarefa"
        className="p-3 border border-slate-700 rounded outline-none text-base"
        onChange={handleChange}
        value={title}
      />
      <label htmlFor="desc" className="text-lg">
        Descrição:
      </label>
      <input
        type="text"
        id="desc"
        name="desc"
        placeholder="Digite a descrição da tarefa"
        className="p-3 border border-slate-700 rounded outline-none text-base"
        onChange={handleChange}
        value={description}
      />
      <input
        type="submit"
        value={btnText}
        className="bg-secondary-color p-4 my-6 roudend cursor-pointer hover:opacity-90 transition"
      />
    </form>
  )
}
