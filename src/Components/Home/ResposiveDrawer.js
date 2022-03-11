import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Hidden from '@mui/material/Hidden';
import IconButton from '@mui/material/IconButton';
//import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles, useTheme } from '@mui/styles';
import MDA from '../../Assets/logo_mda.png';
import DrawerContents from "./DrawerContents";
import Link from "@mui/material/Link"

import Home from "@mui/icons-material/Home";
import MenuBook from "@mui/icons-material/MenuBook";
import Filter1 from "@mui/icons-material/Filter1";
import Filter2 from "@mui/icons-material/Filter2";
import Filter3 from "@mui/icons-material/Filter3";
import Filter6 from "@mui/icons-material/Filter6";
import Apps from "@mui/icons-material/Apps";
import PDN from "../../Assets/PDN.png";
import Footer from "./Footer";
import Help from "@mui/icons-material/Help";
import CheckCircle from "@mui/icons-material/CheckCircle";
import BarraFea from "./BarraFea";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    toolbar1:{
        background: '#ffffff'
    },
    toolbar2:{
        background: "#f6f6f6"
    },
    toolbar3:{
        background: '#34b3eb',
    },
    /*
    footer: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        top: "auto",
        bottom: 0
    },
    footerToolbar1:{
        background: "#666666",
        minHeight: 150
    },*/
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        paddingTop: theme.spacing(16), //appbar => 10
        //padding: theme.spacing(3),
    },
    logoMDA:{
        paddingTop: theme.spacing(2),
        maxWidth: 220
    },
    pdnLogo:{
        maxWidth: 80
    },
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [option, setOption] = React.useState(0);
    const [filters, setFilters] = React.useState({
        system: 0,
        resourceType: "all"
    });

    const [selected, setSelected] = React.useState(null);

    const handleDrawerClick = (system, option) => {
        setOption(option);
        setFilters({
            ...filters,
            system: system
        });
        setSelected(null);
    }

    const drawer = (
        <div>
            <img src={MDA} alt="Mercado Digital Anticorrupción" className={classes.logoMDA}/>
            <Divider />
            <List>
                <ListItem button onClick={() => handleDrawerClick(0,0)} selected={ option === 0}>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary="Bienvenida"/>
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(0,1)} selected={ option === 1}>
                    <ListItemIcon>
                        <MenuBook/>
                    </ListItemIcon>
                    <ListItemText primary="Inicio rápido" />
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(0,2)} selected={ option === 2}>
                    <ListItemIcon>
                        <Help/>
                    </ListItemIcon>
                    <ListItemText primary="Preguntas frecuentes" />
                </ListItem>


                <ListItem button onClick={() => handleDrawerClick(0,3)} selected={ option === 3}>
                    <ListItemIcon>
                        <CheckCircle/>
                    </ListItemIcon>
                    <ListItemText primary="Términos de uso" />
                </ListItem>

            </List>

            <Divider/>

            <List>
                <ListItem button onClick={() => handleDrawerClick(0, 4)} selected={ option === 4}>
                    <ListItemIcon>
                        <Apps />
                    </ListItemIcon>
                    <ListItemText primary="Todos los sistemas" secondary="Todas las herramientas"/>
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(1, 5)} selected={ option === 5}>
                    <ListItemIcon>
                        <Filter1 />
                    </ListItemIcon>
                    <ListItemText primary="Sistema 1" secondary="Declaraciones"/>
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(2, 6)} selected={ option === 6}>
                    <ListItemIcon>
                        <Filter2 />
                    </ListItemIcon>
                    <ListItemText primary="Sistema 2" secondary="S. P. en Contrataciones"/>
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(3, 7)} selected={ option === 7}>
                    <ListItemIcon>
                        <Filter3 />
                    </ListItemIcon>
                    <ListItemText primary="Sistema 3" secondary="Sancionados" />
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(6, 8)} selected={ option === 8}>
                    <ListItemIcon>
                        <Filter6 />
                    </ListItemIcon>
                    <ListItemText primary="Sistema 6" secondary="Contrataciones" />
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar1}>
                    <div style={{flexGrow: 1}}/>
                    <Link href="https://plataformadigitalnacional.org">
                        <img src={PDN} alt="PDN" className={classes.pdnLogo}/>
                    </Link>
                </Toolbar>
                <Toolbar className={classes.toolbar2}>
                    <BarraFea/>
                </Toolbar>
                <Toolbar className={classes.toolbar3}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Mercado Digital Anticorrupción
                    </Typography>
                </Toolbar>
            </AppBar>


            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                {/* Mobile */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                {/* Desktop */}
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>

            {/* CONTENTS */}
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <DrawerContents
                    option={option}
                    filters={filters}
                    setFilters={setFilters}
                    selected={selected}
                    setSelected={setSelected}
                />
                <Footer/>
            </main>

            {/* Footer */}

            {/*<Hidden mdDown implementation="css">
                <AppBar position="fixed" className={classes.footer}>
                    <Toolbar className={classes.footerToolbar1}>
                        <Footer/>
                    </Toolbar>
                </AppBar>
            </Hidden>*/}
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
