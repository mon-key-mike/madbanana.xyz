import { createThirdwebClient } from "thirdweb";
import { ConnectButton } from "thirdweb/react";

import {
  inAppWallet,
  createWallet,
} from "thirdweb/wallets";
import { ethereum } from "thirdweb/chains";

const client = createThirdwebClient({
  clientId: "....",
});

const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "email",
        "x",
        "phone",
        "facebook",
        "coinbase",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("com.trustwallet.app"),
  createWallet("global.safe"),
  createWallet("io.magiceden.wallet"),
  createWallet("com.robinhood.wallet"),
  createWallet("so.onekey.app.wallet"),
  createWallet("io.enjin"),
  createWallet("io.loopring.wallet"),
  createWallet("com.unstoppabledomains"),
  createWallet("app.xverse"),
  createWallet("walletConnect"),
];

function Example() {
  return (
    <ConnectButton
      client={client}
      wallets={wallets}
      connectButton={{ label: "Connect" }}
      connectModal={{
        size: "wide",
        title: "Sign In",
        titleIcon:
          "https://madbanana.xyz/images/favicon.ico",
        showThirdwebBranding: false,
      }}
      accountAbstraction={{
        chain: ethereum, // replace with the chain you want
        sponsorGas: true,
      }}
      auth={{
        async doLogin(params) {
          // call your backend to verify the signed payload passed in params
        },
        async doLogout() {
          // call your backend to logout the user if needed
        },
        async getLoginPayload(params) {
          // call your backend and return the payload
        },
        async isLoggedIn() {
          // call your backend to check if the user is logged in
        },
      }}
    />
  );
}
