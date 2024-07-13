import { FaRegTrashAlt } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'

import { ITask } from '../../interfaces/Task'

interface Props {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

export const TaskList = ({ taskList, handleDelete, handleEdit }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div
            key={task.id}
            className="flex justify-between items-center gap-2 my-4 bg-white p-4 rounded shadow-lg
          "
          >
            <div className="text-left">
              <h4 className="font-bold text-lg">{task.title}</h4>
              <p className="text-base font-bold opacity-70">
                {task.description}
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <MdModeEditOutline
                onClick={() => handleEdit(task)}
                className="bg-primary-color text-todo-white text-2xl px-1 rounded hover:text-secondary-color transition cursor-pointer"
              />
              <FaRegTrashAlt
                onClick={() => {
                  handleDelete(task.id)
                }}
                className="bg-primary-color text-todo-white text-2xl px-1 rounded hover:text-secondary-color transition cursor-pointer"
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg font-bold opacity-70">
          Ops, nenhuma tarefa cadastrada!
        </p>
      )}
    </>
  )
}
