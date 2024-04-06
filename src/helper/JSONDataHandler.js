// JSONDataHandler.js

/**
 * Creates a JSON object with the provided name, description, and image URL.
 *
 * @param {string} name - The name for the JSON data.
 * @param {string} description - The description for the JSON data.
 * @param {string} imageUrl - The image URL for the JSON data.
 * @returns {Object} - The JSON data object.
 */
export const createJsonData = (name, description, imageUrl) => {
    return {
        name: name,
        description: description,
        image: imageUrl
    };
};
