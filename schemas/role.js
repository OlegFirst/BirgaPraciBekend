const { Schema, model } = require("mongoose");
const Joi = require("joi");


const roleSchema = Schema(
    {
        value: {
            type: String,
            unique: true,
            default: "USER"
        },
    },
    { versionKey: false, timestamps: true }
);

const joiSchema = Joi.object({
    value: Joi.string(),
});

const Role = model("role", roleSchema);

module.exports =  { Role, joiSchema };