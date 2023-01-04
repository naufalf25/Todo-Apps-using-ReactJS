const AddTask = ({ newTask, setNewTask, addTask }) => {
  return(
    <div id="addTaskInput" className="mt-10 w-full flex justify-between">
      <input 
        type="text"
        name="task"
        id="task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="w-[65%] py-1 px-2 border border-slate-600 rounded-lg dark:bg-slate-300"
        placeholder="Add New Task Here"
        required
      />
      <button id="addTask" type="submit" className="w-1/3 py-1 px-2 border border-green-600 hover:bg-green-600 hover:text-white rounded-lg font-semibold dark:text-white" onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;