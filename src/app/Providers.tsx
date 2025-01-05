'use client';

import * as React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {getDefaultConfig, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {mainnet} from "viem/chains";



const queryClient = new QueryClient();

const config = getDefaultConfig({
    appName: 'RainbowKit demo',
    projectId: 'YOUR_PROJECT_ID',
    chains: [
        mainnet,
    ],
    ssr: true,
});

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <WagmiProvider config={config}>

            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider>{children}</RainbowKitProvider>
            </QueryClientProvider>

        </WagmiProvider>
    );
}
