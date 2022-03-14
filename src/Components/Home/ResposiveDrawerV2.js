import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MDA from "../../Assets/logo_mda.svg";
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
import DrawerContents from "./DrawerContents";
import BarraFea from "./BarraFea";
import Link from "@mui/material/Link";
import PDN from "../../Assets/PDN.png";

const drawerWidth = 240;

const styles = theme => ({
    logoMDA:{
        paddingTop: theme.spacing(2),
        margin: theme.spacing(1),
        maxWidth: 220
    },
    pdnLogo:{
        maxWidth: 80
    },
    icon : {
        color:'#f2f2f2'
    },
    toolbar1:{
        background: theme.palette.background.opaque
    },
    toolbar2: {
        background: theme.palette.secundario.dark
    },
    toolbar3: {
        background: theme.palette.background.opaque
    }
});

function ResponsiveDrawer(props) {
    const { window, classes } = props;
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
            <Divider color={"#f2f2f2"}/>
            <List>
                <ListItem button onClick={() => handleDrawerClick(0,0)} selected={ option === 0} >
                    <ListItemIcon>
                        <Home className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Bienvenida"/>
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(0,1)} selected={ option === 1}>
                    <ListItemIcon>
                        <MenuBook className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Inicio rápido" />
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(0,2)} selected={ option === 2}>
                    <ListItemIcon>
                        <Help className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Preguntas frecuentes" />
                </ListItem>


                <ListItem button onClick={() => handleDrawerClick(0,3)} selected={ option === 3}>
                    <ListItemIcon>
                        <CheckCircle className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Términos de uso" />
                </ListItem>

            </List>

            <Divider color={"#f2f2f2"}/>

            <List>
                <ListItem button onClick={() => handleDrawerClick(0, 4)} selected={ option === 4}>
                    <ListItemIcon>
                        <Apps className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Todos los sistemas" secondary={<Typography fontSize="small">Todas las herramientas</Typography>}/>
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(1, 5)} selected={ option === 5}>
                    <ListItemIcon>
                        <Filter1 className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Sistema 1" secondary={<Typography fontSize="small">Declaraciones</Typography>}/>
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(2, 6)} selected={ option === 6}>
                    <ListItemIcon>
                        <Filter2 className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Sistema 2" secondary={<Typography fontSize="small">S. P. en Contrataciones</Typography>}/>
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(3, 7)} selected={ option === 7}>
                    <ListItemIcon>
                        <Filter3 className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Sistema 3" secondary={<Typography fontSize="small">Sancionados</Typography>} />
                </ListItem>

                <ListItem button onClick={() => handleDrawerClick(6, 8)} selected={ option === 8}>
                    <ListItemIcon>
                        <Filter6 className={classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="Sistema 6" secondary={<Typography fontSize="small">Contrataciones</Typography>}/>
                </ListItem>

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex'}}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
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
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Mercado Digital Anticorrupción
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }}}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, color: '#f2f2f2', background: "#155065" },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1, p:3, paddingTop: 15, width: { sm: `calc(100% - ${drawerWidth}px)` },
                    color: '#f2f2f2'
                }}
            >
                <Toolbar />

                <DrawerContents
                    option={option}
                    filters={filters}
                    setFilters={setFilters}
                    selected={selected}
                    setSelected={setSelected}
                />

            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default withStyles(styles)(ResponsiveDrawer);
