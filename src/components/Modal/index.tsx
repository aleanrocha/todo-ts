import { ReactNode, MouseEvent } from 'react'

interface Props {
  children: ReactNode
}

export const Modal = ({ children }: Props) => {
  const closeModal = (/*e: MouseEvent*/) => {
    const modal = document.getElementById('modal')
    modal!.classList.add('hidden')
  }
  return (
    <section className="relative hidden" id="modal">
      <div
        onClick={closeModal}
        className="w-full h-full fixed left-0 top-0 bg-black opacity-70"
      ></div>
      <div className="bg-todo-white max-w-96 px-6 py-8 rounded shadow-lg fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-11/12">
        <span
          onClick={closeModal}
          className="absolute top-0 left-0 bg-red-500 hover:bg-red-600 transition rounded-tl px-2 py-1 text-todo-white cursor-pointer"
        >
          x
        </span>
        <h2 className="text-center font-bold mb-4 text-2xl">Editar tarefa</h2>
        {children}
      </div>
    </section>
  )
}
