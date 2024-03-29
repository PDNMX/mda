import React from 'react';
import { makeStyles } from '@mui/styles';
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Typography} from '@mui/material';
import {NavLink} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderBottom: "2px solid #34b3eb"
    },
    media: {
        height: 140,
    },
    cardContent: {
        height: 170
    }
});

const colors = [
    "#3172B5",
    "#58C2F0",
    "#F2A29F",
    "#59C3C4",
    "#59C3C4",
    "#EFCC45",
];

export default function ProductCard(props) {
    const classes = useStyles();

    const {product} = props;

    return (
        <Card className={classes.root} elevation={3} /*onClick={() => setSelected(product) }*/  >
            <CardActionArea component={NavLink} to={`/producto/${product.id}`}  >
                <CardMedia
                    className={classes.media}
                    image={product.cover}
                    title="Product"
                />
                <CardContent className={classes.cardContent}>
                    <Typography color="textSecondary">
                        {product.maintainer}
                    </Typography>
                    <Typography gutterBottom variant="body1">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {product.abstract}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>

                {product.systems.map( (s, i) => {
                    return <Chip key={i}
                        label={`Sistema ${s}`}
                        size="small"
                        style={{
                            color: "#ffffff",
                            fontWeight: "bold",
                            borderRadius: "3px",
                            backgroundColor: colors[ s-1 ]
                        }}
                    />
                })}

            </CardActions>
        </Card>
    );
}
