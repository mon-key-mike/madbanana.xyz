import { createThirdwebClient } from "thirdweb";
import { ConnectEmbed } from "thirdweb/react";

const THIRDWEB_CLIENT = createThirdwebClient({
  clientId: "<YOUR_CLIENT_ID>",
});

function App() {
  return <ConnectEmbed client={THIRDWEB_CLIENT} />;
}
