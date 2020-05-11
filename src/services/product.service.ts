import { Product } from "../models/product"
import app from "../config/firebase";

const productsCollectionName = "products";

export const addProduct = async (product: Product): Promise<void> => {
    console.log(product);
    await app.firestore().collection(productsCollectionName).doc(product.id).set({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        discount: product.discount,
        discountEndDate: product.discountEndDate.toUTCString()
    });

    await app.storage().ref().child(product.id).putString(product.image, "data_url");
}

export const getProducts = async (): Promise<Product[]> => {
    const data = await app.firestore().collection(productsCollectionName).get();
    const products = data.docs.map(doc => doc.data() as Product);

    products.forEach(async (product) => product.image = await getFileDownloadUrl(product.id));

    return products;
}

export const removeProduct = async (productId: string) => {
    return await app.firestore().collection(productsCollectionName).doc(productId).delete();
}

export const updateProduct = async (product: Product): Promise<void> => {
    const response = await app.firestore().collection(productsCollectionName).doc(product.id).update({
        id: product.id,
        title: product.title,
        description: product.description,
        price: product.price,
        discount: product.discount,
        discountEndDate: new Date(product.discountEndDate).toUTCString()
    });

    if (product.image.slice(0, 9) == "data:image") {
        await app.storage().ref().child(product.id).putString(product.image, "data_url");
    }
}

const getFileDownloadUrl = async (productId: string): Promise<string> => {
    return app.storage().ref().child(productId).getDownloadURL();
}

