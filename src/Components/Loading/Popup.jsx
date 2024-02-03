import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'


const Popup = (props) => {
    const{children, open , setOpen} = props;
  return (
    <div>
      <Dialog open={open} onClose={() => setOpen(false)} maxWidth={'lg'}>
        <DialogTitle>hi dialog</DialogTitle>
        <DialogContent sx={{ width: "100%" }}>{children}</DialogContent>
      </Dialog>
    </div>
  );
}

export default Popup
