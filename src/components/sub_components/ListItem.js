import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/sub_components/ListItem.css";

function ListItem({ Icon, IconColor, ItemName, ItemNum }) {
  return (
    <div className="listItem">
      <div className="listItem__icon">
        <FontAwesomeIcon icon={Icon} style={{ color: IconColor }} />
      </div>
      <div className="listItem__name">{ItemName}</div>
      <div className="listItem__num">{ItemNum}</div>
    </div>
  );
}

export default ListItem;
