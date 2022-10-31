import React from "react";
import {withStyles} from "@mui/styles"

import ProductDetails from "../ProductDetails/ProductDetails";

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

const Products = props => {
    const {selected, setSelected} = props;


    return <ProductDetails product={selected} setSelected={setSelected}/>

}

export default withStyles(styles)(Products);