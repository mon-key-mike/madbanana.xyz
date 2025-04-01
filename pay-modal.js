import { createThirdwebClient } from "thirdweb";
import { PayEmbed } from "thirdweb/react";

import { createWallet } from "thirdweb/wallets";
import { base, sepolia } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: "xx",
});

function Example() {
  return (
    <PayEmbed   
      client={client}
      payOptions={{     
        metadata: {
          name: "Mad Banana Cannabis | Canna-Culutre Club",
          image:
            "https://madbanana.xyz/images/MAD-Lands.png",
        },
        mode: "transaction",
        transaction: claimTo({
          contract: "0xf98935b912fec3471ecff0d7cf267b5ebe986a5",
          quantity: 1n,
          tokenId: 0n,
          to: "msg.sender",
        }),
      }}
      connectOptions={{
        accountAbstraction: {
          chain: base,
          sponsorGas: true,
        },
      }}
    />
  );
}

