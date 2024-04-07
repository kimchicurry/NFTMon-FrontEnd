import React, { useContext } from "react";
import { GrDisabledOutline } from "react-icons/gr";

import { BlockchainConfig } from "../context/AppConfig";

const Navbar = () => {
  const { connectWallet, currentAccount, disconnectWallet } =
    useContext(BlockchainConfig);

  return (
    <div className="flex justify-between items-center px-10 h-[12vh] border-b border-[#303030] mb-10">
      <div className="p-5">
        <h1 className="text-3xl ">NFT-Mon</h1>
      </div>

      <div className="flex justify-evenly w-[40%] ">
        <div>
          <a href="/">Home</a>
        </div>
        <div>
          <a href="/breed">Breed</a>
        </div>
        <div>
          <a href="/battle">Battle</a>
        </div>
      </div>
      <div className="p-5">
        {currentAccount ? (
          <div className="flex gap-x-5 items-center">
            <p>
              {currentAccount.substring(0, 6)}...
              {currentAccount.substring(
                currentAccount.length - 4,
                currentAccount.length
              )}
            </p>{" "}
            <div>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold p-3 rounded"
                onClick={() => disconnectWallet()}
              >
                <GrDisabledOutline />
              </button>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white tracking-wide py-2 px-4 rounded"
            onClick={() => connectWallet()}
          >
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
