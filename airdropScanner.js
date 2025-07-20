const fs = require("fs");
const axios = require("axios");

const wallets = require("./snapshotWallets.json").wallets;

async function checkLayerZero(wallet) {
  try {
    const response = await axios.get(`https://api.layerzeroscan.com/api/address/${wallet}`);
    return response.data ? `✅ ${wallet} may have LZ activity` : `❌ ${wallet} no data`;
  } catch (err) {
    return `⚠️ ${wallet} lookup failed (LayerZero)`;
  }
}

async function checkHopProtocol(wallet) {
  try {
    const res = await axios.get(`https://api.thegraph.com/subgraphs/name/hop-protocol/hop`, {
      params: {
        query: `
        {
          user(id: "${wallet.toLowerCase()}") {
            id
            totalVolumeUSD
          }
        }`
      }
    });
    return res.data?.data?.user ? `✅ ${wallet} used Hop` : `❌ ${wallet} no Hop usage`;
  } catch {
    return `⚠️ ${wallet} Hop API fail`;
  }
}

async function runChecks() {
  console.log("🔎 Running Airdrop Checks on Snapshot Wallets...\n");

  for (const wallet of wallets) {
    const results = await Promise.all([
      checkLayerZero(wallet),
      checkHopProtocol(wallet),
    ]);

    console.log(`\n💼 Wallet: ${wallet}`);
    results.forEach(r => console.log(" - " + r));
  }
}

runChecks();
