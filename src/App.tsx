import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { TaskForm } from './components/TaskForm'

export const App = () => {
  return (
    <>
      <Header />
      <main className="bg-todo-white min-h-[80vh] py-8 px-4 flex justify-center items-center text-xl">
        <section className="w-full max-w-96">
          <div>
            <h2 className="text-center text-2xl font-bold py-4">
              O que vocẽ vai fazer hoje?
            </h2>
            <TaskForm btnText="Criar" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-center text-2xl mb-4">
              Suas tarefas:
            </h3>
            <p>Minhas tarefas...</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
