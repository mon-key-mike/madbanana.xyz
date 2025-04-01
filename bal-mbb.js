const resp = await fetch(
  "https://76170284.engine-usw2.thirdweb.com/contract/8453/0xf98935b912fec3471ecff0d7cf267b5ebe986a59/read?functionName=balanceOf&args=0xB1A865Fc0b7a1A43265Af0Ec38CA2993B1DB3b97",
  {
    headers: {
      Authorization: "Bearer <accesstoken>",
    },
  },
);

const { result } = await resp.json();
console.log("ERC-20 balance:", result);
