import { Box, IconButton, TextField } from '@mui/material';
import React from 'react'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const QuantitySelector = ({quantity, dispatch, id}) => {
  return (
    <div>
      <Box
        sx={{
          border: "1px solid black",
          width: "fit-content",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <IconButton
          onClick={() =>
            dispatch({
              type: "DECREMENT_QTY",
              payload: { id: id }
            })
          }
        >
          {" "}
          <ExpandMoreIcon />
        </IconButton>

        <TextField
          sx={{
            width: "50px",
            ".css-z5e0z9-MuiFormLabel-root-MuiInputLabel-root": {
              top: "-10px",
              left: "18px",
              fontSize: "1.3rem",
            },
            ".css-1eed5fa-MuiInputBase-root-MuiInput-root::before": {
              borderBottom: "0px dotted var(--mycolor)",
            },
            ".css-nz481w-MuiInputBase-input-MuiInput-input": {
              padding: "0",
            },
          }}
          type="number"
          id="filled-hidden-label-small"
          defaultValue="Small"
          label={quantity}
          size="small"
          disabled
          variant="standard"
        />

        <IconButton
          onClick={() =>
            dispatch({
              type: "INCREMENT_QTY",
              payload: { id: id },
            })
          }
        >
          {" "}
          <ExpandLessIcon />
        </IconButton>
      </Box>
    </div>
  );
}

export default QuantitySelector
