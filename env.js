import dotenv from 'dotenv'

// Load environment variables from the .env file
dotenv.config({ path: '.env' });

const env = process.env;

if (!env.WEB3STORAGE_SPACE_DID) {
  throw new Error(envError(`WEB3STORAGE_SPACE_DID`));
}

if (!env.WEB3STORAGE_EMAIL) {
  throw new Error(envError(`WEB3STORAGE_EMAIL`));
}

/**
 * Formats and validates the WEB3STORAGE_SPACE_DID environment variable.
 * @type {DIDType} - The formatted DID string.
 */
export const DID_KEY = (env.WEB3STORAGE_SPACE_DID);

/**
 * Retrieves and formats the WEB3STORAGE_EMAIL environment variable.
 * @type {`${string}@${string}`} - The formatted email string.
 */
export const EMAIL = String(
  env.WEB3STORAGE_EMAIL
)

/**
 * AWS Access Key ID
 * Represents the AWS Access Key ID used for authentication.
 * Ensure that the corresponding environment variable (AWS_ACCESS_KEY_ID) is set with the appropriate value.
 *
 * @example
 * // Setting AWS_ACCESS_KEY_ID in .env file
 * AWS_ACCESS_KEY_ID="your_access_key_id"
 */
export const AWS_ACCESS_KEY_ID = String(process.env.AWS_ACCESS_KEY_ID);
if (!AWS_ACCESS_KEY_ID) {
  throw new Error(
    'AWS_ACCESS_KEY_ID is required in the environment variables.'
  );
}

/**
 * AWS Secret Access Key
 * Represents the AWS Secret Access Key used for authentication.
 * Ensure that the corresponding environment variable (AWS_SECRET_ACCESS_KEY) is set with the appropriate value.
 *
 * @example
 * // Setting AWS_SECRET_ACCESS_KEY in .env file
 * AWS_SECRET_ACCESS_KEY="your_secret_access_key"
 */
export const AWS_SECRET_ACCESS_KEY = String(process.env.AWS_SECRET_ACCESS_KEY);
if (!AWS_SECRET_ACCESS_KEY) {
  throw new Error(
    'AWS_SECRET_ACCESS_KEY is required in the environment variables.'
  );
}

/**
 * AWS Region
 * Represents the AWS Region used for configuration.
 * Ensure that the corresponding environment variable (AWS_REGION) is set with the appropriate value.
 *
 * @example
 * // Setting AWS_REGION in .env file
 * AWS_REGION="your_aws_region"
 */
export const AWS_REGION = String(process.env.AWS_REGION);
if (!AWS_REGION) {
  throw new Error('AWS_REGION is required in the environment variables.');
}
