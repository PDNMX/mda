import React from "react";
import {Typography, Box, withStyles, Grid} from "@material-ui/core";
const styles = theme => ({
    root: {
        padding: theme.spacing(1),
        paddingTop: theme.spacing(3)
    },
    videoBox: {
        paddingTop: theme.spacing(2),
        maxWidth: 800
    },
    item: {
        maxWidth: 1000
    }
});

const GettingStarted = props => {
    const {classes} = props;

    return <div className={classes.root}>

        <Grid container justify="center">
            <Grid item xs={12} className={classes.item}>
                <Typography variant="h5" paragraph>
                    Guía de inicio
                </Typography>
                <Typography paragraph align="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>

                <Typography paragraph align="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>

                <div align="center">
                    <Box className={classes.videoBox}>
                        <iframe width="100%" height="450" src="https://www.youtube.com/embed/JQNPwOOG4yw" frameBorder="0" title={'Video'}
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen/>

                    </Box>
                </div>
            </Grid>
        </Grid>
    </div>;
}

export default withStyles(styles)(GettingStarted);