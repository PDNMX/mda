import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
//import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MDA from '../../Assets/logo_mda.png';
import DrawerContents from "./DrawerContents";

import MenuBook from "@material-ui/icons/MenuBook";
import Filter1 from "@material-ui/icons/Filter1";
import Filter2 from "@material-ui/icons/Filter2";
import Filter3 from "@material-ui/icons/Filter3";
import Filter6 from "@material-ui/icons/Filter6";
import Apps from "@material-ui/icons/Apps";
import PDN from "../../Assets/PDN.png";
import Footer from "./Footer";

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
        paddingTop: theme.spacing(10), //appbar
        //padding: theme.spacing(3),
    },
    logoMDA:{
        paddingTop: theme.spacing(2),
        maxWidth: 220
    },
    pdnLogo:{
        maxWidth: 80
    }
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const [option, setOption] = React.useState(1);

    const drawer = (
        <div>
            <img src={MDA} alt="Mercado Digital Anticorrupción" className={classes.logoMDA}/>
            <Divider />
            <List>
                <ListItem button onClick={() => setOption(1)} selected={ option === 1}>
                    <ListItemIcon>
                        <MenuBook/>
                    </ListItemIcon>
                    <ListItemText primary="Inicio rápido" />
                </ListItem>
            </List>
            <Divider />
            <List>

                <ListItem button onClick={() => setOption(2)} selected={ option === 2}>
                    <ListItemIcon>
                        <Apps />
                    </ListItemIcon>
                    <ListItemText primary="Todos los sistemas" secondary="Todas las herramientas"/>
                </ListItem>

                <ListItem button onClick={() => setOption(3)} selected={ option === 3}>
                    <ListItemIcon>
                        <Filter1 />
                    </ListItemIcon>
                    <ListItemText primary="Sistema 1" secondary="Declaraciones"/>
                </ListItem>

                <ListItem button onClick={() => setOption(4)} selected={ option === 4}>
                    <ListItemIcon>
                        <Filter2 />
                    </ListItemIcon>
                    <ListItemText primary="Sistema 2" secondary="S. P. en Contrataciones"/>
                </ListItem>

                <ListItem button onClick={() => setOption(5)} selected={ option === 5}>
                    <ListItemIcon>
                        <Filter3 />
                    </ListItemIcon>
                    <ListItemText primary="Sistema 3" secondary="Sancionados" />
                </ListItem>

                <ListItem button onClick={() => setOption(6)} selected={ option === 6}>
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
                    <img src={PDN} alt="PDN" className={classes.pdnLogo}/>
                </Toolbar>
                <Toolbar className={classes.toolbar2}>
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
                <DrawerContents option={option}/>
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
