import { Footer } from './components/Footer'
import { Header } from './components/Header'

export const App = () => {
  return (
    <>
      <Header />
      <main className="bg-todo-white min-h-[80vh] py-8 px-4 flex justify-center items-center">
        Hello
      </main>
      <Footer />
    </>
  )
}
