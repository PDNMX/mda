import React from 'react';
import { makeStyles } from '@mui/styles';
import {Card, CardActions, CardContent, CardMedia, Chip, Typography} from '@mui/material';
//import CardActionArea from '@material-ui/core/CardActionArea';

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
    },
    bandita:{
        position: "absolute",
        background: '#ffe01b',
        padding: 4,
        borderTopLeftRadius: 3,
        borderBottomRightRadius: 3
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

export default function DisabledCard(props) {
    const classes = useStyles();

    const {product} = props;

    return (
        <Card className={classes.root} elevation={3}>
            {/*<CardActionArea>*/}
            <div className={classes.bandita}>
                <Typography variant="body2" style={{fontWeight:"bold"}}>
                    Próximamente
                </Typography>
            </div>
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
            {/*</CardActionArea>*/}
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
