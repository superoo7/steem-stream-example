import { Client } from "dsteem";
const client = new Client("https://api.steemit.com");

const stream = client.blockchain.getBlockStream();

stream.on("data", operation => {
  console.log(operation);
});
