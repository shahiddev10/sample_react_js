import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const TaskCard = ({ handleClickOpen }) => {
    return (
        <Card>
            <CardActionArea sx={{ padding: "18px 10px" }} onClick={() => { handleClickOpen() }}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ paddingBottom: "14px" }}>
                        Schedule AC TurnUp
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus suscipit quibusdam, voluptas  eveniet velit magnam ullam ea nobis officia omnis et recusandae optio? Ratione, tempore.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default TaskCard