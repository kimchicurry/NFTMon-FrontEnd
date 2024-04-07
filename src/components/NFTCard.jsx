import React from "react";
import { getColor } from "../utils/getColor";

const NFTCard = (props) => {
  const { nftMon, onDragStart } = props;
  const { name, img, type } = nftMon;

  const bgColor = getColor(type);


  return (
    <div
      className="flex flex-col p-5 flex-shrink-0 border-2 justify-center items-center text-[#212121]  rounded-md"
      draggable
      onDragStart={(e) => onDragStart(e, nftMon)}
      style={{ backgroundColor: bgColor }}
    >
      <p className="tracking-wide text-xl">{name}</p>
      <img height={150} width={150} src={img} alt={name} />
    </div>
  );
};

export default NFTCard;
