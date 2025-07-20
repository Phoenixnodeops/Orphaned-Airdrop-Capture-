const { ethers } = require("ethers");
const fs = require("fs");

const INFURA_URL = "https://mainnet.infura.io/v3/d097e26906bb4d489da56616c97a8ba0";
const provider = new ethers.providers.JsonRpcProvider(INFURA_URL);

const walletData = JSON.parse(fs.readFileSync("snapshotWallets.json", "utf-8"));
const addresses = walletData.addresses;

const AIRDROP_CONTRACT = "0x0000000000000000000000000000000000000000"; // placeholder
const AIRDROP_ABI = [
  "function isEligible(address) view returns (bool)",
  "function claim()"
];

async function claimAirdrops() {
  const contract = new ethers.Contract(AIRDROP_CONTRACT, AIRDROP_ABI, provider);

  for (const address of addresses) {
    try {
      const eligible = await contract.isEligible(address);
      if (eligible) {
        console.log(`✅ ${address} is eligible - claiming...`);
        // Sign + send transaction would go here
      } else {
        console.log(`❌ ${address} not eligible.`);
      }
    } catch (e) {
      console.log(`⚠️ Error with ${address}: ${e.message}`);
    }
  }
}

claimAirdrops();
