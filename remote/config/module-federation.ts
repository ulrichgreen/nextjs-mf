import { ModuleFederationPlugin } from '@module-federation/enhanced';
import { UniversalFederationPlugin } from '@module-federation/node';
import pkg from '../package.json';

const exposes = {
    './components': './src/components',
};

const shared = {
    ...pkg.dependencies,
    react: {
        singleton: true,
        version: pkg.dependencies.react,
    },
    'react-dom': {
        singleton: true,
        version: pkg.dependencies['react-dom'],
    },
};

const clientFederationConfig = {
    name: 'remote',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: exposes,
    shared: shared,
};

const serverFederationConfig = {
    remoteType: 'script',
    isServer: true,
    name: 'remote',
    filename: 'remoteEntry.js',
    remotes: {},
    exposes: exposes,
    shared: shared,
    library: { type: 'commonjs-module' },
};

export default {
    client: new ModuleFederationPlugin(clientFederationConfig),
    server: [new UniversalFederationPlugin(serverFederationConfig)],
};
