import React from "react";
import {withStyles} from "@mui/styles"
import Espe from "../../Assets/iconos_barra/ico_especificaciones.svg";
import Mesa from "../../Assets/iconos_barra/ico_mesa-ayuda.svg";
import {Link, Tooltip, Box} from "@mui/material";
import MDA from "../../Assets/logo_mda.svg";

const styles = theme => ({
  logoMDA: {
        paddingTop: theme.spacing(0),
        margin: theme.spacing(0),
        maxHeight: 55, 
        marginLeft: '-20px',
        marginTop: '7px' 
  },
  root: {
    flexGrow: 1,
    textAlign: "center"
  },
  icon: {
    width: 50,
    "&:hover": {
      backgroundColor: theme.palette.background.hoverBotton,
      borderRadius: 50
    },
  },
  link: {
    textDecoration: 'none', // Elimina el subrayado
    color: theme.palette.text.primary
  },
  borderContainer: {
    border: '1px solid #fff',
    background: 'white',
    margin: '10px auto',
    borderRadius: '75px',
    padding: '0px 50px',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    width: '50%',
    marginRight: '250px',
  },
  item: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    flexGrow: 1,
    display: 'flex', // Añadir flexbox
    alignItems: 'center', // Alinear verticalmente
  },
  itemText: {
    color: '#57585A', 
    marginLeft: theme.spacing(1),
    fontWeight: 'bold', 
    fontSize: '0.875rem',
    verticalAlign: 'middle', // Ajusta la alineación vertical
    position: 'relative',
    top: '-15px', // Mueve el texto hacia arriba
  }
});

const BarraFea = props => {
  const { classes } = props;
  return (
      <div className={classes.root}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">

        <Box className={classes.item} flexGrow={1} display="flex" alignItems="start" justifyContent="start">
            <Tooltip title="Mercado Digital Anticorrupción">
            <img src={MDA} alt="Mercado Digital Anticorrupción" className={classes.logoMDA}/>
            </Tooltip>
          </Box>

          <Box className={classes.borderContainer}>

          <Box className={classes.item} flexGrow={1}>
            <Tooltip title="Mesa de ayuda">
              <Link href="https://plataformadigitalnacional.org/mesa-de-ayuda"
                    target="_blank"
                    className={classes.link}>
                <img src={Mesa} className={classes.icon} alt="Mesa de ayuda"/>
                <span className={classes.itemText}>Mesa de Ayuda</span>
              </Link>
            </Tooltip>
          </Box>

          <Box className={classes.item} flexGrow={1}>
            <Tooltip title="Especificaciones técnicas" arrow>
              <Link href="https://plataformadigitalnacional.org/especificaciones"
                    target="_blank"
                    className={classes.link}>
                <img src={Espe} className={classes.icon} alt="Especificaciones técnicas"/>
                <span className={classes.itemText}>Especificaciones</span>
              </Link>
            </Tooltip>
          </Box>
          </Box>
        </Box>
      </div>
  );
}

export default withStyles(styles)(BarraFea);
