import React, { useState } from "react";

import "../css/components/Main.css";
import AddIcon from "@mui/icons-material/Add";
import Popup from "./Popup";
import Task from "./sub_components/Task";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";

function Main({ width }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <>
      {sidebarVisible && width < 600 ? (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              position: "absolute",
              zIndex: 100,
              top: 0,
              left: 0,
              overflowX: "hidden",
              transition: "0.5s",
              background: "black",
              opacity: "0.5",
              width: "100vw",
              height: "100vh",
            }}
            onClick={() => setSidebarVisible(false)}
          ></div>
          <Sidebar />
        </>
      ) : (
        <></>
      )}
      <div className="main">
        <div className="main__header">
          <div className="header__hamburgerMenu">
            {width < 600 ? (
              <MenuIcon onClick={() => setSidebarVisible(!sidebarVisible)} />
            ) : (
              <></>
            )}
          </div>
          <div>
            <p className="header__heading">My Day</p>
            <p className="header__timestamp">{new Date().toDateString()}</p>
          </div>
        </div>
        <div className="main__main">
          {todoList.length > 0 &&
            todoList.map((task, index) => (
              <Task
                key={`${task}index`}
                index={index}
                taskName={task.taskName}
                category={task.category}
                setTodoList={setTodoList}
                todoList={todoList}
              />
            ))}
          <div className="main__main-component">
            <div
              className="main__main-subComponent"
              onClick={() => setPopupVisible(true)}
            >
              <span>
                <AddIcon />
              </span>
              <span>New Todo Item</span>
            </div>
          </div>
        </div>
      </div>

      {popupVisible ? (
        <Popup
          setTodoList={setTodoList}
          setPopupVisible={setPopupVisible}
          todoList={todoList}
        />
      ) : (
        <></>
      )}
    </>
  );
}

export default Main;
