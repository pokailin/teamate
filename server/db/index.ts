import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  mongoose
    .disconnect()
    .then((val) => {
      console.log(`disconnected from ${val}`);

      const config = useRuntimeConfig();

      if (config.mongodbUri != undefined) {
        mongoose
          .connect(config.mongodbUri)
          .then(() => {
            console.log("Successful connection");
          })
          .catch((e) => {
            console.log(e);
          });
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
