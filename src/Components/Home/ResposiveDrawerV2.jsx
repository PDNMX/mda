import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Home from "@mui/icons-material/Home";
import MenuBook from "@mui/icons-material/MenuBook";
import Help from "@mui/icons-material/Help";
import CheckCircle from "@mui/icons-material/CheckCircle";
import Apps from "@mui/icons-material/Apps";
import Filter1 from "@mui/icons-material/Filter1";
import Filter2 from "@mui/icons-material/Filter2";
import Filter3 from "@mui/icons-material/Filter3";
import Filter6 from "@mui/icons-material/Filter6";
import {withStyles} from "@mui/styles";
import BarraFea from "./BarraFea";
import Link from "@mui/material/Link";
import PDN from "../../Assets/logo_pdn.svg";
import {NavLink, Outlet, useLocation} from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
    divider: {
        margin: `${theme.spacing(1)}px 0`,
    },
    pdnLogo: {
        maxWidth: 100
    },
    icon: {
        color: '#6D4061',
        fontSize: '1.2rem',
    },
    toolbar1: {
        background: theme.palette.background.opaque,
        height: 102
    }
});

function ResponsiveDrawer(props) {
    const {window, classes} = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const location = useLocation();

    // Use location.pathname to set initial option
    const getInitialOption = () => {
        const path = location.pathname.split('/')[1];
        switch(path) {
            case 'bienvenida': return 0;
            case 'inicio': return 1;
            case 'FAQ': return 2;
            case 'terminos': return 3;
            case 'all': return 4;
            case 'S1': return 5;
            case 'S2': return 6;
            case 'S3': return 7;
            case 'S6': return 8;
            default: return 0;
        }
    };

    const [option, setOption] = React.useState(getInitialOption());
    const [filters, setFilters] = React.useState({
        system: 0,
        resourceType: "all"
    });

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleDrawerClick = (system, option) => {
        setOption(option);
        setFilters({
            ...filters,
            system: system
        });
        setMobileOpen(false); // Close drawer on mobile after selection
    };

    const CustomNavLink = React.forwardRef(({ to, children, ...props }, ref) => (
        <NavLink
            ref={ref}
            to={to}
            {...props}
            style={({ isActive }) => ({
                textDecoration: 'none',
                color: 'inherit',
                backgroundColor: isActive ? 'rgba(109, 64, 97, 0.08)' : 'transparent'
            })}
        >
            {children}
        </NavLink>
    ));

    const drawer = (
        <div>
            <Divider />
            <List>
                <ListItemButton onClick={() => handleDrawerClick(0, 0)} selected={option === 0} component={NavLink}
                                to={"/bienvenida"}>
                    <ListItemIcon>
                        <Home className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Bienvenida"/>
                </ListItemButton>

                <ListItemButton onClick={() => handleDrawerClick(0, 1)} selected={option === 1} component={NavLink}
                                to={"inicio"}>
                    <ListItemIcon>
                        <MenuBook className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Inicio rápido"/>
                </ListItemButton>


                <ListItemButton onClick={() => handleDrawerClick(0, 2)} selected={option === 2} component={NavLink}
                                to={"FAQ"}>
                    <ListItemIcon>
                        <Help className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Preguntas frecuentes"/>
                </ListItemButton>


                <ListItemButton onClick={() => handleDrawerClick(0, 3)} selected={option === 3} component={NavLink}
                                to={"terminos"}>
                    <ListItemIcon>
                        <CheckCircle className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Términos de uso"/>
                </ListItemButton>


            </List>

            <Divider color={"#57585A"}/>

            <List>
                <ListItemButton onClick={() => handleDrawerClick(0, 4)} selected={option === 4} component={NavLink}
                                to={"all/"}>
                    <ListItemIcon>
                        <Apps className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Todos los sistemas"
                                  secondary={<Typography fontSize="small">Todas las herramientas</Typography>}/>
                </ListItemButton>

                <ListItemButton onClick={() => handleDrawerClick(1, 5)} selected={option === 5} component={NavLink}
                                to={"S1"}>
                    <ListItemIcon>
                        <Filter1 className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Sistema 1"
                                  secondary={<Typography fontSize="small">Declaraciones</Typography>}/>
                </ListItemButton>

                <ListItemButton onClick={() => handleDrawerClick(2, 6)} selected={option === 6} component={NavLink}
                                to={"S2"}>
                    <ListItemIcon>
                        <Filter2 className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Sistema 2"
                                  secondary={<Typography fontSize="small">S. P. en Contrataciones</Typography>}/>
                </ListItemButton>

                <ListItemButton onClick={() => handleDrawerClick(3, 7)} selected={option === 7} component={NavLink}
                                to={"S3"}>
                    <ListItemIcon>
                        <Filter3 className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Sistema 3"
                                  secondary={<Typography fontSize="small">Sancionados</Typography>}/>
                </ListItemButton>

                <ListItemButton onClick={() => handleDrawerClick(6, 8)} selected={option === 8} component={NavLink}
                                to={"S6"}>
                    <ListItemIcon>
                        <Filter6 className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Sistema 6"
                                  secondary={<Typography fontSize="small">Contrataciones</Typography>}/>
                </ListItemButton>

            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            {/* Resto del código del AppBar y estructura principal */}
            <AppBar
                position="fixed"
                sx={{
                    width: `100%`,
                    height: '80px',
                }}
            >
                <Toolbar className={classes.toolbar1}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{mr: 2, display: {sm: 'none'}}}
                    >
                        <MenuIcon/>
                    </IconButton>

                    <BarraFea/>

                    <Link href="https://plataformadigitalnacional.org">
                        <img src={PDN} alt="PDN" className={classes.pdnLogo}/>
                    </Link>
                </Toolbar>
            </AppBar>

            <Box
                component="nav"
                sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: {xs: 'block', sm: 'none'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            color: '#57585A',
                            background: "#f1e9f2"
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: {xs: 'none', sm: 'block'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            color: '#57585A',
                            background: "#f1e9f2",
                            marginTop: '80px',
                            height: `calc(100% - 80px)`,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    paddingTop: 5,
                    width: {sm: `calc(100% - ${drawerWidth}px)`},
                    color: '#f2f2f2'
                }}
            >
                <Toolbar/>
                <Outlet/>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default withStyles(styles)(ResponsiveDrawer);