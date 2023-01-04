import { useEffect, useState } from 'react';

import NavBar from './components/NavBar';
import UpdateTask from './components/UpdateTask';
import AddTask from './components/AddTask';
import UncompletedTask from './components/UncompletedTask';
import CompletedTask from './components/CompletedTask';
import FooterBar from './components/FooterBar';

function App() {
  // Task State
  const [toDo, setToDo] = useState(() => {
    const items = JSON.parse(localStorage.getItem('uncompletedTask'));
    return items || [];
  });

  const [completeToDo, setCompleteToDo] = useState(() => {
    const items = JSON.parse(localStorage.getItem('completedTask'));
    return items || [];
  });

  useEffect(() => {
    localStorage.setItem('uncompletedTask', JSON.stringify(toDo));
  }, [toDo]);

  useEffect(() => {
    localStorage.setItem('completedTask', JSON.stringify(completeToDo));
  }, [completeToDo]);

  // Temp task
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  // Add task
  const addTask = () => {
    if (newTask) {
      const id = +new Date();
      const newEntry = { id: id, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask('');
    }
  };

  // Delete task
  const deleteTask = (id) => {
    if (toDo.filter((task) => task.id === id)) {
      const targetUncompletedTask = toDo.filter((task) => task.id !== id);
      setToDo(targetUncompletedTask);
    }

    const targetCompletedTask = completeToDo.filter((task) => task.id !== id);
    setCompleteToDo(targetCompletedTask);
  };

  // Mark task as done or completed
  const markDone = (id) => {
    const targetTask = toDo.filter((task) => task.id === id);
    targetTask.forEach((target) => setCompleteToDo([...completeToDo, {...target, status: !target.status}]));

    const allToDo = toDo.filter((task) => task.id !== id);
    setToDo(allToDo);
  };

  // Mark task as not completed
  const markUncompleted = (id) => {
    const targetTask = completeToDo.filter((task) => task.id === id);
    targetTask.forEach((target) => setToDo([...toDo, target]));

    const allDoneTask = completeToDo.filter((task) => task.id !== id);
    setCompleteToDo(allDoneTask);
  }

  // Display update task
  const displayUpdate = (task) => {
    setUpdateData({ id: task.id, title: task.title, status: task.status });
  };

  // Change task for update
  const changeTask = (e) => {
    const targetEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status,
    };
    setUpdateData(targetEntry);
  };

  // Update task
  const updateTask = () => {
    if (updateData.title.length > 0) {
      const filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
      const updatedObject = [...filterRecords, updateData];
      setToDo(updatedObject);
      setUpdateData('');
    } else {
      alert('Please fill in the name of the task to be updated')
    }
  };

  // Cancel update
  const cancelUpdate = () => {
    setUpdateData('');
  };

  // Dark Mode
  const [theme, setTheme] = useState(() => {
    const item = localStorage.getItem('theme');
    return item || '';
  });

  const toggleTheme = () => {
    if (theme === '') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('');
      localStorage.setItem('theme', '');
    }
  };

  return (
    <div className={theme}>
      <div className="min-h-[85.2vh] py-6 px-8 transition-all duration-300 dark:bg-slate-700">
        <header>
          <NavBar 
            theme={theme}
            toggleTheme={toggleTheme}
          />
        </header>
        <section>
          {updateData && updateData ? (
            <>
              {/* Edit Task */}
              <UpdateTask 
                updateData={updateData}
                changeTask={changeTask}
                updateTask={updateTask}
                cancelUpdate={cancelUpdate}
              />
            </>
          ) : (
            <>
              {/* Add Task */}
              <AddTask 
                newTask={newTask}
                setNewTask={setNewTask}
                addTask={addTask}
              />
            </>
          )}
        </section>
        <section className="mt-6">
          <UncompletedTask 
            toDo={toDo}
            markDone={markDone}
            displayUpdate={displayUpdate}
            deleteTask={deleteTask}
          />

          <CompletedTask 
            completeToDo={completeToDo}
            markUncompleted={markUncompleted}
            deleteTask={deleteTask}
          />
        </section>
      </div>
      <footer className="p-2 bg-slate-800 text-slate-100">
        <FooterBar />
      </footer>
    </div>
  );
}

export default App;
