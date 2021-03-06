import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardCategory( {category} ){
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={category.image}
                    alt="green iguana"
                    sx={{minWidth: 200}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {category.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}