const Joi = require('joi');

export const schema = Joi.object({
    name: Joi.string(),
    number: Joi.number()
});
