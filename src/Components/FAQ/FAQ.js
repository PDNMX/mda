import React from "react";
import {withStyles, Grid, Typography, Link, Box} from "@material-ui/core";
const styles = theme => ({
    root:{
      padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    item: {
        maxWidth: 1000
    },
    question:{
        fontWeight: "bold"
    },
    ol: {
        fontWeight: "bold",
        fontFamily: "Noto Sans SC",
        fontSize: 16
    }
})

const FAQ = props =>{
    const {classes} = props;
    return <div className={classes.root}>
        <Grid container justify="center">
            <Grid item className={classes.item}>
                <Typography variant="h5" paragraph>
                    Preguntas frecuentes
                </Typography>

                <Typography className={classes.question}>
                    ¿Se necesita firmar algún convenio para comenzar a utilizar las herramientas del MDA?
                </Typography>

                <Typography paragraph align="justify">
                    No, las herramientas del MDA están disponibles abiertamente y son de "libre uso".
                    Sin embargo, es posible que se necesite establecer algún convenio de colaboración en caso de
                    requerir apoyo especial (instalación, tropicalización, etc.) de parte de la institución o persona que publica la herramienta a través del MDA.
                </Typography>


                <Typography className={classes.question}>
                    ¿Quién es el responsable del mantenimiento de las herramientas que se difunden en el MDA?
                </Typography>

                <Typography paragraph align="justify">
                    El MDA es un espacio en donde se comparten herramientas y conocimientos, no obstante, la responsabilidad de actualizar y mantener vigentes los mencionados recursos es responsabilidad de las instituciones o personas que la publican en el MDA.
                </Typography>

                <Typography paragraph align="justify">
                    Puedes obtener ayuda a través de los datos de contacto que aparecen en la sección de cada herramienta.
                </Typography>


                <Typography className={classes.question}>
                    ¿Dónde consigo ayuda para instalar o configurar una herramienta?
                </Typography>

                <Typography paragraph align="justify">
                    Puedes solicitar ayuda a través de los datos contacto que aparecen en la sección de cada herramienta.
                </Typography>

                <Typography className={classes.question}>
                    ¿A quien debo reportar fallas o defectos en las herramientas?
                </Typography>

                <Typography paragraph align="justify">
                    Cada una de las herramientas disponibles en el MDA es responsabilidad de la institución que la generó y la compartió.
                    En caso de registrar alguna falla o defecto es muy importante que contactes a la persona que aparece como contacto de la herramienta.
                </Typography>

                <Typography className={classes.question}>
                    ¿Qué tipo de infraestructura de cómputo o licencias de software necesito para instalar las herramientas?
                </Typography>

                <Typography paragraph align="justify">
                    Si tienes dudas sobre la instalación o puesta en marcha de las herramientas publicadas en el MDA puedes obtener ayuda a través de los datos de contacto que aparecen en la sección de cada herramienta.
                </Typography>

                <Typography className={classes.question}>
                    ¿Qué hago si no cuento con la infraestructura para instalar, alojar o usar las herramientas?
                </Typography>

                <Typography paragraph align="justify">
                    Es posible que algunas instituciones cuenten con la posibilidad de proporcionar las herramientas en esquemas de nube, es decir, no solo distribuyen el software, si no que también les es posible proporcionar el servicio a otras instituciones y resguardar sus datos a través de su infraestructura.
                </Typography>

                <Typography paragraph align="justify">
                    Puedes obtener ayuda a través de los datos de contacto que aparecen en la sección de cada herramienta. Es posible que se requiera establecer algún convenio de colaboración.
                </Typography>

                <Typography className={classes.question}>
                    ¿Qué tipo de herramientas o recursos se pueden publicar en el MDA?
                </Typography>

                <Typography paragraph align="justify">
                    Cualquier herramienta o recurso que promueva la estandarización de los datos o facilite la transferencia de información desde los Entes de Gobierno hacia la PDN. Por ejemplo APIs, Sistemas de información, recursos digitales (manuales, webinars, etc.), herramientas de análisis/explotación de datos.
                </Typography>


                <Typography variant="h5" paragraph>
                    ¿Cómo publico una herramienta o recurso en el Mercado Digital Anticorrupción?
                </Typography>

                <Typography paragraph>
                    Deberás solicitar mediante un correo electrónico pdn@sesna.gob.mx la incorporación del recurso al MDA, incluyendo los siguientes datos:
                </Typography>

                <ol className={classes.ol}>
                    <li>
                        <Typography>
                            Nombre o razón social: Nombre o razón social de quien publica el recurso en el MDA.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Nombre o denominación de la herramienta: El nombre con el que se le conoce a la herramienta o recurso.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            URL de la herramienta: La dirección de Internet donde la herramienta se encuentra disponible.
                            Por ejemplo, puede ser la URL del repositorio de GitHub, donde se puede ofrecer el software,
                            manuales de instalación, instrucciones o cualquier información necesaria.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Tecnologías: En su caso, la lista de tecnologías con las que fue desarrollado el recurso.
                            Por ejemplo: NodeJS, GraphQL, AngularJS, MongoDB.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Descripción corta: Descripción breve de la herramienta (solo texto). Máximo 150 caracteres.
                        </Typography>
                    </li>
                    <li>
                        <Typography>
                            Descripción larga: Descripción extendida de la herramienta (solo texto). Máximo 900 caracteres.
                        </Typography>
                    </li>

                    <li>
                        <Typography>
                            URL de Imagen de portada: Una imagen que servirá como portada de la sección de la herramienta en el MDA (con fondo blanco).
                            Dimensiones: 345 x 140 píxeles en formato PNG.
                        </Typography>
                    </li>

                    <li>
                        <Typography>
                            URLs de capturas de pantalla (máximo 4): URLs de capturas de pantalla que puedan dar idea a los usuarios de como se ve o funciona la herramienta.
                        </Typography>
                    </li>

                    <li>
                        <Typography>
                            Datos de contacto: Datos de contacto de la persona o equipo responsable de atender cualquier asunto relacionado con la herramienta o recurso (se usará como contacto de soporte técnico):
                        </Typography>
                        <ul>
                            <li><Typography>Email</Typography></li>
                            <li><Typography>Teléfono</Typography></li>
                        </ul>
                    </li>

                    <li>
                        <Typography>
                            El Asunto del correo se deberá conformar de los siguientes datos:
                        </Typography>

                        <ul>
                            <li>
                                <Typography>
                                    Alta MDA / Baja MDA / Cambio MDA
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Sistema al que pertenece la Herramienta del S1 a S6
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    Entidad federativa o institución. Ejemplo: Alta MDA de herramienta del S2 - Veracruz
                                </Typography>
                            </li>
                        </ul>
                    </li>

                </ol>


                <Typography paragraph>
                    Al incorporar cualquier herramienta o recurso al MDA deberás aceptar su distribución bajo los Términos de Libre Uso MX, disponibles en la siguiente dirección web:
                </Typography>

                <Box display="flex" paddingBottom={2}>
                    <Link href="https://datos.gob.mx/libreusomx">
                        https://datos.gob.mx/libreusomx
                    </Link>
                </Box>

                <Typography paragraph>
                    Una vez que se reciba la solicitud, el personal de la USTPDN verificará que la herramienta se encuentre disponible abiertamente, que cumpla con su descripción y que su funcionamiento sea el esperado.
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


export default withStyles(styles)(FAQ);