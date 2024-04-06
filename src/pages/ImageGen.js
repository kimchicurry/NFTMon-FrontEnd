import React, { useState } from "react";

const ImageGen = () => {
  const [image, setImage] = useState(null);
  const [fatherDescription, setFatherDescription] = useState("");
  const [motherDescription, setMotherDescription] = useState("");
  const [prompt, setPrompt] = useState("");

  const generateImage = async () => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        n: 1,
        response_format: "b64_json",
      }),
    };

    const response = await fetch(
      "https://api.openai.com/v1/images/generations",
      options
    );

    const data = await response.json();
    const generatedImageBase64 = data.data[0].b64_json;
    setImage(`data:image/jpeg;base64,${generatedImageBase64}`);
  };

  const generateChildDescription = async (prompt) => {
    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: prompt,
        max_tokens: 150, // Adjust max_tokens according to your desired length
        n: 1,
      }),
    };

    const response = await fetch(
      "https://api.openai.com/v1/completions",
      options
    );

    const data = await response.json();
    const generatedText = data.choices[0].text.trim(); // Get the generated text
    return generatedText;
  };

  return (
    <div>
      <img src={image} alt="Ai generated image" height={200} width={200} />
      <input
        type="text"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
        className="border w-[400px] h-[100px]"
      />
      <button onClick={generateImage} className="border ">
        Generate Image
      </button>
    </div>
  );
};

export default ImageGen;
