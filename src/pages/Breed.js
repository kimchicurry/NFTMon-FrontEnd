import React, { useState } from "react";
import NFTCard from "../components/NFTCard";
import { getColor } from "../utils/getColor";
import { FaHeartCircleBolt } from "react-icons/fa6";

const Breed = () => {
  const [nft1, setnft1] = useState(null);
  const [nft2, setnft2] = useState(null);

  const nft_mons = [
    {
      name: "Charmander",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
      type: "fire",
      hp: 80,
      attack: 70,
      defense: 60,
      stamina: 75,
      speed: 85,
    },
    {
      name: "Squirtle",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
      type: "water",
      hp: 70,
      attack: 65,
      defense: 75,
      stamina: 80,
      speed: 60,
    },
    {
      name: "Bulbasaur",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      type: "grass",
      hp: 75,
      attack: 80,
      defense: 70,
      stamina: 65,
      speed: 70,
    },
    // Add more NFT-Mons below
    {
      name: "Pikachu",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
      type: "electric",
      hp: 65,
      attack: 75,
      defense: 55,
      stamina: 70,
      speed: 95,
    },
    {
      name: "Eevee",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png",
      type: "normal",
      hp: 70,
      attack: 70,
      defense: 70,
      stamina: 70,
      speed: 70,
    },
  ];

  function handleOnDragStart(e, selectedNFT) {
    e.dataTransfer.setData("nft1", JSON.stringify(selectedNFT));
    e.dataTransfer.setData("nft2", JSON.stringify(selectedNFT));
  }

  function handleOnDropNFT1(e) {
    const nft1 = JSON.parse(e.dataTransfer.getData("nft1"));

    setnft1(nft1);
  }

  function handleOnDropNFT2(e) {
    const nft2 = JSON.parse(e.dataTransfer.getData("nft2"));

    setnft2(nft2);
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  return (
    <div className="">
      <div className="flex justify-center gap-x-10 items-center">
        <div
          onDrop={handleOnDropNFT1}
          onDragOver={handleDragOver}
          className="flex flex-col items-center gap-y-10"
        >
          <p className="font-bold text-2xl">NFT parent 1</p>
          {nft1 != null ? (
            <div
              className="flex flex-col p-5 border-2 items-center justify-center gap-y-5 h-[400px] w-[300px] rounded-lg"
              style={{
                borderColor: getColor(nft1.type),
              }}
            >
              <p className="font-bold text-2xl">{nft1.name}</p>
              <img height={250} width={250} src={nft1.img} />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-[400px] w-[300px] p-5 border-2">
              <p className="text-2xl">Drop NFT here</p>
            </div>
          )}
        </div>

        <button className="bg-[#D74E4F] text-white p-5 rounded-full">
          <FaHeartCircleBolt size={30} />
        </button>

        <div
          onDrop={handleOnDropNFT2}
          onDragOver={handleDragOver}
          className="flex flex-col items-center gap-y-10"
        >
          <p className="font-bold text-2xl">NFT parent 2</p>
          {nft2 != null ? (
            <div
              className="flex flex-col p-5 border-2 items-center justify-center gap-y-5 h-[400px] w-[300px] rounded-lg"
              style={{
                borderColor: getColor(nft2.type),
              }}
            >
              <p className="font-bold text-2xl">{nft2.name}</p>
              <img height={250} width={250} src={nft2.img} />
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center h-[400px] w-[300px] p-5 border-2">
              <p className="text-2xl">Drop NFT here</p>
            </div>
          )}
        </div>
      </div>

      <div className="border-t-2  border-[#303030] flex flex-col gap-y-3 p-10 mt-10">
        <p className="text-2xl"> My NFT-Mons</p>
        <div className="flex   gap-x-4">
          {nft_mons.map((nftMon, index) => (
            <NFTCard
              key={index}
              nftMon={nftMon}
              onDragStart={(e) => handleOnDragStart(e, nftMon)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Breed;
