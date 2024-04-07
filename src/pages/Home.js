import React, { useEffect, useContext } from "react";
import PlayerCard from "../components/PlayerCard";
import MyNFTs from "../components/MyNFTs";
import { nft_mons } from "../utils/nftMons";
import { BlockchainConfig } from "../context/AppConfig";

const Home = () => {
  const { provider } = useContext(BlockchainConfig);

  useEffect(() => {
    if (provider) {
      console.log(provider);
    }
  }, [provider]);

  return (
    <div className="grid grid-cols-2 px-10 gap-5">
      <div className="h-[40vh] border-2 border-[#fff] rounded-md p-10">
        <PlayerCard
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          name="John Doe"
          playerTag="JD"
          playerLevel="1"
          winRate="50%"
        ></PlayerCard>
      </div>

      <div className=" border-2 border-[#fff] rounded-md p-10">
        <MyNFTs nft_mons={nft_mons} />
      </div>

      <div className=" border-2 border-[#fff] rounded-md p-10">
        <MyNFTs nft_mons={nft_mons} />
      </div>

      <div className="h-[40vh] border-2 border-[#fff] rounded-md p-10">
        <PlayerCard
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          name="John Doe"
          playerTag="JD"
          playerLevel="Level 1"
          winRate="Win Rate: 50%"
        ></PlayerCard>
      </div>
    </div>
  );
};

export default Home;
