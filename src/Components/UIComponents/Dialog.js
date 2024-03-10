import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

function DialogCustom(props) {
  return (
    <Dialog
      open={props.open}
      onClose={props.handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={props.dialogType == "orderConfirmation" ? false : true}
    >
      <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
      <DialogContent>{props.dialogContent()}</DialogContent>
      {props.dialogAction && (
        <DialogActions>{props.dialogAction()}</DialogActions>
      )}
    </Dialog>
  );
}

export default DialogCustom;
