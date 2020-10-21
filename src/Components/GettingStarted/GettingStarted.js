import React from "react";
import {Typography, withStyles, Grid, Box} from "@material-ui/core";
import principal from "../../Assets/quick_start/screen1.png";
import botones from "../../Assets/quick_start/screen2.png";
import tarjeta from "../../Assets/quick_start/screen3.png";
import detalle from "../../Assets/quick_start/screen4.png";
const styles = theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4)
    },
    item: {
        maxWidth: 1000
    },
    imgBox: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        maxWidth: 600
    },
    cardBox: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
        maxWidth: 300
    },
    principal: {
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: "3px",
        maxWidth: "100%"
    },
    botones: {
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: "3px",
        maxWidth: "100%"
    },
    tarjeta:{
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: "3px",
        maxWidth: "100%"
    },
    detalle:{
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: "3px",
        maxWidth: "100%"
    },
    imgText:{
        fontWeight: "bold"
    }
});

const GettingStarted = props => {
    const {classes} = props;

    return <div className={classes.root}>

        <Grid container justify="center">
            <Grid item xs={12} className={classes.item}>
                <Typography variant="h5" paragraph>
                    Guía de inicio rápido
                </Typography>

                <Typography align="justify" paragraph>
                    El MDA está organizado desde la perspectiva de la PDN, del lado izquierdo podrás encontrar
                    un menú que cuenta con opciones para filtrar los recursos disponibles en el MDA de acuerdo con los Sistemas de la PDN.
                </Typography>

                <Typography align="justify" paragraph>
                    En el menú del lado izquierdo encontrarás la sección Todos los sistemas, al darle clic podrás visualizar
                    todos los recursos disponibles en MDA o puedes seleccionar cualquier otra opción para filtrar por cada uno de los sistemas que integran la PDN:
                </Typography>

                <ul>
                    <li>
                        <Typography>
                            <b>Sistema 1</b> | Evolución patrimonial, declaración de intereses y constancia de presentación de declaración fiscal (S1).
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>Sistema 2</b> | Servidores públicos que intervengan en procedimientos de contrataciones públicas (S2).
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>Sistema 3</b> | Servidores públicos y particulares sancionados (S3).
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>Sistema 4</b> | Información y comunicación del Sistema Nacional Anticorrupción y el Sistema Nacional de Fiscalización (S4).
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>Sistema 5</b> | Denuncias por faltas administrativas y hechos de corrupción (S5).
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>Sistema 6</b> | Información Pública de contrataciones (S6).
                        </Typography>
                    </li>
                </ul>

                <div align="center">
                    <Box className={classes.imgBox}>
                        <img src={principal} alt="" className={classes.principal}/>
                        <Typography variant="body2" className={classes.imgText}>
                            Pantalla principal del MDA
                        </Typography>
                    </Box>
                </div>


                <Typography paragraph>
                    Al seleccionar cualquiera de las secciones anteriores, podrás observar que existe una serie de filtros (botones) en la parte superior central del MDA. Tales filtros te permiten refinar los recursos disponibles por tipo, por ejemplo: Todos los recursos, APIs, Sistemas o Documentación.
                </Typography>

                <div align="center">
                    <Box className={classes.imgBox}>
                        <img src={botones} alt="" className={classes.botones}/>
                        <Typography variant="body2" className={classes.imgText}>
                            Botones de filtrado por tipo de recurso
                        </Typography>
                    </Box>
                </div>

                <Typography paragraph>
                    Como podrás observar, los recursos del MDA se presentan en tarjetas, que cuentan con el nombre del recurso, una descripción corta y etiquetas que indican con cuáles sistemas está relacionado el recurso.
                </Typography>

                <div align="center">
                    <Box className={classes.cardBox}>
                        <img src={tarjeta} alt="" className={classes.tarjeta}/>
                        <Typography variant="body2" className={classes.imgText}>
                            Ejemplo de tarjeta de recurso
                        </Typography>
                    </Box>
                </div>

                <Typography paragraph>
                    Para conocer más sobre un cierto recurso, da clic sobre la tarjeta correspondiente para entrar a una vista con más detalle.
                </Typography>

                <div align="center">
                    <Box className={classes.imgBox}>
                        <img src={detalle} alt="" className={classes.detalle}/>
                        <Typography variant="body2" className={classes.imgText}>
                            Sección de detalle de un recurso
                        </Typography>
                    </Box>
                </div>

                <Typography paragraph variant="h5">
                    Tipos de recursos disponibles
                </Typography>

                <ul>
                    <li>
                        <Typography>
                            <b>APIs:</b> Servicios Web o APIs Web que te permitirán el intercambio de información de forma programática.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>Sistemas:</b> Sistemas de información y bases de datos que te permitirán la captura, estandarización, organización y resguardo de información.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            <b>Documentación:</b> Guías, presentaciones o cualquier otro recurso multimedia que pueda orientar y facilitar el trabajo de las Instituciones.
                        </Typography>
                    </li>
                </ul>
            </Grid>
        </Grid>
    </div>;
}

export default withStyles(styles)(GettingStarted);