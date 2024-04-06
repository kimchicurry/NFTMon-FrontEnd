export const pinBase64ImageToIPFS = async (base64Image) => {
  // Decode base64 string to a Blob
  const parts = base64Image.split(";base64,");
  const contentType = parts[0].split(":")[1];
  const raw = window.atob(parts[1]);

  const arrayBuffer = new ArrayBuffer(raw.length);
  const uint8Array = new Uint8Array(arrayBuffer);
  for (let i = 0; i < raw.length; i++) {
    uint8Array[i] = raw.charCodeAt(i);
  }

  const blob = new Blob([arrayBuffer], { type: contentType });

  // Prepare formData to send in the POST request
  const form = new FormData();
  form.append("file", blob, "image.jpg");
  form.append(
    "pinataMetadata",
    JSON.stringify({
      keyvalues: {
        name: "nftmon",
      },
    })
  );
  form.append(
    "pinataOptions",
    JSON.stringify({
      cidVersion: 1,
    })
  );

  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYWQzZTY4Yy0wZDMxLTQxNmYtYmVhNS02ZDBmZjZmMzMwNTgiLCJlbWFpbCI6InRlY2hpc3R1ZGlva3JAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siaWQiOiJGUkExIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9LHsiaWQiOiJOWUMxIiwiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjF9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6IjA0YjQ1YjNjY2UxYjZjZmI4MzUxIiwic2NvcGVkS2V5U2VjcmV0IjoiYzA4ZmViZGM2MWE2OWZiZTlmYmE1ZTA1MjI5M2ZjYTE4MTQ2MTUxNTYwMDg2YzBjNTI2MGU2NTMyM2RmN2UzYSIsImlhdCI6MTcxMjQwMzg2NX0.CG-ij8vrqgQPv90k6eO1KD3QwVwQXPTVz5Gcdo9N3CI`,
    },
    body: form,
  };

  try {
    const response = await fetch(
      "https://api.pinata.cloud/pinning/pinFileToIPFS",
      options
    );
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error pinning base64 image to IPFS:", error);
    return null;
  }
};
