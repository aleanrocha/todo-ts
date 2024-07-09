interface Props {
  btnText: string
}

import { useState, useEffect, ChangeEvent, FormEvent } from 'react'

import { ITask } from '../../interfaces/Task'

export const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')

  const addTaskHandler = (e: FormEvent) => {
    e.preventDefault()
    console.log('Title', title)
    console.log('Desc', description)
    if (title.trim() === '') {
      alert('Por favor, preencha o título!')
      return
    }
    if (description.trim() === '') {
      alert('Por favor, preencha a descrição!')
      return
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value)
      console.log(title)
    } else {
      setDescription(e.target.value)
      console.log(description)
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
      />
      <input
        type="submit"
        value={btnText}
        className="bg-secondary-color p-4 my-6 roudend cursor-pointer hover:opacity-90 transition"
      />
    </form>
  )
}
