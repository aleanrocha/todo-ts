import { FaRegTrashAlt } from 'react-icons/fa'
import { MdModeEditOutline } from 'react-icons/md'

import { ITask } from '../../interfaces/Task'

interface Props {
  taskList: ITask[]
}

export const TaskList = ({ taskList }: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.title}</h4>
              <p>{task.description}</p>
            </div>
            <div>
              <MdModeEditOutline />
              <FaRegTrashAlt />
            </div>
          </div>
        ))
      ) : (
        <p>Ops, nenhuma tarefa cadastrada!</p>
      )}
    </>
  )
}
