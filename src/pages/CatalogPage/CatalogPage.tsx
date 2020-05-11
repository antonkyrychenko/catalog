import React, { FC, useEffect } from "react";
import useCatalogPageStyles from "./CatalogPageStyles";
import Grid from "@material-ui/core/Grid";
import { Button, Card, CardContent, IconButton } from "@material-ui/core";
import ExitToAppTwoToneIcon from '@material-ui/icons/ExitToAppTwoTone';
import { Switch } from "react-router";
import PrivateRoute from "../../components/Routes/PrivateRoute";
import AddProductPage from "../AddProductPage/AddProductPage";
import { useDispatch, useSelector } from "react-redux";
import { push } from "connected-react-router";
import { getProductAction, removeProductAction } from "../../store/actions/product/product.actions";
import { RootState } from "../../store/reducers";
import ImageContainer from "../../components/ImageContainer/ImageContainer";
import { Product } from "../../models/product";
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditProductPage from "../EditProductPage/EditProductPage";
import { signOutAction } from "../../store/actions/auth/auth.actions";

type Props =
    & {};

const CatalogPage: FC<Props> = (props) => {
    const classes = useCatalogPageStyles();
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.catalog.products)

    useEffect(() => {
        dispatch(getProductAction.request());
    }, [])

    function handleAddProduct() {
        dispatch(push("/add-product"));
    }

    function handleEditProduct(product: Product) {
        dispatch(push(`/products/${product.id}/edit`));
    }

    function handleRemoveProduct(productId: string) {
        dispatch(removeProductAction.request(productId))
    }

    function handleSignOutClick() {
        dispatch(signOutAction.request());
    }

    const price = (product: Product) => {
        if (product.discount > 0) {
            return (
                <div style={{ display: "flex", alignItems: "center" }}>
                    <p className={classes.currentPrice} style={{ color: "#c02739" }}>{product.price - (product.price / 100 * product.discount)}$</p>
                    <p className={classes.oldPrice}>{product.price}$</p>
                    <div className={classes.discountEnd}>
                        <p>Discount end:</p>
                        <p style={{color: "#c02739"}}>{new Date(product.discountEndDate).toLocaleDateString()}</p>
                    </div>
                </div >
            );
        }

        return (
            <div>
                <p className={classes.currentPrice}>{product.price}$</p>
            </div>
        );
    }

    const productCards = products?.map(product => {
        return (
            <Grid style={{ position: "relative" }} key={product.id} item xs={3}>
                <Card>
                    <ImageContainer height="300px" width="100%" src={product.image} />
                    <CardContent>
                        <span className={classes.title}>
                            {product.title}
                        </span>
                        <span className={classes.content}>
                            {product.description}
                        </span>
                        {price(product)}
                        <div style={{ position: "absolute", top: 20, right: 20 }}>
                            <IconButton onClick={() => handleEditProduct(product)}>
                                <EditOutlinedIcon fontSize="large" color="primary" />
                            </IconButton>
                            <IconButton onClick={() => handleRemoveProduct(product.id)}>
                                <DeleteOutlineOutlinedIcon fontSize="large" color="primary" />
                            </IconButton>
                        </div>
                    </CardContent>
                </Card>
            </Grid>
        );
    })

    return (
        <div className={classes.root}>
            <div className={classes.catalogHeader}>
                <Button onClick={() => handleAddProduct()}>Add product</Button>
                <Button onClick={() => handleSignOutClick()}>
                    Sign Out
                    <ExitToAppTwoToneIcon />
                </Button>
            </div>
            <div style={{ width: "98%", marginLeft: "auto", marginRight: "auto" }}>
                <Grid className={classes.products} container spacing={3}>
                    {productCards}
                </Grid>

                <Switch>
                    <PrivateRoute exact path="/add-product" component={AddProductPage} />
                    <PrivateRoute exact path="/products/:productId/edit" component={EditProductPage} />
                </Switch>
            </div>
        </div>
    )
}

export default CatalogPage;