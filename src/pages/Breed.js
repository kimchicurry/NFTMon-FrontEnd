import React, { useState } from "react";
import { nft_mons } from "../utils/nftMons";
import { getColor } from "../utils/getColor";

import { FaHeartCircleBolt } from "react-icons/fa6";
import MyNFTs from "../components/MyNFTs";

const Breed = () => {
  const [nft1, setnft1] = useState(null);
  const [nft2, setnft2] = useState(null);

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

      <div className="mt-10 p-10">
        <MyNFTs nft_mons={nft_mons} handleOnDragStart={handleOnDragStart} />
      </div>
    </div>
  );
};

export default Breed;
