import { Stack, Typography } from '@mui/material'
import React from 'react'
import DialogBox from '../components/DialogBox'
import MenuAppBar from '../components/MenuAppBar'
import TaskCard from '../components/TaskCard'

const index = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <MenuAppBar />
            <div className='max-w-3xl mx-auto'>
                <Typography variant="h5" component="div" sx={{ flexGrow: 1, margin: "20px 0" }}>
                    Latest Tasks
                </Typography>
                <hr />
                <div className='flex flex-col gap-4 mt-6'>
                    {Array(5).fill(0).map((i, j) => {
                        return (
                            <TaskCard key={j} handleClickOpen={handleClickOpen} />
                        )
                    })}
                </div>
            </div>
            <DialogBox open={open} handleClose={handleClose} />
        </div>
    )
}

export default index