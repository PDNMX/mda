import React from "react";
import {Typography, withStyles, Grid, Link} from "@material-ui/core";

const styles = theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    item: {
        maxWidth: 1000
    }
});

const Terms = props => {
    const {classes} = props;
    return <div className={classes.root}>
        <Grid container justify="center">
            <Grid item className={classes.item}>
                <Typography variant="h5" paragraph>
                    Términos y condiciones de uso del Mercado Digital Anticorrupción
                </Typography>

                <Typography paragraph>
                El Mercado Digital Anticorrupción se desarrolló de conformidad con la normatividad vigente
                </Typography>

                <Typography paragraph>
                Al incorporar cualquier herramienta o recurso al MDA deberás aceptar su distribución bajo los Términos de Libre Uso MX, disponibles en la siguiente dirección web:
                </Typography>

                <Link href="https://datos.gob.mx/libreusomx">
                    https://datos.gob.mx/libreusomx
                </Link>

                <Typography paragraph>
                Una vez que se reciba el oficio de solicitud, el personal de la USTPDN verificará que la herramienta se encuentre disponible abiertamente, que cumpla con su descripción y que su funcionamiento sea el esperado.
                </Typography>

                <Typography paragraph>
                La SESNA se reserva el derecho de negar la incorporación de recursos al MDA que no cumplan de manera puntual con lo que su descripción indica o que no cuenten con un nivel de calidad adecuado.
                </Typography>

                <Typography paragraph>
                    Asimismo, la SESNA podrá remover del MDA cualquier recurso que incumpla con los criterios y objetivos del mismo.
                </Typography>

            </Grid>
        </Grid>
    </div>;
}

export default withStyles(styles)(Terms);