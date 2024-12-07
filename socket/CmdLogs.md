## Step 1:

forge script script/SetupTickets.s.sol --broadcast --skip-simulation
[⠊] Compiling...
[⠢] Compiling 36 files with Solc 0.8.28
[⠆] Solc 0.8.28 finished in 1.16s
Compiler run successful!
Script ran successfully.
Gas used: 5673087

== Logs ==
TicketsDeployer: 0x62DB39a4F660e1A481D8d83867d9dd9C2ac73dF8
TicketsAppGateway: 0xAA124b3A3E2420130Edf25AeC7c6c40ee13BacC5

SKIPPING ON CHAIN SIMULATION.

##### 7625382

✅ [Success] Hash: 0x9db03b75d65ca0eabfaa068dac87056b6b0ead8baf2b175cea692fbd8f5e9394
Contract Address: 0x62DB39a4F660e1A481D8d83867d9dd9C2ac73dF8
Block: 2168
Paid: 0.0002018634 ETH (20186340 gas \* 0.01 gwei)

##### 7625382

✅ [Success] Hash: 0x22e8f67e3cc4f30bf738f04c43485f25d9e03bdc080224e31577855b018a78ee
Contract Address: 0xAA124b3A3E2420130Edf25AeC7c6c40ee13BacC5
Block: 2169
Paid: 0.00007465606 ETH (7465606 gas \* 0.01 gwei)

✅ Sequence #1 on 7625382 | Total Paid: 0.00027651946 ETH (27651946 gas \* avg 0.01 gwei)

==========================

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.

## Step 2:

forge script script/DeployTickets.s.sol --broadcast --skip-simulation
[⠊] Compiling...
No files changed, compilation skipped
Script ran successfully.
Gas used: 25263252

== Logs ==
Tickets Deployer: 0x62DB39a4F660e1A481D8d83867d9dd9C2ac73dF8
Deploying contracts on Arbitrum Sepolia...
Deploying contracts on Optimism Sepolia...
Deploying contracts on Base Sepolia...

SKIPPING ON CHAIN SIMULATION.

##### 7625382

✅ [Success] Hash: 0xd4b699cd31c1e947c9f74ec266892952c5270792036604b2ba8671ad6618c657
Block: 2171
Paid: 0.00009372212 ETH (9372212 gas \* 0.01 gwei)

##### 7625382

✅ [Success] Hash: 0x92684ec0054e47d35d6c0f68d801bc9eee394f5a338b04e5171b3a464fbd8982
Block: 2172
Paid: 0.0000933157 ETH (9331570 gas \* 0.01 gwei)

##### 7625382

✅ [Success] Hash: 0xea042b359107eb6967682ee71f809d6d14f783ed1f930f303ddc6c755db80a1d
Block: 2173
Paid: 0.0000933157 ETH (9331570 gas \* 0.01 gwei)

✅ Sequence #1 on 7625382 | Total Paid: 0.00028035352 ETH (28035352 gas \* avg 0.01 gwei)

==========================

ONCHAIN EXECUTION COMPLETE & SUCCESSFUL.

## Step 3:

cast send 0x804Af74b5b3865872bEf354e286124253782FA95 "deposit(address,uint256,address)" \
 0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE \
 12000000000000000 \
 0xAA124b3A3E2420130Edf25AeC7c6c40ee13BacC5 \
 --value 12000000000000000 \
 --rpc-url https://rpc.ankr.com/arbitrum_sepolia/ \
 --private-key 0xwewe23

blockHash 0x8af8adec3a712052009e6f3901061379cdbfcfa1adcdd405e424483f58734404
blockNumber 104548576
contractAddress  
cumulativeGasUsed 236010
effectiveGasPrice 100000000
from 0x5B4d77e199FE8e5090009C72d2a5581C74FEbE89
gasUsed 44845
logs []
logsBloom 0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
root  
status 1 (success)
transactionHash 0x9b8ec2a11abd6bcd0516c565524300127279517ba56f625a1ebbb826bb260828
transactionIndex 2
type 2
blobGasPrice  
blobGasUsed  
authorizationList  
to 0x804Af74b5b3865872bEf354e286124253782FA95
gasUsedForL1 "0x0"
l1BlockNumber "0x6e5aff"

contractAddress 0xaf42dAd2B83e7e4643c9E89C1BbE6fF0AbA8A277 arbitrum sepolia
