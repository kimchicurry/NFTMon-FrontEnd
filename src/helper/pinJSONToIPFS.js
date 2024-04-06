export const pinJSONToIPFS = async (name, description, image) => {
  const pinataContent = {
    name: name,
    description: description,
    image: image,
  };

  const pinataMetadata = {
    name: "nftmon",
  };

  const pinataOptions = {
    cidVersion: 1,
  };

  const bodyData = {
    pinataContent: pinataContent,
    pinataMetadata: pinataMetadata,
    pinataOptions: pinataOptions,
  };

  const options = {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYWQzZTY4Yy0wZDMxLTQxNmYtYmVhNS02ZDBmZjZmMzMwNTgiLCJlbWFpbCI6InRlY2hpc3R1ZGlva3JAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA0YjQ1YjNjY2UxYjZjZmI4MzUxIiwic2NvcGVkS2V5U2VjcmV0IjoiYzA4ZmViZGM2MWE2OWZiZTlmYmE1ZTA1MjI5M2ZjYTE4MTQ2MTUxNTYwMDg2YzBjNTI2MGU2NTMyM2RmN2UzYSIsImlhdCI6MTcxMjQwMzg2NX0.CG-ij8vrqgQPv90k6eO1KD3QwVwQXPTVz5Gcdo9N3CI",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  };

  try {
    const response = await fetch(
      "https://api.pinata.cloud/pinning/pinJSONToIPFS",
      options
    );
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error("Error pinning JSON to IPFS:", error);
    return null;
  }
};
