import React from "react";
import {Typography, Grid, Link, /*Paper,*/ Box} from "@mui/material";
import {withStyles} from "@mui/styles"

const styles = theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    /*item: {
        maxWidth: 1200 // no funciona
    },*/
    li: {
        paddingBottom: theme.spacing(2)
    },
    paper: {
        background: theme.palette.background.opaque,
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

const Terms = props => {
    const {classes} = props;
    return <div className={classes.root}>
        <Grid container justifyContent="center">
            <Grid item style={{maxWidth: 1200}} xs={12}>
                <div className={classes.paper}>
                    <Box className={classes.box}>
                        <Typography variant="h5" paragraph>
                            Términos y Condiciones de uso del Mercado Digital Anticorrupción
                        </Typography>

                        <Typography paragraph>
                            El Mercado Digital Anticorrupción (MDA) se creó como un espacio donde se ponen a disposición de los Entes públicos que deben conectarse a la Plataforma Digital Nacional (PDN), diversas herramientas que facilitarán el desarrollo y conexión de los sistemas que conforman a la PDN.
                        </Typography>

                        <Typography paragraph>
                            Estas herramientas y/o cualquiera de sus componentes, son de libre uso y al formar parte del MDA, se da consentimiento expreso para su utilización, por parte de sus desarrolladores materiales e intelectuales.
                        </Typography>

                        <Typography>
                            Asimismo, los usuarios al utilizar el MDA se sujetan a los presentes "Términos y Condiciones."
                        </Typography>

                        <Typography paragraph>
                            El Mercado Digital Anticorrupción se desarrolló en cumplimiento y de conformidad con la normatividad vigente de la PDN:
                        </Typography>

                        <ul>
                            <li>
                                <Typography>
                                    <Link href="http://www.diputados.gob.mx/LeyesBiblio/pdf/LGSNA.pdf" target="_blank" rel="noopener noreferrer">
                                        Ley General del Sistema Nacional Anticorrupción
                                    </Link>,
                                    publicada en el Diario Oficial de la Federación el 18 de julio del 2016.
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    <Link href="http://www.diputados.gob.mx/LeyesBiblio/pdf/LGRA_130420.pdf" target="_blank" rel="noopener noreferrer">
                                        Ley General de Responsabilidades Administrativas
                                    </Link>,
                                    publicada en el Diario Oficial de la Federación el 12 de abril del 2016.
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    <Link href="https://www.dof.gob.mx/nota_detalle.php?codigo=5541802&fecha=23/10/2018" target="_blank" rel="noopener noreferrer">
                                        Bases para el Funcionamiento de la Plataforma Digital Nacional
                                    </Link>,
                                    publicadas en el Diario Oficial de la Federación el 23 de octubre del 2018.
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    <Link href="http://www.dof.gob.mx/nota_detalle.php?codigo=5491478&fecha=21/07/2017" target="_blank" rel="noopener noreferrer">
                                        Estatuto Orgánico de la Secretaría Ejecutiva del Sistema Nacional Anticorrupción
                                    </Link>,
                                    publicado en el Diario Oficial de la Federación el 21 de julio de 2017.
                                </Typography>
                            </li>
                        </ul>

                        <Typography style={{fontWeight: "bold"}}>
                            Sobre el uso del Mercado Digital Anticorrupción (MDA) y cualquiera de sus recursos:
                        </Typography>

                        <ol type="I" style={{fontWeight: "bold"}}>
                            <li className={classes.li}>
                                <Typography style={{fontWeight: "bold"}}> Requerimientos para su uso:</Typography>
                                <ul>
                                    <li>
                                        <Typography>
                                            El usuario debe contar con un equipo que cumpla con las características mínimas necesarias para navegar en el sitio, recomendando su navegación en las últimas versiones de los navegadores Google Chrome, Mozilla Firefox y Safari para obtener la mejor experiencia.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>

                            <li className={classes.li}>
                                <Typography style={{fontWeight:"bold"}}>
                                    Obligaciones del usuario
                                </Typography>

                                <ul>
                                    <li>
                                        <Typography>
                                            No dañar, inutilizar o deteriorar los sistemas informáticos que puedan ser incorporados en este sitio, incluido el portal plataformadigitalnacional.org.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            No utilizar versiones de sistemas modificados con el fin de obtener acceso no autorizado a cualquier sistema de información, contenido y/o servicios del portal.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            A hacer buen uso del sitio, respetando la Ley Federal de Derechos de Autor, la Ley Federal de Protección a la Propiedad Intelectual y demás normatividad que resulte aplicable para la protección de las herramientas y componentes del MDA.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            Utilizar el sitio únicamente para fines lícitos.
                                        </Typography>
                                    </li>

                                </ul>
                            </li>

                            <li className={classes.li}>
                                <Typography style={{fontWeight: "bold"}}>
                                    Responsabilidades
                                </Typography>

                                <ul>
                                    <li>
                                        <Typography>
                                            Este sitio contiene fuertes medidas de seguridad para proteger la información de cualquier alteración que pretendan realizarse.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            La Secretaría Ejecutiva del Sistema Nacional Anticorrupción (SESNA) se deslinda de cualquier responsabilidad, perjuicio o daño que pueda generar el usuario por cualquier uso inadecuado del portal o la información contenida en plataformadigitalnacional.org.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            Se exime a la SESNA de toda responsabilidad por los daños que el uso del sitio le pudieran ocasionar en forma incidental o consecuente con su equipo, información, patrimonio o persona, así como por la alteración o manipulación de los datos una vez publicados en él.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>

                            <li className={classes.li}>
                                <Typography style={{fontWeight:"bold"}}>
                                    Sobre la incorporación de herramientas al MDA:
                                </Typography>

                                <ul>
                                    <li>
                                        <Typography>
                                            Al desear incorporar cualquier herramienta o recurso al MDA, se compromete a enviar la información solicitada por la SESNA en el apartado de  <b><i>"Preguntas frecuentes"</i></b> sección <b><i>"¿Cómo publico una herramienta o recurso en el Mercado Digital Anticorrupción?"</i></b>
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            Una vez que la SESNA reciba el oficio de solicitud, el personal de la USTPDN verificará que la herramienta se encuentre disponible abiertamente, que cumpla con su descripción y que su funcionamiento sea el esperado.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            La <b>SESNA se reserva el derecho de negar la incorporación de recursos al MDA</b> que no cumplan de manera puntual con su descripción, o que no cuenten con un nivel de calidad adecuado.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            Al incorporar cualquier herramienta o recurso al MDA se está aceptando expresamente su distribución bajo los <b>Términos de Libre Uso MX</b>, disponibles en la siguiente dirección web: https://datos.gob.mx/libreusomx
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            La <b>SESNA podrá remover del MDA, sin previo aviso</b>, cualquier recurso que incumpla con los criterios y objetivos de este.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>

                            <li className={classes.li}>
                                <Typography style={{fontWeight: "bold"}}>
                                    Propiedad intelectual
                                </Typography>

                                <ul>
                                    <li>
                                        <Typography>
                                            Las herramientas del MDA son de uso libre, salvo excepción expresa que al efecto se indique, por lo que antes de reproducirla, el usuario deberá observar si tiene derechos reservados y respetarlos en términos de las normas relativas a derechos de autor y propiedad industrial.
                                        </Typography>
                                    </li>

                                    <li>
                                        <Typography>
                                            Los enlaces, herramientas y recursos que son proporcionados y publicados en el MDA serán responsabilidad exclusiva de sus desarrolladores y de aquella persona responsable de solicitar su incorporación en el MDA, cuyos datos e información se encuentra en el apartado “datos de contacto” de cada herramienta. Los derechos morales y patrimoniales son del propio desarrollador y autor de esta.
                                        </Typography>
                                    </li>
                                </ul>
                            </li>

                            <li className={classes.li}>
                                <Typography style={{fontWeight: "bold"}}>
                                    Actualización de términos y condiciones
                                </Typography>

                                <ul>
                                    <li>
                                        <Typography>
                                            La SESNA cuenta con la facultad de modificar los presentes Términos y Condiciones en cualquier momento a efecto de mejorar tu experiencia en la utilización del MDA y de la PDN.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            En virtud de que los Términos y Condiciones pueden cambiar, te pedimos revisar constantemente nuestro portal.
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            El uso del portal plataformadigitalnacional.org o de cualquiera de sus componentes, implica la aceptación expresa de los presentes "Términos y Condiciones".
                                        </Typography>
                                    </li>
                                    <li>
                                        <Typography>
                                            Al utilizar el MDA también se aceptan los "Términos y Condiciones" de la PDN, disponibles en: https://plataformadigitalnacional.org/terminos
                                        </Typography>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </Box>
                </div>
            </Grid>
        </Grid>
    </div>;
}

export default withStyles(styles)(Terms);