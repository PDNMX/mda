import React from "react";
import {Box} from "@mui/material";
import {withStyles} from "@mui/styles"
import ProductCard from "./ProductCard";
import DisabledCard from "./DisabledCard";
import products from "../../products.json";
import ProductDetails from "../ProductDetails/ProductDetails";

const styles = theme => ({
    productBox: {
        margin: theme.spacing(1), // Margen alrededor de cada caja
        width: `calc(33% - ${theme.spacing(2)}px)`, // Ancho para 3 productos por fila
        // ...otros estilos que puedas necesitar...
    },
    root: {
        minHeight: 700
    },
    box: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    }
});

export const Products = props => {
    const {classes, filters, selected, setSelected} = props;

    let prods = products.filter(p => {
        if (filters.system === 0){
            return true;
        }
        return p.systems.includes(filters.system);
    });

    prods = prods.filter(p => {
        if (filters.resourceType === "all"){
            return true;
        }
        return p.resourceType === filters.resourceType
    });

    if (selected){
        return <ProductDetails product={selected} setSelected={setSelected}/>
    }

    return <div className={classes.root}>
        <Box className={classes.box}>
            {
                prods.map((p, i) => {
                    return <Box key={i} m={2} className={classes.productBox}>
                        {
                            p.disabled ?
                            <DisabledCard product={p} key={i}/>:
                            <ProductCard product={p} key={i} setSelected={setSelected}/>
                        }
                    </Box>
                })
            }

        </Box>
    </div>
}

export default withStyles(styles)(Products);