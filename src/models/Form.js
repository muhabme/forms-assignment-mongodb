import { mongoose } from 'mongoose';

const { Schema, model, models } = require('mongoose');

const FormSchema = new Schema(
    {
        title: { type: String },
        date: { type: String },
        status: { type: String },
        data: {
            name: { type: String },
            addressOfCorrespondence: { type: String },
            accountName: { type: String },
            accountNumber: { type: String },
            certificates: { type: String },
            profits: { type: String },
            outcomes: { type: String },
            certificatesOther: { type: String },
            profitsOther: { type: String },
            outcomesOther: { type: String },
            agreedToTOS: { type: Boolean },
        },
    },
    {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    },
);

FormSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

export const Form = models.Form || model('Form', FormSchema);
