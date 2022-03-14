import React from "react";
import {withStyles} from "@mui/styles"
import Blog from "../../Assets/iconos_barra/ico-blog.svg";
import Espe from "../../Assets/iconos_barra/ico_especificaciones.svg";
import Mesa from "../../Assets/iconos_barra/ico_mesa-ayuda.svg";
import {Link, Tooltip, Box} from "@mui/material";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secundario.dark,
    textAlign: "center"
  },
  icon: {
    width: 45,
    //margin: theme.spacing(1),
    //padding: theme.spacing(2),
    "&:hover": {
      backgroundColor: theme.palette.background.hoverBotton,
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

const BarraFea = props => {
  const { classes } = props;
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

export default withStyles(styles)(BarraFea);
