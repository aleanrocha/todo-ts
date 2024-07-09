interface Props {
  btnText: string
}

export const TaskForm = ({ btnText }: Props) => {
  return (
    <form className="flex flex-col gap-2 font-bold">
      <label htmlFor="title" className="text-lg">
        Título
      </label>
      <input
        type="text"
        id="title"
        placeholder="Digite o título da tarefa"
        className="p-3 border border-slate-700 rounded outline-none text-base"
      />
      <label htmlFor="desc" className="text-lg">
        Descrição:
      </label>
      <input
        type="text"
        id="desc"
        placeholder="Digite a descrição da tarefa"
        className="p-3 border border-slate-700 rounded outline-none text-base"
      />
      <input
        type="submit"
        value={btnText}
        className="bg-secondary-color p-4 my-6 roudend cursor-pointer hover:opacity-90 transition"
      />
    </form>
  )
}
