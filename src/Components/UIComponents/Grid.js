import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import GoogleIcon from "@mui/icons-material/Google";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function Grid(props) {
  let sx = {
    whiteSpace: "nowrap", // Prevent text from wrapping to the next line
    overflow: "hidden", // Hide the overflow content
    textOverflow: "ellipsis", // Display ellipsis for overflow text
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead style={{ backgroundColor: "#F6F8FA" }}>
          <TableRow>
            {props.colums.map((col) => {
              return (
                <>
                  <TableCell
                    sx={sx}
                    style={{ fontSize: "9px" }}
                    align={col.align}
                  >
                    {col.title}
                  </TableCell>
                </>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                style={{ fontSize: "10px" }}
                component="th"
                scope="row"
                sx={sx}
              >
                <GoogleIcon />
              </TableCell>
              <TableCell style={{ fontSize: "10px" }} sx={sx}>
                {row.reviewerName}
              </TableCell>
              <TableCell style={{ fontSize: "10px" }} sx={sx}>
                {row.reviewDate}
              </TableCell>
              <TableCell
                style={{ fontSize: "10px", fontWeight: "600" }}
                sx={sx}
              >
                {row.reviewContent}
              </TableCell>
              <TableCell style={{ fontSize: "10px" }} sx={sx}>
                <span>{row.rating}</span>
                <StarIcon
                  style={{ color: "#faaf00", verticalAlign: "text-top" }}
                  fontSize="10px"
                />
              </TableCell>
              <TableCell style={{ fontSize: "10px" }} sx={sx}>
                {row.removalProbability}
              </TableCell>
              <TableCell style={{ fontSize: "10px" }} sx={sx}>
                {row.orderStatus == "Purchased" ? (
                  <>
                    <div
                      style={{
                        border: "1px solid #E2E4E9",
                        borderRadius: "5px",
                        paddingLeft: "2px",
                        paddingRight: "2px",
                        width: "fit-content",
                      }}
                    >
                      <CheckCircleIcon
                        fontSize="small"
                        style={{ color: "#2D9F75", fontSize: "10px" }}
                      />
                      <span style={{ fontSize: "10px", marginLeft: "2px" }}>
                        {row.orderStatus}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      style={{
                        border: "1px solid #E2E4E9",
                        borderRadius: "5px",
                        paddingLeft: "2px",
                        paddingRight: "2px",
                        width: "fit-content",
                      }}
                    >
                      <CheckCircleIcon
                        fontSize="small"
                        style={{ color: "#868C98", fontSize: "10px" }}
                      />
                      <span style={{ fontSize: "10px", marginLeft: "2px" }}>
                        {row.orderStatus}
                      </span>
                    </div>
                  </>
                )}
              </TableCell>
              <TableCell
                style={{
                  fontSize: "10px",
                  color:
                    row.removalStatus == "Pending removal"
                      ? "#F2AE40"
                      : row.removalStatus == "Online"
                      ? "#2D9F75"
                      : "#DF1C41",
                }}
                sx={sx}
              >
                {row.removalStatus}
              </TableCell>
              <TableCell style={{ fontSize: "10px" }} sx={sx}>
                {row.remainingTime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Grid;
