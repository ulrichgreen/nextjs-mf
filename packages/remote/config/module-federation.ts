import { ModuleFederationPlugin } from "@module-federation/enhanced";
import { UniversalFederationPlugin } from "@module-federation/node";

const exposes = {
  "./components": "./src/components.tsx",
};

const shared = {
  react: {
    singleton: true,
  },
  "react-dom": {
    singleton: true,
  },
};

const clientFederationConfig = {
  name: "remote",
  filename: "remoteEntry.js",
  exposes: exposes,
  shared: shared,
};

const serverFederationConfig = {
  ...clientFederationConfig,
  isServer: true,
  library: { type: "commonjs-module" },
};

export default {
  client: new ModuleFederationPlugin(clientFederationConfig),
  server: [new UniversalFederationPlugin(serverFederationConfig)],
};
