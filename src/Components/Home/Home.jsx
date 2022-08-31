import React, { useEffect, useState } from "react";

//used css style
import HomeStyle from "./Home.module.css";

//used components
import Task from "./task";

function Home() {
  const [tasksArr, setTasksArr] = useState([]);
  const [tempTask, setTempTask] = useState("");
  const [color_, setColor] = useState("white");
  let tempTaskArr = [];

  const inputTask = (event) => {
    if (tempTask.length <= 30) {
      setTempTask(event.target.value);
    }
  };

  const handleClk = () => {
    tempTaskArr = tasksArr;
    tempTaskArr.push(tempTask);
    setTasksArr(tempTaskArr);
    setTempTask("");
  };

  useEffect(() => {
    if (tempTask.length >= 25) {
      setColor("red");
    } else {
      setColor("white");
    }
  }, [tasksArr, tempTask]);

  return (
    <div className={HomeStyle.containrt}>
      <div className={HomeStyle.todoList}>
        <div className={HomeStyle.inputArea}>
          <h1 style={{ color: color_ }}>My To Do List</h1>
          <div>
            <input
              onChange={inputTask}
              value={tempTask}
              placeholder="Title..."
            ></input>
            <button onClick={handleClk}> Add</button>
          </div>
        </div>
        <div className={HomeStyle.tasks}>
          {tasksArr.map((value, index) => {
            return (
              <Task key={index} txt={value} tasksArr={tasksArr} index={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
