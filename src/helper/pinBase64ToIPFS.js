import axios from 'axios';

// Function to pin a base64 encoded image to IPFS, accepting a base64Image string
export const pinBase64ImageToIPFS = async (base64Image, apiKey, apiSecret) => {
    // Decode base64 string to a Blob
    const sliceSize = 512;
    const byteCharacters = atob(base64Image.split(',')[1]); // Remove base64 header
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: 'image/jpeg' }); // Assuming the image is a JPEG

    // Prepare formData to send in the POST request
    let formData = new FormData();
    formData.append("file", blob, "image.jpg");

    // Set up the API endpoint and headers
    const url = 'https://api.pinata.cloud/pinning/pinFileToIPFS';
    let headers = {
        pinata_api_key: apiKey,
        pinata_secret_api_key: apiSecret,
    };

    try {
        // Make a POST request to the Pinata API
        const response = await axios.post(url, formData, { headers });

        // The response from Pinata will include the IPFS hash (CID)
        return response.data;
    } catch (error) {
        console.error('Error pinning base64 image to IPFS:', error);
        return null;
    }
};
