import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export const Modal = ({ children }: Props) => {
  return (
    <section className="relative">
      <div className="w-full h-full fixed left-0 top-0 bg-black opacity-70"></div>
      <div className="bg-todo-white max-w-96 px-6 py-8 rounded shadow-lg fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-11/12">
        <h2 className="text-center font-bold mb-4 text-2xl">Editar tarefa</h2>
        {children}
      </div>
    </section>
  )
}
