import React from "react";
import {withStyles, Button, Typography, Grid, Fab, Box} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Business from "@material-ui/icons/Business";
import Email from "@material-ui/icons/Email";
import Call from "@material-ui/icons/Call";
import Chip from "@material-ui/core/Chip";


const styles = theme => ({
   root: {
       padding: theme.spacing(1),
       minHeight: 700
   },
    item: {
       maxWidth: 1000
    },
    button:{
        marginTop : theme.spacing(1),
        marginBottom : theme.spacing(3),
        background: '#ffe01b'
    },
    fab: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        background: '#ffe01b'
    },
    screenshot:{
       maxWidth: 380,
        [theme.breakpoints.down("sm")]:{
           width: "100%"
        }
    },
    icon: {
       marginRight: theme.spacing(2)
    },
    chip: {
       borderRadius: "3px",
        marginRight: theme.spacing(1)
    }
});

const ProductDetails = props => {
    const {classes, product, setSelected} = props;

    return <div className={classes.root}>
        <Grid container justify="center">
            <Grid item xs={12} className={classes.item}>
                <Fab onClick={ () => setSelected(null)} className={classes.fab} size="medium">
                    <ArrowBack/>
                </Fab>

                <Typography variant="h5">
                    {product.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                    Por {product.maintainer}
                </Typography>

                <Typography paragraph align="justify">
                    {product.description}
                </Typography>

                <Button variant="contained" href={product.url} target="_blank" className={classes.button}>
                    Conoce más
                </Button>

                <Typography variant="h6">
                    Contacto
                </Typography>

                <Box display="flex" flexWrap="wrap" p={1}>
                    <Business className={classes.icon}/>
                    <Typography>
                        {product.contactPoint.organization}
                    </Typography>
                </Box>

                <Box display="flex" flexWrap="wrap" p={1}>
                    <Call className={classes.icon}/>
                    <Typography>
                        {product.contactPoint.phone}
                    </Typography>
                </Box>

                <Box display="flex" flexWrap="wrap" p={1} paddingBottom={3}>
                    <Email className={classes.icon}/>
                    <Typography>
                        {product.contactPoint.email}
                    </Typography>
                </Box>

                <Typography variant="h6" paragraph>
                    Tecnologías
                </Typography>

                <Box paddingBottom={2}>
                    {
                        product.technologies.map((t,i) => <Chip
                            key={i}
                            label={t}
                            size="small"
                            className={classes.chip}
                        />)
                    }
                </Box>

                {product.screenshots && Array.isArray(product.screenshots) && product.screenshots.length > 0 &&
                <div>
                    <Typography variant="h6" paragraph>
                        Capturas de pantalla
                    </Typography>
                    <Box display="flex" flexWrap="wrap">
                        {
                            product.screenshots.map((s, i) => {
                                return <Box key={i} p={1}>
                                    <img src={product.screenshots[i]} alt="Screenshot" className={classes.screenshot}/>
                                </Box>
                            })
                        }
                    </Box>
                </div>
                }
            </Grid>
        </Grid>

    </div>
}

export default withStyles(styles)(ProductDetails);