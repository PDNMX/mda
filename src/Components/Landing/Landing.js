import React from "react";
import {Grid, withStyles, Typography, Box} from "@material-ui/core";
const styles = theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    videoBox: {
        paddingTop: theme.spacing(2),
        maxWidth: 800
    },
    item: {
        maxWidth: 1000
    }
});

const Landing = props => {
    const {classes} = props;
    return <div className={classes.root}>
        <Grid container justify="center">
            <Grid item className={classes.item}>
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
            </Grid>
        </Grid>
    </div>
}

export default withStyles(styles)(Landing);