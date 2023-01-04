import React from "react";
import { FaTrash, FaTimesCircle } from 'react-icons/fa';

const CompletedTask = ({ completeToDo, markUncompleted, deleteTask }) => {
  return(
    <>
      <h2 className="pb-2 text-xl font-semibold text-center border-b border-b-slate-400 dark:text-white">Completed Tasks</h2>
      <div className="mt-4 mb-10 max-h-96 flex flex-col gap-3 overflow-y-auto">
        <div className="text-center"><h3 className="font-semibold uppercase text-slate-500 dark:text-slate-300">{completeToDo && completeToDo.length ? '' : 'No Tasks'}</h3></div>

        {completeToDo && completeToDo
          .sort((a, b) => a.id > b.id ? 1 : -1)
          .map((task) => {
            return(
              <React.Fragment key={task.id}>
                <div className="w-full py-3 px-4 bg-slate-200 rounded-lg md:flex md:justify-between md:items-center dark:bg-slate-300">
                  <div className="opacity-40 line-through md:w-3/5">
                    <span className="text-sm text-slate-600">{`ID: ${task.id}`}</span>
                    <h2 className="text-2xl font-semibold">{task.title}</h2>
                  </div>
                  <div className="mt-5 flex justify-evenly text-xl md:mt-0 md:w-1/5 md:justify-end md:gap-8">
                    <button 
                      title="mark task uncompleted"
                      className="hover:text-red-600"
                      onClick={(e) => markUncompleted(task.id)}
                    ><FaTimesCircle /></button>
                    <button title="delete task" className="hover:text-red-600" onClick={() => deleteTask(task.id)}><FaTrash /></button>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        }
      </div>
    </>
  );
};

export default CompletedTask;
