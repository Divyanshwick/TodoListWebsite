import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "../css/components/Sidebar.css";
import { firstList, secondList } from "../helper";
import List from "./sub_components/List";
import AddIcon from "@mui/icons-material/Add";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="header__faceIcon">
          <AccountCircleIcon fontSize="large" />
        </div>
        <div className="header__username">Divyansh Kumar</div>
        <div className="header__searchIcon">
          <SearchIcon />
        </div>
      </div>
      <div className="sidebar__list">
        <List list={firstList} />
        <List list={secondList} />
        <div className="sidebar__lastItem">
          <span>
            <AddIcon />
          </span>
          <span>New List</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
