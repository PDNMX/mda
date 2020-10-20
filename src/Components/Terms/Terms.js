import React from "react";
import {Typography, withStyles, Grid} from "@material-ui/core";

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
                    El Mercado Digital Anticorrupción se desarrolló de conformidad con la normatividad vigente de la PDN:
                </Typography>

                <ul>
                    <li>
                        <Typography>Ley General del Sistema Nacional Anticorrupción, publicada en el Diario Oficial de la Federación el 18 de julio del 2016.</Typography>
                    </li>
                    <li>
                        <Typography>Ley General de Responsabilidades Administrativas, publicada en el Diario Oficial de la Federación el 12 de abril del 2016.</Typography>
                    </li>
                    <li>
                        <Typography>Bases para el Funcionamiento de la Plataforma Digital Nacional, publicadas en el Diario Oficial de la Federación el 23 de octubre del 2018.</Typography>
                    </li>
                    <li>
                        <Typography>Estatuto Orgánico de la Secretaría Ejecutiva del Sistema Nacional Anticorrupción, publicado en el Diario Oficial de la Federación el 21 de julio de 2017.</Typography>
                    </li>
                </ul>

                <Typography style={{fontWeight: "bold"}}>
                    Sobre el uso de Mercado Digital Anticorrupción
                </Typography>

                <ul>
                    <li>
                        <Typography>
                            No dañar, inutilizar o deteriorar los sistemas informáticos que puedan ser incorporados en este sitio, incluido el portal plataformadigitalnacional.org.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            El usuario se obliga a hacer buen uso del sitio, respetando la Ley General del Sistema Nacional Anticorrupción, la Ley Federal de Derechos de Autor y demás normatividad aplicable.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Debe contar con un equipo que cumpla con las características mínimas necesarias para navegar en el sitio, recomendando su navegación en las últimas versiones de los navegadores Google Chrome, Mozilla Firefox y Safari para obtener la mejor experiencia.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Exime a la SESNA de toda responsabilidad por los daños que el uso del sitio le pudieran ocasionar en forma incidental o consecuente con su equipo, información, patrimonio o persona, así como ninguna responsabilidad por la la alteración o manipulación de los datos una vez publicados en él.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Acepta y se obliga a utilizar el sitio para fines lícitos y con apego a las disposiciones legales aplicables.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Al incorporar cualquier herramienta o recurso al MDA deberás aceptar su distribución bajo los Términos de Libre Uso MX, disponibles en la siguiente dirección web: https://datos.gob.mx/libreusomx
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Una vez que se reciba el oficio de solicitud, el personal de la USTPDN verificará que la herramienta se encuentre disponible abiertamente, que cumpla con su descripción y que su funcionamiento sea el esperado.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            La SESNA se reserva el derecho de negar la incorporación de recursos al MDA que no cumplan de manera puntual con lo que su descripción indica o que no cuenten con un nivel de calidad adecuado.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Asimismo, la SESNA podrá remover del MDA cualquier recurso que incumpla con los criterios y objetivos del mismo.
                        </Typography>
                    </li>
                </ul>

                <Typography style={{fontWeight: "bold"}}>
                    Propiedad interlectual
                </Typography>

                <ul>
                    <li>
                        <Typography>
                            La información del portal plataformadigitalnacional.org es pública a menos que se indique lo contrario, en cuyo caso antes de reproducirla, deberás observar si tiene derechos reservados y respetarlos en términos de las normas relativas a derechos de autor y propiedad industrial.
                        </Typography>
                    </li>

                </ul>

                <Typography style={{fontWeight: "bold"}}>
                    Actualización de términos y condiciones
                </Typography>
                <ul>
                    <li>
                        <Typography>
                            La SESNA cuenta con la facultad de modificar los presentes Términos y Condiciones en cualquier momento a efecto de mejorar tu experiencia en la utilización de la PDN.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Al respecto, estos Términos y Condiciones pueden cambiar, por lo que te pedimos revisar constantemente nuestro portal.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            El uso del portal plataformadigitalnacional.org o de cualquiera de sus componentes, implica la aceptación expresa de los presentes "Términos y Condiciones".
                        </Typography>
                    </li>

                </ul>

            </Grid>
        </Grid>
    </div>;
}

export default withStyles(styles)(Terms);