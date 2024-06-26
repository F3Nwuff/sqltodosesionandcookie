import { Task } from '../task';
// import { DateTimeDisplay } from '../task';
import styles from './tasks.module.css';
import { useState, useEffect } from 'react';
import { TbBasketShare, TbTrash } from 'react-icons/tb';
import Cookies from 'js-cookie'


export function Tasks({ tasks, onDelete, onDeleteAllCompleted, onComplete }) {
  const [showCompleted, setShowCompleted] = useState(false);
  console.log('cookie',Cookies.get('showCompleted'));

  useEffect(() => {
    // Load the display state from the cookie when the component mounts
    const showCompletedCookie = Cookies.get('showCompleted');
    if (showCompletedCookie === 'true') {
      setShowCompleted(true);
    } else {
      setShowCompleted(false);
    }
  }, []);

  function handleShowCompleted() {
    setShowCompleted(true);
    Cookies.set('showCompleted', 'true', { expires: 30 }); // Store in cookie for 30 days
  }

  function handleShowCurrent() {
    setShowCompleted(false);
    Cookies.set('showCompleted', 'false', { expires: 30 }); // Store in cookie for 30 days
  }
  console.log(tasks)
  const completedTasks = tasks.filter(task => task.isCompleted).length;
  const currentTasks = tasks.length - completedTasks;

  // function handleShowCompleted() {
  //   setShowCompleted(true);
  // }

  // function handleShowCurrent() {
  //   setShowCompleted(false);
  // }

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          {/* Button to show current tasks */}
          <div onClick={handleShowCurrent}>
            <button className={styles.currTaskBtn}>Current Tasks</button>
          </div>
          {/* Display the number of current tasks */}
          <span>{currentTasks} of {tasks.length}</span>
          {/* Button to show completed tasks */}
          <div onClick={handleShowCompleted}>
            <button className={styles.completedTaskBtn}>Completed tasks</button>
          </div>
          {/* Display the number of completed tasks */}
          <span>{completedTasks} of {tasks.length}</span>
        </div>
        {/* Button to delete all completed tasks */}
        <div>
          <span>{completedTasks} Completed</span>
          <button className={styles.deleteButton} onClick={() => onDeleteAllCompleted()}>
            <TbTrash size={20} />
          </button>
        </div>
      </header>

      <div className={styles.list}>
        {/* Render tasks based on whether to show completed or current tasks */}
        {(showCompleted ? tasks.filter(task => task.isCompleted) : tasks.filter(task => !task.isCompleted)).map((task) => (
          <Task key={task.task_id} task={task} onDelete={onDelete} onComplete={onComplete} />
        ))}
      </div>
    </section>
  );
}
