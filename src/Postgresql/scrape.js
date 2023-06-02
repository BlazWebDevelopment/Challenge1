const axios = require("axios");

async function main() {
  const data = await requestHTML();

  const realEstates = data["_embedded"]["estates"];
  if (!realEstates) {
    console.log("Fetch failed.");
    return;
  }

  const info = realEstates.map((item) => formatData(item));

  console.log(info);
}

main();

function formatData(data) {
  return {
    name: data.name,
    price: data.price,
    location: data.locality,
    images: data._links.images.map((img) => img.href),
  };
}

async function requestHTML() {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://www.sreality.cz/api/en/v2/estates?category_main_cb=1&category_type_cb=1&per_page=60&tms=1685660457584",
    headers: {
      authority: "www.sreality.cz",
      accept: "application/json, text/plain, */*",
      "accept-language": "de-DE,de;q=0.7",
      "cache-control": "no-cache",
      pragma: "no-cache",
      referer: "https://www.sreality.cz/en/search/for-sale/apartments",
      "sec-ch-ua": '"Not.A/Brand";v="8", "Chromium";v="114", "Brave";v="114"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sec-gpc": "1",
      "user-agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36",
    },
  };

  try {
    const res = await axios.request(config);
    return res.data;
  } catch (err) {
    return {};
  }
}
