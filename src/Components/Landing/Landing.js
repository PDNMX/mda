import React from "react";
import {Grid, Typography, /*Paper,*/ Box} from "@mui/material";
import {withStyles} from "@mui/styles"
const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    videoBox: {
        paddingTop: theme.spacing(2),
        maxWidth: 800
    },
    /*item: {
        maxWidth: 1200 //No funciona
    },*/
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

const Landing = props => {
    const {classes} = props;
    return <div className={classes.root}>
        <Grid container justifyContent="center">
            <Grid item xs={12} style={{maxWidth:1200}}>
                <div className={classes.paper}>
                    <Box className={classes.box}>
                        <Typography variant="h5" paragraph>
                            ¿Qué es el Mercado Digital Anticorrupción?
                        </Typography>

                        <Typography paragraph align="justify">
                            El Mercado Digital Anticorrupción (MDA) es un espacio donde podrás encontrar diversas herramientas que facilitarán el desarrollo y conexión de los sistemas que conforman a la Plataforma Digital Nacional. Estas herramientas podrán ser utilizadas por todas las Instituciones que las requieran, ya que son de libre uso.
                        </Typography>

                        <Typography paragraph align="justify">
                            Además, en el MDA también se podrán ofertar herramientas que fueron desarrolladas por diversas instituciones y que cumplen los objetivos de la PDN, así que selecciona la que más se adapte a tus necesidades y prueba, ¡descarga y utiliza!
                        </Typography>

                        <Typography paragraph align="justify">
                            Encontrarás más información sobre la navegación en el MDA en la sección de <b>Inicio rápido</b>.
                        </Typography>

                        <Typography paragraph align="justify">
                            Si estás interesado en compartir una herramienta en el mercado digital revisa la sección de <b>Preguntas frecuentes</b>.
                        </Typography>

                        <div align="center">
                            <Box className={classes.videoBox}>
                                <iframe width="100%" height="450" src="https://www.youtube.com/embed/JQNPwOOG4yw?rel=0" frameBorder="0" title={'Video'}
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen/>

                            </Box>
                        </div>
                    </Box>
                </div>
            </Grid>
        </Grid>
    </div>
}

export default withStyles(styles)(Landing);