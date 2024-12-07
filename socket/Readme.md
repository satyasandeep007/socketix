This repository is to get you started with development on SOCKET protocol.
Follow the accompanying [guide](https://docs.socket.tech/getting-started).

tx hash:0x4801eeea9d36ef3774373e569fe874067d1d98b52f59a60ffb00467166a961a7

# Set values after deployment

COUNTER_DEPLOYER="0xAa4fd77096922BE5540903C6FD892101Adeb34ce"
COUNTER_APP_GATEWAY="0x022c6a6adfA225f625791CDE23f45Aa811e26469"

MYTOKEN_DEPLOYER="0xDA5e8CD0C3bAfF51A44dA397A7827A966c43AE42"
MYTOKEN_APP_GATEWAY="0x962D7be55A4d39b61c04Cf5ADe72D8eE275A7bCB"

https://apiv2.dev.socket.tech/getDetailsByTxHash?txHash=0xa93902c5118e1bb0dd30f17d258a15f7362f05a91e297e4eacd3455d2e8368dc

forge script script/SetupTickets.s.sol --broadcast --skip-simulation

TICKETS_DEPLOYER="0x84CBDF578472cB07ea5BA4dFA5a319155253BFD0"
TICKETS_APP_GATEWAY="0xC3eb56424077eb91889Bc102e400582378E77489"

forge script script/DeployTickets.s.sol --broadcast  --skip-simulation




cast send 0x804Af74b5b3865872bEf354e286124253782FA95 "deposit(address,uint256,address)" \
    0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE \
    12000000000000000 \
    0xC3eb56424077eb91889Bc102e400582378E77489 \
    --value 12000000000000000 \
    --rpc-url https://rpc.ankr.com/eth_sepolia \
    --private-key 



    ##### 7625382
✅  [Success] Hash: 0x803097fc7bc2e7f4df5b93464919e7ab74f8e5eb71abf343e0441bbf898ff2be
Block: 1882
Paid: 0.00009424536 ETH (9424536 gas * 0.01 gwei)


##### 7625382
✅  [Success] Hash: 0x9af7955587cd88cd5636c49bf45a565fe03620b7f62c6cb62defcbdd5b86149e
Block: 1884
Paid: 0.00009383894 ETH (9383894 gas * 0.01 gwei)


##### 7625382
✅  [Success] Hash: 0xedf8485babb2c8d0b8f0abc85593349c053482dacd8a3676fe1a022bf950f879
Block: 1883
Paid: 0.00009383894 ETH (9383894 gas * 0.01 gwei)