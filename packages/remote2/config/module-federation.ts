import { ModuleFederationPlugin } from "@module-federation/enhanced";
import { UniversalFederationPlugin } from "@module-federation/node";

const exposes = {
  "./components": "./src/components",
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
  name: "remote2",
  filename: "remoteEntry.js",
  remotes: {
    remote: `remote@http://localhost:3003/client/remoteEntry.js`,
  },
  shared: shared,
  exposes: exposes,
};

const serverFederationConfig = {
  name: "remote2",
  filename: "remoteEntry.js",
  isServer: true,
  remotes: {
    remote: `remote@http://localhost:3003/server/remoteEntry.js`,
  },
  shared: shared,
  exposes: exposes,
  library: { type: "commonjs-module" },
};

export default {
  client: new ModuleFederationPlugin(clientFederationConfig),
  server: [new UniversalFederationPlugin(serverFederationConfig)],
};
