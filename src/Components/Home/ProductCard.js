import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        borderBottom: "2px solid #34b3eb"
    },
    media: {
        height: 140,
    },
});

export default function ProductCard(props) {
    const classes = useStyles();

    const {product} = props;

    return (
        <Card className={classes.root} elevation={3}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={product.cover}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography color="textSecondary">
                        {product.maintainer}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h2">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
