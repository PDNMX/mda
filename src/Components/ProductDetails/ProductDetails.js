import React, {useState} from "react";
import {Button, Typography, Grid, Fab, Box, Chip} from "@mui/material";
import {withStyles} from "@mui/styles"
import ArrowBack from "@mui/icons-material/ArrowBack";
import Business from "@mui/icons-material/Business";
import Email from "@mui/icons-material/Email";
import Call from "@mui/icons-material/Call";
import {getProductById} from "../helpers/getProductById";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import Landing from "../Landing/Landing";

const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        minHeight: 700
    },
    /*item: {
        maxWidth: 1200
    },*/
    /* button:{
         marginTop : theme.spacing(1),
         marginBottom : theme.spacing(3),
         background: '#ffe01b'
     },*/
    /*fab: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        background: '#ffe01b'
    },*/
    screenshot:{
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 2,
        maxWidth: 380,
        [theme.breakpoints.down("sm")]:{
            width: "100%"
        }
    },
    icon: {
        marginRight: theme.spacing(2)
    },
    /*chip: {
        borderRadius: "3px",
        marginRight: theme.spacing(1)
    },*/
    mediaBox: {
        paddingTop: theme.spacing(2),
        maxWidth: 800
    },
    paper: {
        backgroundColor: theme.palette.background.opaque,
        padding: theme.spacing(2),
        color: theme.palette.primario.contrastText,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: theme.palette.secundario.main,
        borderRadius: '10px 10px 10px 10px',
        display: 'flex',
        justifyContent: "center"
    },
    box: {
        maxWidth: '900px', paddingTop: '50px', paddingBottom: '50px'
    }
});

export const ProductDetails = props => {
    const { id } = useParams();
    const product = getProductById(id);
    const {classes,} = props;
    const navigate = useNavigate();

    return( <div >
        <Grid container justifyContent="center">
            <Grid item xs={12} style={{maxWidth: 1200}}>

                <div >
                    <Box >

                        <Fab  size="medium" style={{
                            marginTop: 5,
                            marginBottom: 20,
                            background: '#ffe01b'
                        }}>
                            <ArrowBack />
                        </Fab>

                        <Typography variant="h5">
                            {product.name}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Por {product.maintainer}
                        </Typography>

                        <Typography paragraph align="justify">
                            {product.description}
                        </Typography>

                        <Button variant="contained" href={product.url} target="_blank" color="secundario" sx={{
                            marginTop : 1,
                            marginBottom : 3,
                        }}>
                            Conoce más
                        </Button>

                        <Typography variant="h6">
                            Contacto
                        </Typography>

                        {product.contactPoint.directory_url?
                            <Box paddingTop={1}>
                                <Typography paragraph align="justify">
                                    Si tienes dudas sobre la instalación del Sistema de Declaración Patrimonial y de Intereses
                                    de la PDN comunicate con alguno de los miembros de la Red Nacional de Capacitadores (RNC).
                                </Typography>

                                <Button variant="contained"
                                        href={product.contactPoint.directory_url}
                                        target="_blank"  color="secundario" sx={{
                                    marginTop : 1,
                                    marginBottom : 3,
                                }}>
                                    Directorio RNC
                                </Button>
                            </Box>
                            :
                            <div>
                                <Box display="flex" flexWrap="wrap" p={1}>
                                    <Business />
                                    <Typography>
                                        {product.contactPoint.organization}
                                    </Typography>
                                </Box>

                                <Box display="flex" flexWrap="wrap" p={1}>
                                    <Call />
                                    <Typography>
                                        {product.contactPoint.phone}
                                    </Typography>
                                </Box>

                                <Box display="flex" flexWrap="wrap" p={1} paddingBottom={3}>
                                    <Email />
                                    <Typography>
                                        {product.contactPoint.email}
                                    </Typography>
                                </Box>
                            </div>
                        }

                        <Typography variant="h6" paragraph>
                            Tecnologías
                        </Typography>

                        <Box paddingBottom={2}>
                            {
                                product.technologies.map((t,i) => <Chip
                                    key={i}
                                    label={t}
                                    size="small"
                                    style={{
                                        color: "#ffffff",
                                        fontWeight: "bold",
                                        borderRadius: "3px",
                                        marginRight: 5
                                    }}
                                />)
                            }
                        </Box>

                        {product.media && Array.isArray(product.media) && product.media.length > 0 &&
                            <div>
                                <Box display="flex" flexWrap="wrap">
                                    {
                                        product.media.map((s, i) => {
                                            return <Box key={i} p={1} >
                                                <Typography variant="h6">
                                                    {product.media[i].title}
                                                </Typography>

                                                <iframe width="100%" height="450" src={product.media[i].url}
                                                        title="YouTube video player" frameBorder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen/>

                                                <Typography variant="body2" paragraph align="justify">
                                                    {product.media[i].caption}
                                                </Typography>

                                            </Box>
                                        })
                                    }
                                </Box>
                            </div>
                        }

                        {product.screenshots && Array.isArray(product.screenshots) && product.screenshots.length > 0 &&
                            <div>
                                <Typography variant="h6" paragraph>
                                    Capturas de pantalla
                                </Typography>
                                <Box display="flex" flexWrap="wrap">
                                    {
                                        product.screenshots.map((s, i) => {
                                            return <Box key={i} p={1}>
                                                <img src={product.screenshots[i]} alt="Screenshot" />
                                            </Box>
                                        })
                                    }
                                </Box>
                            </div>
                        }

                    </Box>
                </div>

            </Grid>
        </Grid>

    </div>)
}

export default withStyles(styles)(ProductDetails);