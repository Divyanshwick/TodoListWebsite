import React from "react";

function DeletePopup({ todoList, setTodoList, index, setShowDeletePopup }) {
  const handleDelete = (e) => {
    e.preventDefault();
    const todoArray = [...todoList];
    todoArray.splice(index, 1);
    setTodoList(todoArray);
    setShowDeletePopup(false);
  };
  return (
    <div>
      <div className="container"></div>
      <div className="popup">
        <div className="popup__header">
          <p>Are you sure you want to DELETE ?</p>
        </div>
        <div className="popup__footer">
          <button
            className="footer__btnLeft"
            style={{ color: "#EF5350" }}
            onClick={() => setShowDeletePopup(false)}
          >
            No
          </button>
          <button
            type="submit"
            className="footer__btnRight"
            style={{ color: "#7289DA" }}
            onClick={handleDelete}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletePopup;
