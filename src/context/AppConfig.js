import React, { useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { Contract } from "ethers";

export const BlockchainConfig = React.createContext();

export const BlockchainProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();

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

  useEffect(() => {
    checkIfWalletIsConnect();
  }, []);
  return (
    <BlockchainConfig.Provider
      value={{
        currentAccount,
        checkIfWalletIsConnect,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </BlockchainConfig.Provider>
  );
};
