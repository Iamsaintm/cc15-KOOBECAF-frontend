import Joi from "joi";

const itemSchema = Joi.object({
    productImage: Joi.required(),
    productName: Joi.string()
        .pattern(/^[a-zA-Z0-9]/)
        .trim()
        .required(),
    productPrice: Joi.string()
        .trim()
        .pattern(/^[0-9]/)
        .required(),
    categoryId: Joi.required(),
    latitude: Joi.required(),
    longitude: Joi.required(),
});

const vehicleSchema = Joi.object({
    productImage: Joi.required(),
    productName: Joi.string()
        .pattern(/^[a-zA-Z0-9]/)
        .trim()
        .required(),
    vehicleType: Joi.required(),
    vehicleModel: Joi.string()
        .pattern(/^[a-zA-Z0-9]/)
        .trim()
        .required(),
    vehicleBrand: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])/)
        .trim()
        .required(),
    vehicleYears: Joi.required(),
    latitude: Joi.required(),
    longitude: Joi.required(),
    productPrice: Joi.string()
        .pattern(/^[0-9]/)
        .trim()
        .required(),
});

const homeSchema = Joi.object({
    productImage: Joi.required(),
    productName: Joi.string()
        .pattern(/^[a-zA-Z0-9]/)
        .trim()
        .required(),
    homeProperty: Joi.required(),
    homeType: Joi.required(),
    bedroomQuantity: Joi.number().integer().positive().required(),
    bathroomQuantity: Joi.number().integer().positive().required(),
    productPrice: Joi.string()
        .pattern(/^[0-9]/)
        .trim()
        .required(),
    homeAddress: Joi.string()
        .pattern(/^[a-zA-Z0-9]/)
        .trim()
        .required(),
    latitude: Joi.required(),
    longitude: Joi.required(),
});
const filterPriceSchema = Joi.object({
    minPrice: Joi.number().min(0).integer(),
    maxPrice: Joi.number().min(0).integer(),
});

const userSchema = Joi.object({
    firstName: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])/)
        .trim()
        .required(),
    lastName: Joi.string()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])/)
        .trim()
        .required(),
});

export { itemSchema, vehicleSchema, homeSchema, filterPriceSchema, userSchema };
