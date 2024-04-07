import React from "react";
import NFTCard from "./NFTCard";

const MyNFTs = (props) => {
  const style = {
    scrollbarWidth: "thin",
    scrollbarColor: "#404040 #151515",
    scrollbarBorderRadius: "10px",
  };
  return (
    <div className="  border-[#303030] flex flex-col gap-y-3 ">
      <p className="text-2xl"> My NFT-Mons</p>
      <div className="flex overflow-auto  gap-x-4" style={style}>
        {props.nft_mons.map((nftMon, index) => (
          <NFTCard
            key={index}
            nftMon={nftMon}
            onDragStart={(e) => props.handleOnDragStart(e, nftMon)}
          />
        ))}
      </div>
    </div>
  );
};

export default MyNFTs;
