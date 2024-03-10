import React from "react";
import ViewListIcon from "@mui/icons-material/ViewList";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import TvIcon from "@mui/icons-material/Tv";
import AddCardIcon from "@mui/icons-material/AddCard";

function PagesList(props) {
  return (
    <div>
      <ul id="pages-list">
        <li
          id="pages-list-item"
          onClick={() => props.setActiveModule("orders")}
        >
          <div
            className={props.activeModule == "orders" ? "active" : ""}
            style={{ display: "flex", justifyContent: "start" }}
          >
            <ViewListIcon color="1370A4" className="menu-page-list-icon" />
            <span className="page-list-item">Orders</span>
          </div>
        </li>
        <li
          id="pages-list-item"
          onClick={() => props.setActiveModule("review")}
        >
          <div
            className={props.activeModule == "review" ? "active" : ""}
            style={{ display: "flex", justifyContent: "start" }}
          >
            <BlurOnIcon color="1370A4" className="menu-page-list-icon" />
            <span className="page-list-item">Review</span>
          </div>
        </li>
        <li
          id="pages-list-item"
          onClick={() => props.setActiveModule("monitoring")}
        >
          <div className={props.activeModule == "monitoring" ? "active" : ""}>
            <TvIcon color="1370A4" className="menu-page-list-icon" />
            <span className="page-list-item">Monitoring</span>
          </div>
        </li>
        <li
          id="pages-list-item"
          onClick={() => props.setActiveModule("billing")}
        >
          <div className={props.activeModule == "billing" ? "active" : ""}>
            <AddCardIcon color="1370A4" className="menu-page-list-icon" />
            <span className="page-list-item">Billing and Payment</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default PagesList;
