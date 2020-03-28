import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        default: 'Category_default',
    },
    parentInt: {
        type: Number,
        required: false,
    },
    sortOrder: {
        type: Number,
        required: false,
    },
    metaTagTitle: {
        type: String,
        required: false,
    },
    metaTagDescription: {
        type: String,
        required: false,
    },
    metaTagKeyword: {
        type: String,
        required: false,
    },
    status: {
        type: Number,
        required: false,
    },
    isActive: {
        type: Boolean,
        required: false,
    },
    createdBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
    },
    modifiedBy: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
    },
    createdDate: {
        type: Date,
        required: false,
        default: Date.now(),
    },
    modifiedDate: {
        type: Date,
        required: false,
        default: Date.now(),
    },
    categoryDescription: {
        type: mongoose.SchemaTypes.ObjectId,
        required: false,
    },
}, {collection: 'category'});
