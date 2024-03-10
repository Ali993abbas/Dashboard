import React from "react";
import "./orders.css";
import Grid from "../../UIComponents/Grid";

function Orders(props) {
  return (
    <div style={{ margin: "10px 0px" }}>
      <span style={{ fontSize: "10px", fontWeight: "600" }}>
        {"Orders > Review status"}
      </span>

      <div id="review-status-grid">
        <span style={{ color: "#3F3F3F", fontWeight: "600" }}>
          Review status
        </span>

        <div style={{ marginTop: "10" }}>
          <input
            id="order-input"
            placeholder="Search..."
            style={{ marginBottom: "10px" }}
          />

          <Grid colums={props.orderReviewCol} data={props.orderReviewData} />
        </div>
      </div>
    </div>
  );
}

export default Orders;
