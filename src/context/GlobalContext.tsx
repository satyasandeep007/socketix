"use client";

import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";
import { toast } from "react-toastify";

interface GlobalContextType {
  isLoading: boolean;
  isInitializing: boolean;
  isConnected: boolean;
  address: string | null;
  connect: () => Promise<void>;
  disconnect: () => Promise<void>;
}

const initialState: GlobalContextType = {
  isLoading: false,
  isInitializing: true,
  isConnected: false,
  address: null,
  connect: async () => {},
  disconnect: async () => {},
};

const GlobalContext = createContext<GlobalContextType>(initialState);

export const GlobalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [address, setAddress] = useState<string | null>(null);

  // Initialize wallet connection
  useEffect(() => {
    const checkConnection = async () => {
      try {
        if (typeof window.ethereum !== "undefined") {
          const accounts = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (accounts.length > 0) {
            setAddress(accounts[0]);
            setIsConnected(true);
          }
        }
      } catch (error) {
        console.error("Failed to check wallet connection:", error);
      } finally {
        setIsInitializing(false);
      }
    };

    checkConnection();

    // Listen for account changes
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        if (accounts.length > 0) {
          setAddress(accounts[0]);
          setIsConnected(true);
        } else {
          setAddress(null);
          setIsConnected(false);
        }
      });
    }
  }, []);

  const connect = async () => {
    if (typeof window.ethereum === "undefined") {
      toast.error("Please install MetaMask!");
      return;
    }

    try {
      setIsLoading(true);
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAddress(accounts[0]);
      setIsConnected(true);
      toast.success("Wallet connected successfully!");
    } catch (error) {
      console.error("Connection error:", error);
      toast.error("Failed to connect wallet");
    } finally {
      setIsLoading(false);
    }
  };

  const disconnect = async () => {
    try {
      setIsLoading(true);
      setAddress(null);
      setIsConnected(false);
      toast.success("Wallet disconnected successfully!");
    } catch (error) {
      console.error("Disconnection error:", error);
      toast.error("Failed to disconnect wallet");
    } finally {
      setIsLoading(false);
    }
  };

  const value: GlobalContextType = {
    isLoading,
    isInitializing,
    isConnected,
    address,
    connect,
    disconnect,
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
