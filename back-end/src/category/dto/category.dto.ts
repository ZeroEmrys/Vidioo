import { ObjectID } from 'bson';

export class CategoryDto{
    readonly name: string ;
    readonly parentInt: number ;
    readonly sortOrder: number ;
    readonly metaTagTitle: string;
    readonly metaTagDescription: string;
    readonly metaTagKeyword: string;
    readonly status: number;
    readonly createdBy: ObjectID;
    readonly isActive: boolean;
    readonly modifiedBy: ObjectID;
    readonly createdDate: Date;
    readonly modifiedDate: Date;
    readonly categoryDescription: ObjectID;
}