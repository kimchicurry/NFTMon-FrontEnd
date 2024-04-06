import React, { useState } from "react";

const ImageGen = () => {
  const [image, setImage] = useState(null);
  const [fatherDescription, setFatherDescription] = useState("");
  const [motherDescription, setMotherDescription] = useState("");
  const [prompt, setPrompt] = useState("");

  const generateImage = async () => {

    const promptForChild = await generateChildDescription(
      fatherDescription,
      motherDescription
    );

    const promptForImage = `Generate an image of a creature that resembles a Pokémon based on the following description:\n\n${promptForChild}`;

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: promptForImage,
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

  const generateChildDescription = async (
    fatherDescription,
    motherDescription
  ) => {

    const blendPrompt =
      `Generate an brief description less than 1000 characters of a creature that resembles a Pokémon and is a blend of the following two descriptions:\n\n` +
      `Father: ${fatherDescription}\n\n` +
      `Mother: ${motherDescription}\n\n` +
      `Specifications for the Pokémon-like creature:\n` +
      `- It should have a distinct body shape resembling that of a Pokémon, with features such as a head, body, limbs, and tail.\n` +
      `- Incorporate elements from both parents, such as color palette, patterns, and textures, to create a unique appearance.\n` +
      `- Include characteristic Pokémon features such as large expressive eyes, exaggerated facial expressions, and unique markings.\n` +
      `- Pay attention to details such as fur, scales, or feathers, depending on the parent descriptions.\n` +
      `- Ensure the creature has a playful and friendly demeanor, typical of Pokémon.\n` +
      `- Experiment with different poses and expressions to capture the essence of a Pokémon.\n`;


    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_OPEN_AI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        messages: [
          {"role": "user", "content": blendPrompt},
        ],
        model: "gpt-3.5-turbo",
       
      }),
    };

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      options
    );

    const data = await response.json();
    const generatedText = data.choices[0].message.content;
    console.log(generatedText);
    return generatedText;
  };

  return (
    <div>
      <img src={image} alt="Ai generated image" height={200} width={200} />
      <input
        type="text"
        onChange={(e) => setFatherDescription(e.target.value)}
        value={fatherDescription}
        className="border w-[400px] h-[100px]"
      />
      <input
        type="text"
        onChange={(e) => setMotherDescription(e.target.value)}
        value={motherDescription}
        className="border w-[400px] h-[100px]"
      />

      <button onClick={generateImage} className="border ">
        Generate Image
      </button>
    </div>
  );
};

export default ImageGen;
