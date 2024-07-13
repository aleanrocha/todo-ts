import { useState } from 'react'

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { TaskForm } from './components/TaskForm'
import { TaskList } from './components/TaskList'
import { ITask } from './interfaces/Task'

export const App = () => {
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [taskToUpdate, setTaskTopUpdate] = useState<ITask | null>(null)
  const deleteTask = (id: number) =>
    setTaskList(taskList.filter((task) => task.id !== id))
  const showOrCloseModal = (display: boolean) => {
    const modal = document.getElementById('modal')
    if (display) {
      modal!.classList.remove('hidden')
    } else {
      modal!.classList.add('hidden')
    }
  }
  const editTask = (task: ITask): void => {
    showOrCloseModal(true)
    setTaskTopUpdate(task)
  }

  const updateTask = (id: number, title: string, description: string) => {
    const updatedTask: ITask = { id, title, description }
    const updatedItems = taskList.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    )
    setTaskList(updatedItems)
    showOrCloseModal(false)
  }

  return (
    <>
      <Header />
      <main className="bg-todo-white min-h-[80vh] py-8 px-4 flex justify-center items-center text-xl">
        <section className="w-full max-w-96">
          <div>
            <h2 className="text-center text-2xl font-bold py-4">
              O que vocẽ vai fazer hoje?
            </h2>
            <TaskForm
              btnText="Criar"
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-center text-2xl mb-4">
              Suas tarefas:
            </h3>
            <TaskList
              taskList={taskList}
              handleDelete={deleteTask}
              handleEdit={editTask}
            />
          </div>
        </section>
        <Modal
          children={
            <TaskForm
              taskList={taskList}
              task={taskToUpdate}
              btnText="Salvar"
              handleUpdate={updateTask}
            />
          }
        />
      </main>
      <Footer />
    </>
  )
}
