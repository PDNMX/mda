import React from "react";
import {withStyles, Box} from "@material-ui/core";
import NavigationButtons from "./NavigationButtons";
import ProductCard from "./ProductCard";
import products from "./../../products.json";

const styles = theme => ({
    root: {
        minHeight: 700
    },
    box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
});

const DrawerContents = props => {
    const {classes} = props;

    return <div className={classes.root}>
        <NavigationButtons/>

        <Box className={classes.box}>
            {
                products.map((p, i) => {
                    return <Box key={i} m={2}>
                        <ProductCard product={p} key={i}/>
                    </Box>
                })
            }

        </Box>
    </div>
}

export default withStyles(styles)(DrawerContents);