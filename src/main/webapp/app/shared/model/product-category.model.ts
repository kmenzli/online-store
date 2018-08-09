import { IProduct } from 'app/shared/model//product.model';

export interface IProductCategory {
    id?: number;
    name?: string;
    descriptino?: string;
    products?: IProduct[];
}

export class ProductCategory implements IProductCategory {
    constructor(public id?: number, public name?: string, public descriptino?: string, public products?: IProduct[]) {}
}
