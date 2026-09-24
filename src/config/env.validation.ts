import Joi, { number } from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi
  .string()
  .valid('development', 'test')
  .default('development'),
  PORT: Joi
  .number()
  .integer()
  .min(1)
  .max(65535)
  .default(3000),
  API_PREFIX: Joi
  .string()
  .trim()
  .min(1),

  DATABASE_URL: Joi
  .string()
  .uri({scheme: ['postgresql', 'postgres']})
  .required(),
  JWT_SECRET: Joi
  .string()
  .min(32)
  .required(),
  JWT_EXPIRES_IN: Joi
  .string()
  .pattern(/^\d+[smhd]$/)
  .required(),
  BCRYPT_SALT_ROUNDS: Joi
  .number()
  .integer()
  .min(8)
  .max(14)
  .default(10),
  CORS_ORIGIN: Joi
  .string()
  .uri({scheme:['http', 'https']})
  .required(),
  RESTAURANT_NAME: Joi
  .string()
  .trim()
  .min(3)
  .max(50)
  .required(),
  TAX_RATE:Joi
  .number()
  .min(0)
  .max(1)
  .required()
});



/* 
	


DATABASE_URL	
JWT_SECRET	
JWT_EXPIRES_IN	
BCRYPT_SALT_ROUNDS	
CORS_ORIGIN	
RESTAURANT_NAME	
1TAX_RATE	 */
