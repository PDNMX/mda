import React from "react";
import {Grid, Typography, /*Paper,*/ Box, Button} from "@mui/material";
import {withStyles} from "@mui/styles"
import {NavLink} from "react-router-dom";
const styles = theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    videoBox: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
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

                        <Typography variant='h5' paragraph>
                            Manual de usuario
                        </Typography>

                        <Typography paragraph>
                            Conoce a detalle las secciones y funcionalidades del MDA a través del Manual de usuario.
                        </Typography>

                        <Button
                            sx={{
                                color: 'black',
                                'margin': '5px',
                                'background': '#9eb1b6',
                                'borderRadius': '50px',
                                'fontWeight': 'bold',
                                'fontStyle': 'italic',
                                '&:hover': {
                                    backgroundColor: '#56a3bf'
                                }
                            }}
                            variant='contained'
                            href='https://drive.google.com/file/d/10kQkEb8YLQpitT7dSKZnXYFdRhcCetVm/view?usp=sharing' target='_blank'>
                            Manual de usuario
                        </Button>


                    </Box>
                </div>
            </Grid>
        </Grid>
    </div>
}

export default withStyles(styles)(Landing);