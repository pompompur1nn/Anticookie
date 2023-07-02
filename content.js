// Define the list of banking website domains (40 banks)
const bankingWebsites = [
 // Define the list of banking website domains (40 banks)
const bankingWebsites = [
  "bankofamerica.com",
  "jpmorganchase.com",
  "wellsfargo.com",
  "citigroup.com",
  "usbank.com",
  "pnc.com",
  "tdbank.com",
  "capitalone.com",
  "usaa.com",
  "barclays.com",
  "deutschebank.com",
  "hsbc.com",
  "standardchartered.com",
  "rbc.com",
  "bnpparibas.com",
  "lloydsbank.com",
  "santanderbank.com",
  "bbva.com",
  "ubs.com",
  "creditsuisse.com",
  "morganstanley.com",
  "goldmansachs.com",
  "societegenerale.com",
  "bocgroup.com",
  "citi.com",
  "commbank.com.au",
  "anz.com",
  "westpac.com.au",
  "nab.com.au",
  "hsbc.co.uk",
  "barclaycard.co.uk",
  "bnpfortis.be",
  "abnamro.nl",
  "rbs.co.uk",
  "tdcanadatrust.com",
  "scotiabank.com",
  "icbc.com.cn",
  "bankofchina.com",
  "hdfcbank.com",
  "sbi.co.in",
  "bancopopular.es",
  // Add more banking websites here
];

// Define the list of major game website domains (40 games)
const gameWebsites = [
  "steamcommunity.com",
  "epicgames.com",
  "ubisoft.com",
  "origin.com",
  "battle.net",
  "playstation.com",
  "xbox.com",
  "roblox.com",
  "minecraft.net",
  "fortnite.com",
  "leagueoflegends.com",
  "playvalorant.com",
  "warthunder.com",
  "worldofwarcraft.com",
  "ea.com",
  "uplay.com",
  "rockstargames.com",
  "nintendo.com",
  "microsoft.com",
  "sony.com",
  "bethesda.net",
  "activision.com",
  "riotgames.com",
  "cdprojekt.com",
  "bungie.net",
  "gaijin.net",
  "blizzard.com",
  "valvesoftware.com",
  "ubisoftgroup.com",
  "2k.com",
  "square-enix.com",
  "bandainamcoent.com",
  "sega.com",
  "capcom.com",
  "konami.com",
  "telltalegames.com",
  "bethesda.com",
  "ncsoft.com",
  "daybreakgames.com",
  "ubi.com",
  "pearlabyss.com",
  // Add more game websites here
];

// Combine all the domains into a single array
const allowedWebsites = [...bankingWebsites, ...gameWebsites];

// Listen to web requests
browser.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    // Get the requested domain from the URL
    const requestedDomain = new URL(details.url).hostname;

    // Check if the requested domain is in the allowed websites list
    if (allowedWebsites.includes(requestedDomain)) {
      // Find and remove any cookies from the request headers
      const headers = details.requestHeaders.filter(header => header.name.toLowerCase
                                                    () !== "cookie");
      return { requestHeaders: headers };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
