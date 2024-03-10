import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";
import Rating from "@mui/material/Rating";

function ReviewAccordian(props) {
  //   const [expand, setExpand] = useState(false);
  return (
    <div style={{ margin: "5px 0px" }}>
      {" "}
      <Accordion
        // expanded={expand}
        style={{
          border: "1px solid #105C86",
          borderRadius: "2px",
          boxShadow: "none",
        }}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
            // onClick={() => setExpand(!expand)}
            />
          }
          aria-controls="panel1-content"
          id="panel1-header"
          style={{
            backgroundColor: "#F9F9F9",
            minHeight: "26px",
            maxHeight: "32px",
          }}
        >
          <div id="accordian-summary">
            <div style={{ width: "100%" }}>
              <input
                type="checkbox"
                onChange={(e) => {
                  e.stopPropagation();
                  if (e.target.checked) {
                    let childIds = props.data.map((d) => {
                      return { child: d.id, parent: props.id };
                    });

                    props.setReviewsSelected([
                      ...props.reviewsSelected,
                      props.id,
                    ]);
                    props.setSubReviewsSelected(childIds);
                  } else {
                    let filteredIds = props.reviewsSelected.filter(
                      (review) => review != props.id
                    );
                    props.setReviewsSelected(filteredIds);
                  }
                }}
                checked={props.reviewsSelected.includes(props.id)}
              />
              <span
                style={{
                  color: "#282B33",
                  fontWeight: "800",
                  fontSize: "11px",
                  marginLeft: "10px",
                  verticalAlign: "text-top",
                }}
              >
                {props.title}
              </span>
              <span
                style={{
                  fontSize: "9px",
                  marginLeft: "10px",
                  padding: "5px",
                  backgroundColor: "#105C86",
                  color: "white",
                  borderRadius: "10px",
                  verticalAlign: "middle",
                }}
              >
                {props.count}
              </span>
            </div>

            <div
              style={{
                width: "100%",
                verticalAlign: "text-top",
                color: "#1370A4",
              }}
            >
              <span style={{ fontSize: "11px", verticalAlign: "text-top" }}>
                {props.detail}
              </span>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails style={{ paddingTop: "0px" }}>
          <>
            {props.data.map((ele) => {
              return (
                <div>
                  {" "}
                  <div style={{ display: "flex", margin: "10px 0px" }}>
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        e.stopPropagation();
                        if (e.target.checked) {
                          props.setSubReviewsSelected([
                            ...props.subReviewsSelected,
                            { child: ele.id, parent: props.id },
                          ]);
                        } else {
                          let filteredIds = props.subReviewsSelected.filter(
                            (review) => review.child != ele.id
                          );
                          props.setSubReviewsSelected(filteredIds);
                        }
                      }}
                      checked={props.subReviewsSelected.some(
                        (rev) => rev.child === ele.id
                      )}
                    />
                    <Avatar
                      alt={ele.name}
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 24, height: 24 }}
                      style={{
                        marginLeft: "10px",
                        marginRight: "5px",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    />
                    <div style={{ display: "grid" }}>
                      <span style={{ margin: "1px 0px" }}>{ele.name}</span>
                      <span style={{ fontSize: "11px", margin: "1px 0px" }}>
                        {ele.summary}
                      </span>
                      <Rating
                        name="read-only"
                        value={ele.stars}
                        readOnly
                        size="small"
                      />
                    </div>
                  </div>
                  <Divider
                    color="#EAEDF3"
                    style={{ marginTop: "5px", height: "2px" }}
                  />
                </div>
              );
            })}
          </>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ReviewAccordian;
