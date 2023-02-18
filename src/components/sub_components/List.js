import React from "react";
import ListItem from "./ListItem";
import "../../css/sub_components/List.css";

function List({ list }) {
  return (
    <div className="list">
      <ul>
        {list.map((item) => (
          <li className="list__listItem">
            <ListItem
              Icon={item.Icon}
              IconColor={item.IconColor}
              ItemName={item.ItemName}
              ItemNum={item.ItemNum}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
