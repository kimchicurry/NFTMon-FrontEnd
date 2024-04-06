import axios from 'axios';

// Export the pinJSONToIPFS function so it can be imported elsewhere
export const pinJSONToIPFS = async (jsonData, apiKey, apiSecret) => {
    // Convert JSON to Blob
    const jsonBlob = new Blob([JSON.stringify(jsonData)], { type: 'application/json' });

    // Prepare formData to send in the POST request
    let formData = new FormData();
    formData.append("file", jsonBlob);

    // Set up the API endpoint and headers
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
    let headers = {
        pinata_api_key: apiKey, // Use the apiKey parameter
        pinata_secret_api_key: apiSecret, // Use the apiSecret parameter
        // The Content-Type 'multipart/form-data' will be set automatically by axios when using FormData
    };

    try {
        // Make a POST request to Pinata API
        const response = await axios.post(url, formData, { headers });

        // The response from Pinata will include the IPFS hash (CID)
        return response.data;
    } catch (error) {
        console.error('Error pinning JSON to IPFS:', error);
        return null;
    }
};

// You can remove the example usage and logging from this file if you want to use this function in other files.
