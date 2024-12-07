# SockeTix

![Brand](public/brand-image.png)

**SockeTix: Your gateway to seamless cross-chain ticketing** 🎫✨

## Demo

### Landing Page

![Home](public/home.png)

### Dashboard Page

![Dashboard](public/dashboard.png)

### Events Page

![Events](public/events.png)

<br>

## 🚀 Get Started

**GitHub Repo**: [Repo Link](https://github.com/satyasandeep007/socketix)  
**Live Demo**: [Demo Link](https://socketix.vercel.app)

## 🛠️ Stack We Used

- Socket Protocol
- Next.js
- TypeScript
- Tailwind CSS
- Reown Appkit

## 🏗️ Steps to Run the Project

1. **Clone the repository**

   ```bash
   git clone https://github.com/satyasandeep007/socketix.git
   ```

2. **Install the dependencies**

   ```bash
   pnpm i
   ```

3. **Start the app**

   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the frontend.

<br>

## 🔗 Smart Contract Deployment Guide

### Prerequisites

- Install Foundry
- Navigate to the socket directory: `cd socket`
- Install dependencies: `forge install`

### Deployment Steps

1. **Setup Tickets Contract**

   ```bash
   forge script script/SetupTickets.s.sol --broadcast --skip-simulation
   ```

   This will generate the token deployer and app gateway addresses. Add these to your `.env` file:

   ```env
   TICKETS_DEPLOYER=<your_token_deployer_address>
   TICKETS_APP_GATEWAY=<your_app_gateway_address>
   ```

2. **Deploy Tickets Contract**

   ```bash
   forge script script/DeployTickets.s.sol --broadcast --skip-simulation
   ```

   This deployment will generate transaction hashes for three networks:

   - Arbitrum
   - Optimism
   - Base

3. **Setup Fees and Deposit Funds**

   ```bash
   cast send 0x804Af74b5b3865872bEf354e286124253782FA95 "deposit(address,uint256,address)" \
    0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE \
    12000000000000000 \
    TICKETS_DEPLOYER \
    --value 12000000000000000 \
    --rpc-url YOUR_RPC_URL \
    --private-key YOUR_PRIVATE_KEY
   ```

4. **Get Contract Details**

   - Visit the Socket Tech API endpoint with your transaction hash:

   ```
   https://apiv2.dev.socket.tech/getDetailsByTxHash?txHash=YOUR_TX_HASH
   ```

   You'll receive deployment details in this format:

   ```json
   {
     "deployerDetails": {
       "onChainAddress": "0xaf42dAd2B83e7e4643c9E89C1BbE6fF0AbA8A277",
       "forwarderAddress": "0x67e519394797402345375C485376e358C6D78299",
       "isForwarderDeployed": true
     }
   }
   ```

5. **Final Configuration**
   Add the `onChainAddress` to your `.env` file:
   ```env
   CONTRACT_ADDRESS=<your_onchain_address>
   ```

Now your contract is deployed and configured for interaction with your application.

<br>

## 👥 Meet Our Team

<div style="display: flex; justify-content: space-between; align-items: center;">
   <p style="flex:1">Shiva Kumar: </p>
   <div style="flex:4; justify-content: space-between;">
      <a href="https://www.linkedin.com/in/shivamangina/" target="_blank">
      <img src=https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
      </a>
      <a href="https://twitter.com/shivakmangina" target="_blank">
      <img src=https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
      </a>
      <a href="https://www.instagram.com/shiva_mangina" target="_blank">
      <img src=https://img.shields.io/badge/instagram-%ff5851db.svg?color=C13584&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
      </a>
      <a href="https://github.com/shivamangina" target="_blank">
      <img src=https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
      </a>
   </div>
</div>

<div style="display: flex; justify-content: space-between; align-items: center;">
   <p style="flex:1">Sandeep Kumar: </p>
   <div style="flex:4; justify-content: space-between;">
      <a href="https://www.linkedin.com/in/satyasandeep" target="_blank">
      <img src=https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
      </a>
      <a href="https://twitter.com/satyasandeep76" target="_blank">
      <img src=https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
      </a>
      <a href="https://www.instagram.com/satyasandeep007" target="_blank">
      <img src=https://img.shields.io/badge/instagram-%ff5851db.svg?color=C13584&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
      </a>
      <a href="https://github.com/satyasandeep007" target="_blank">
      <img src=https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white alt=github style="margin-bottom: 5px;" />
      </a>
   </div>
</div>
