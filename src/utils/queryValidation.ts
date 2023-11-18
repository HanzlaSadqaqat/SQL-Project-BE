import Joi from "joi";


export const queryValidation = (data: string): Joi.ValidationResult =>
  Joi.object({
    query: Joi.string().required()
  }).validate(data);

