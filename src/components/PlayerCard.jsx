import React from "react";

const PlayerCard = (props) => {
  return (
    <div className="flex flex-col ">
      <div className="flex items-center">
        <img
          className="rounded-full h-16 w-16 mr-4"
          src={props.image}
          alt="PFP of the player"
        />
        <div>
          <p className="text-lg font-bold">{props.name}</p>
          <p className="text-gray-600">{props.playerTag}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg">Level: {props.playerLevel}</p>
        <p className="text-lg">Win Rate: {props.winRate}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
