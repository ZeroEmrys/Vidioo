import { ObjectID } from 'bson';
import { Document } from 'mongoose';

export interface CategoryInterface extends Document {
    readonly name: string ;
    readonly parentInt: number ;
    readonly sortOrder: number ;
    readonly metaTagTitle: string;
    readonly metaTagDescription: string;
    readonly metaTagKeyword: string;
    readonly status: number;
    readonly createdBy: ObjectID;
    readonly modifiedBy: ObjectID;
    readonly isActive: boolean;
    readonly createdDate: Date;
    readonly modifiedDate: Date;
    readonly categoryDescription: ObjectID;
}