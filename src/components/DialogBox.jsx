import { FormControl, FormHelperText, Input, InputLabel, TextField, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import React from 'react';
const DialogBox = ({ open, handleClose }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle component={'p'} id="alert-dialog-title">
                <span>Task ID A0002</span> - <span>Schedule ACTuneUp</span>
            </DialogTitle>
            <hr />
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Let Google help apps determine location. This means sending anonymous
                    location data to Google, even when no apps are running.
                </DialogContentText>
                <form className='flex flex-col gap-6 my-6'>
                    <div className='flex gap-4 items-center'>
                        <label>Vendor Name : </label>
                        <input type="text" className='flex-1 outline-none border px-3 py-1 rounded-sm focus:border-black' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label>Notes for next stage : </label>
                        <textarea rows={3} className='outline-none border px-3 py-1 rounded-sm focus:border-black' />
                    </div>
                    <div className='flex gap-4 items-center'>
                        <label>Notification Email : </label>
                        <input type="email" className='flex-1 outline-none border px-3 py-1 rounded-sm focus:border-black' />
                    </div>
                </form>
            </DialogContent>
            <DialogActions>
                <Typography component={'p'} sx={{ marginRight: "12px", fontSize: "14px" }}>
                    Has this task been completed?
                </Typography>
                <Button variant="contained" onClick={() => { handleClose() }}>Yes</Button>
                <Button variant="contained" onClick={handleClose}>Exit</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DialogBox