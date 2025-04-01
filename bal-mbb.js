const resp = await fetch(
  "https://76170284.engine-usw2.thirdweb.com/contract/8453/0xf98935b912fec3471ecff0d7cf267b5ebe986a59/read?functionName=balanceOf&args=0xB1A865Fc0b7a1A43265Af0Ec38CA2993B1DB3b97",
  {
    headers: {
      Authorization: "Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiIweDhEODk2ZUZDMDViOUI3Mjk3OUNCQjBEQzZkRTY3MGQxNzMxREE4NjgiLCJzdWIiOiIweEY3QTkyMmQ0NjZlMjgwMTQ3NmI4QjVmMDY4RDA3ZEQyODliRUM3MDYiLCJhdWQiOiJ0aGlyZHdlYi5jb20iLCJleHAiOjQ4OTcxMTQzMjYsIm5iZiI6MTc0MzUxNDMyNiwiaWF0IjoxNzQzNTE0MzI2LCJqdGkiOiJjYmMyZWQ0MC0zM2EzLTRkZWItYjUwNi1iYWE1ZjQ0OTg0NjciLCJjdHgiOnsicGVybWlzc2lvbnMiOiJBRE1JTiJ9fQ.MHhjMjJiMDQzMTVjMjEwODdmYzRmOTQ4MWZlNmU0OGFiYzI1ZGQzMjExMmVkMTU3ZjQxNzJmZWRmODg3MTM0ZGE4NWQ1NWZjZjFkOGViMWNmNWZjOGZhZjZlMDRmZmRjNDU2NGIwOTcwMTgzZWNmNmNjMDYwNjk3MjRkNGE0N2ZjYTFj",
    },
  },
);

const { result } = await resp.json();
console.log("ERC-20 balance:", result);
