"use client";

import { wagmiAdapter, projectId } from "./config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import {
  sepolia,
  arbitrumSepolia,
  optimismSepolia,
  baseSepolia,
} from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider } from "wagmi";

import { SessionProvider } from "next-auth/react";
import { GlobalProvider } from "./GlobalContext";
// Set up queryClient
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// Move metadata definition here
const metadata = {
  name: "ETH INDIA 2024",
  description: "ETH INDIA 2024",
  url: "https://ethindia2024.vercel.app",
  icons: ["https://assets.reown.com/reown-profile-pic.png"],
};

function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies);

  React.useEffect(() => {
    // Move createAppKit inside the component
    createAppKit({
      adapters: [wagmiAdapter],
      projectId: projectId as string,
      networks: [baseSepolia, arbitrumSepolia, optimismSepolia, sepolia],
      defaultNetwork: arbitrumSepolia,
      metadata: metadata,
      features: {
        analytics: true,
        email: false,
        socials: ["google"],
        emailShowWallets: false,
      },
      allWallets: "HIDE",
      themeMode: "dark",
      themeColor: "#000000",
    });
  }, []); // Empty dependency array means this runs once on mount

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>
        <SessionProvider>
          <GlobalProvider>{children}</GlobalProvider>
        </SessionProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
