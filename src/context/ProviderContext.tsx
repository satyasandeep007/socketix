"use client";

import { wagmiAdapter, projectId } from "@/config";
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

const queryClient = new QueryClient();

const metadata = {
  name: "Socketix",
  description: "Cross Chain Ticketing Platform",
  url: "https://socketix.vercel.app",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
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
  }, []);

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
