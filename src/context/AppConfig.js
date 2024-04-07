import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { Contract } from "ethers";

export const BlockchainConfig = React.createContext();

export const BlockchainProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const contractAddress = "0x00";
  const contractABI = [];

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const Contract = new ethers.Contract(contractAddress, contractABI, provider);
  const signer = provider.getSigner();
  const ContractWithSigner = Contract.connect(signer);

  const connectWallet = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log("Connected");
    setCurrentAccount(accounts[0]);
    window.location.reload();
  };

  const disconnectWallet = async () => {
    setCurrentAccount("");
  };

  const checkIfWalletIsConnect = async () => {
    if (!window.ethereum) return alert("Please install MetaMask.");
    const accounts = await window.ethereum.request({ method: "eth_accounts" });
    if (accounts.length) {
      setCurrentAccount(accounts[0]);
      console.log("Connected");
    } else {
      console.log("No accounts found");
    }
  };

  const fetchNFTs = async () => {};

  const mateNFT = async (tokenId1, tokenId2, _name) => {
    try {
      const response = await ContractWithSigner.mateNFT(tokenId1, tokenId2, _name);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);
  
  return (
    <BlockchainConfig.Provider
      value={{
        currentAccount,
        provider,
        checkIfWalletIsConnect,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </BlockchainConfig.Provider>
  );
};
