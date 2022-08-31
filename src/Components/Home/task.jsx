import React, { useEffect, useState } from "react";

//used css style
import HomeStyle from "./Home.module.css";

function Task(props) {
  const [taskTxt, setTaskTxt] = useState(props.txt);
  const [txtDecoration, setTxtDecoration] = useState("none");
  useEffect(() => {}, [taskTxt]);

  return (
    <>
      {taskTxt.length > 0 && (
        <div className={HomeStyle.taskContainer}>
          {taskTxt.length > 0 ? (
            <>
              <span
                className={HomeStyle.taskTxt}
                style={{ textDecoration: txtDecoration }}
              >
                {" "}
                {taskTxt}
              </span>

              <span className={HomeStyle.taskBtns}>
                <button
                  className={HomeStyle.closeBtn}
                  onClick={() => {
                    setTaskTxt("");
                  }}
                >
                  <img
                    width={"15px"}
                    height="15px"
                    src="https://cdn-icons-png.flaticon.com/512/1828/1828774.png"
                  ></img>
                </button>
                <button
                  className={HomeStyle.closeBtn}
                  onClick={() => {
                    setTxtDecoration("line-through");
                  }}
                >
                  <img
                    width={"17px"}
                    height="17px"
                    src="https://cdn-icons-png.flaticon.com/512/64/64484.png"
                  ></img>
                </button>
              </span>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}

export default Task;
