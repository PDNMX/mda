import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Blog from "../../Assets/iconos_barra/ico-blog.svg";
import Calidad from "../../Assets/iconos_barra/ico-calidad_datos.svg";
import Espe from "../../Assets/iconos_barra/ico-especificaciones.svg";
import Mesa from "../../Assets/iconos_barra/ico-mesa_ayuda.svg";
//import Plat from "../../Assets/iconos_barra/ico-plataformas_sistemas.svg";
import {Link, Tooltip, Box} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#f6f6f6",
    textAlign: "center"
  },
  icon: {
    width: 45,
    //margin: theme.spacing(4),
    //padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: "#c5c5c5",
      borderRadius: 50
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  },
  item: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),

  }
});

class BarraFea extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
          <Box display="flex" flexWrap="wrap" justifyContent="center">

            <Box className={classes.item} flexGrow={1}>
              <Tooltip title="Mesa de ayuda">
                <Link href="https://plataformadigitalnacional.org/mesa-de-ayuda"
                      target="_blank"
                      className={classes.link}>
                  <img src={Mesa} className={classes.icon} alt="Mesa de ayuda"/>
                </Link>
              </Tooltip>
            </Box>

            <Box className={classes.item} flexGrow={1}>
              <Tooltip title="Blog" arrow>
                <Link href="https://plataformadigitalnacional.org/blog"
                      target="_blank"
                      className={classes.link}>
                  <img src={Blog} className={classes.icon} alt="Blog" />
                </Link>
              </Tooltip>
            </Box>

            <Box className={classes.item} flexGrow={1}>
              <Tooltip title="Calidad de datos" arrow>
                <Link href="https://plataformadigitalnacional.org/gaa/calidad"
                      target="_blank"
                      className={classes.link}>
                  <img src={Calidad} className={classes.icon} alt="Calidad de datos"
                  />
                </Link>
              </Tooltip>
            </Box>

            <Box className={classes.item} flexGrow={1}>
              <Tooltip title="Especificaciones técnicas" arrow>
                <Link href="https://plataformadigitalnacional.org/especificaciones"
                      target="_blank"
                      className={classes.link}>
                  <img src={Espe} className={classes.icon} alt="Especificaciones técnicas"
                  />
                </Link>
              </Tooltip>
            </Box>
          </Box>
        </div>
    );
  }
}

export default withStyles(styles)(BarraFea);
