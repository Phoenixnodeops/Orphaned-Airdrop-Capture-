// claimAirdrops.js
const { ethers } = require("ethers");
const { INFURA_URL } = require("./src/config");
const snapshotWallets = require("./src/snapshotWallets.json");

const AIRDROP_CONTRACT = "0x27C71F2cE7809Fea949FF8dC65b45706c61f3040"; // Example airdrop contract

const AIRDROP_ABI = [
  "function isClaimed(address) view returns (bool)",
  "function claim(address)"
];

async function claimEligibleAirdrops() {
  const provider = new ethers.providers.JsonRpcProvider(INFURA_URL);
  const contract = new ethers.Contract(AIRDROP_CONTRACT, AIRDROP_ABI, provider);

  for (const wallet of snapshotWallets) {
    const address = wallet.address;

    try {
      const isClaimed = await contract.isClaimed(address);
      if (!isClaimed) {
        console.log(`✅ ${address} is eligible for airdrop (simulation only).`);
        // You would trigger the actual claim here if you had a signer.
        // e.g. await contract.connect(signer).claim(address);
      } else {
        console.log(`❌ ${address} has already claimed.`);
      }
    } catch (err) {
      console.error(`⚠️ Error checking ${address}:`, err.message);
    }
  }
}

claimEligibleAirdrops();
