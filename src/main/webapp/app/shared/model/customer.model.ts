import { IUser } from 'app/core/user/user.model';
import { IProductOrder } from 'app/shared/model//product-order.model';

export const enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
    OTHER = 'OTHER'
}

export interface ICustomer {
    id?: number;
    firstName?: string;
    lastName?: string;
    gender?: Gender;
    email?: string;
    phone?: string;
    adressLine1?: string;
    adressLine2?: string;
    country?: string;
    user?: IUser;
    orders?: IProductOrder[];
}

export class Customer implements ICustomer {
    constructor(
        public id?: number,
        public firstName?: string,
        public lastName?: string,
        public gender?: Gender,
        public email?: string,
        public phone?: string,
        public adressLine1?: string,
        public adressLine2?: string,
        public country?: string,
        public user?: IUser,
        public orders?: IProductOrder[]
    ) {}
}
