import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LogoSesna from '../../Assets/Logo-SESNA.png';
import LibreUso from '../../Assets/libre-uso.png';
import {Link, Typography} from "@material-ui/core"
import LogoPDN from '../../Assets/PDN-sintexto-blue.png';
import YouTube from "@material-ui/icons/YouTube"
import Twitter from "@material-ui/icons/Twitter"
import Facebook from "@material-ui/icons/Facebook"

const styles = theme => ({
    root: {
        flexGrow: 1,
        paddingTop: theme.spacing(6)
    },
    pdnSection: {
        background: '#666666',
        paddingTop: '94px',
        paddingBottom: '64px',
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    sesnaSection:{
        backgroundColor: "#ffffff",
        paddingBottom: theme.spacing(5)
    },
    logoPDN: {
        maxWidth: 85
    },
    logoSESNA: {
        width: 170,
        paddingTop: 50,
        paddingBottom: 10
    },
    libreUso: {
        maxWidth: 140,
        paddingBottom: 20
    },
    item: {
        maxWidth: "1100px!important"
    },
    pdnText: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: 14,
        fontWeight: "bold",
        paddingBottom: theme.spacing(5)
    },
    inteligencia: {
        color: '#ffffff',
        fontSize: "12px",
        fontStyle: "normal",
        fontWeight: "400",
        paddingBottom: theme.spacing(5)
    },
    blueText: {
        color: '#34b3eb',
        fontSize: 14,
        fontWeight: "bold"
    },
    link: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: 14,
        display: "block",
        paddingBottom: theme.spacing(2)
    },
    redSocial: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        color: '#54565a'
    }
});

const Footer = props => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <Grid
                container
                spacing={0}
                className={classes.pdnSection}
                justify="center"
            >
                <Grid item xs={12} className={classes.item}>
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>

                            <img
                                alt="PDN"
                                src={LogoPDN}
                                className={classes.logoPDN}
                            />

                            <Typography className={classes.pdnText} paragraph>
                                Plataforma Digital Nacional
                            </Typography>

                            <Typography
                                className={classes.inteligencia}
                                paragraph
                            >
                                Inteligencia de Datos Anticorrupción
                            </Typography>
                            <img
                                alt="Libre Uso MX "
                                src={LibreUso}
                                className={classes.libreUso}
                            />

                        </Grid>

                        <Grid item xs={6} md={3}>
                            <Typography className={classes.blueText} paragraph>
                                Sistemas
                            </Typography>

                            <Link href="https://www.plataformadigitalnacional.org/declaraciones"
                                  className={classes.link}
                                  underline="none"
                            >
                                Declaraciones
                            </Link>

                            <Link href="https://www.plataformadigitalnacional.org/servidores"
                                  className={classes.link}
                                  underline="none"
                            >
                                Servidores en contrataciones
                            </Link>

                            <Link href="https://www.plataformadigitalnacional.org/sancionados"
                                  className={classes.link}
                                  underline="none"
                            >
                                Sancionados
                            </Link>

                            <Link href="https://www.plataformadigitalnacional.org/contrataciones"
                                  className={classes.link}
                                  underline="none"
                            >
                                Contrataciones
                            </Link>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography className={classes.blueText} paragraph>
                                PDN
                            </Typography>

                            <Link href="https://www.plataformadigitalnacional.org/blog"
                                  className={classes.link}
                                  underline="none"
                            >
                                Blog
                            </Link>

                            <Link href="https://www.plataformadigitalnacional.org/faq"
                                  className={classes.link}
                                  underline="none"
                            >
                                Preguntas frecuentes
                            </Link>

                            <Link href="https://www.plataformadigitalnacional.org/about"
                                  className={classes.link}
                                  underline="none"
                            >
                                ¿Qué es la PDN?
                            </Link>

                            <Link href="https://www.plataformadigitalnacional.org/terminos"
                                  underline="none"
                                  className={classes.link}
                            >
                                Términos de uso
                            </Link>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <div className={classes.sesnaSection}>
                <div align="center">
                    <img
                        alt="SESNA"
                        src={LogoSesna}
                        className={classes.logoSESNA}
                    />
                </div>
                <div align="center">
                    <Link href="https://www.facebook.com/SESNAOficial/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.redSocial}
                    >
                        <Facebook/>
                    </Link>
                    <Link href="https://twitter.com/SESNAOficial"
                          target="_blank"
                          className={classes.redSocial}
                          rel="noopener noreferrer"
                    >
                        <Twitter/>
                    </Link>
                    <Link href="https://www.youtube.com/channel/UCRUpiHth_WRkNo2sBmZIyfQ/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.redSocial}>
                        <YouTube/>
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default withStyles(styles)(Footer);