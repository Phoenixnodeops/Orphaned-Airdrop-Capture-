const { claimAirdrops } = require('./claimAirdrops');

(async () => {
  try {
    await claimAirdrops();
    console.log("✅ All eligible airdrops processed.");
  } catch (err) {
    console.error("❌ Error running airdrop claim script:", err);
  }
})();
