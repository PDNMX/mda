import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from "@material-ui/core/Chip";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderBottom: "2px solid #34b3eb"
    },
    media: {
        height: 140,
    },
    chip:{
        //background: '#ffe01b',
        color: "#ffffff",
        fontWeight: "bold",
        borderRadius: "3px"
    },
    cardContent: {
        height: 180
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

    const {product, setSelected} = props;

    return (
        <Card className={classes.root} elevation={3} onClick={() => setSelected(product) }>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.cover}
                    title="Contemplative Reptile"
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
                        className={classes.chip}
                        size="small"
                        style={{
                            backgroundColor: colors[ s-1 ]
                        }}
                    />
                })}

            </CardActions>
        </Card>
    );
}
