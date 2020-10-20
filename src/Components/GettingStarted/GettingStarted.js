import React from "react";
import {Typography, withStyles, Grid} from "@material-ui/core";
const styles = theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4)
    },
    videoBox: {
        paddingTop: theme.spacing(2),
        maxWidth: 800
    },
    item: {
        maxWidth: 1000
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
                    El MDA está organizado desde la perspectiva de la PDN, en la extrema izquierda podrás encontrar
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

                {/* screenShot */}

                <Typography paragraph>
                    Al seleccionar cualquiera de las secciones anteriores, podrás observar que existe una serie de filtros (botones) en la parte superior central del MDA. Tales filtros te permiten refinar los recursos disponibles por tipo, por ejemplo: Todos los recursos, APIs, Sistemas o Documentación.
                </Typography>

                {/* screenShot */}

                <Typography paragraph>
                    Como podrás observar, los recursos del MDA se presentan en tarjetas, que cuentan con el nombre del recurso, una descripción corta y etiquetas que indican con cuáles sistemas está relacionado el recurso.
                </Typography>

                {/* screenShot */}

                <Typography paragraph>
                    Para conocer más sobre un cierto recurso, da clic sobre la tarjeta correspondiente para entrar a una vista con más detalle.
                </Typography>


                <Typography paragraph>
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