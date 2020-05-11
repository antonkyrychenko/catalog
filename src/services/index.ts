import * as productService from './product.service';
import * as authService from './auth.service';

const services = {
    api: {
        productService,
        authService
    },
};

export default services;

export type Services = typeof services;