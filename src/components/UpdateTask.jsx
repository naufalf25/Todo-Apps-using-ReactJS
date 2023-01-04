const UpdateTask = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return(
    <div id="updateTaskInput" className="mt-10 w-full">
      <input 
        type="text"
        name="task"
        id="task"
        value={updateData && updateData.title}
        onChange={(e) => changeTask(e)}
        className="w-full py-1 px-2 border border-slate-600 rounded-lg dark:bg-slate-300"
        placeholder="Update the Task Here"
      />
      <div className="mt-4 flex justify-evenly">
        <button id="updateTask" type="submit" className="w-[40%] py-1 px-2 border border-green-600 hover:bg-green-600 hover:text-white rounded-lg font-semibold dark:text-white" onClick={updateTask}>Update Task</button>
        <button id="cancelUpdateTask" className="w-[40%] py-1 px-2 border border-red-600 hover:bg-red-600 hover:text-white rounded-lg font-semibold dark:text-white" onClick={cancelUpdate}>Cancel</button>
      </div>
    </div>
  );
};

export default UpdateTask;