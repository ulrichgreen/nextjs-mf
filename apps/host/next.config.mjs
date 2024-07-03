import { NextFederationPlugin } from '@module-federation/nextjs-mf';

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    const location = isServer ? 'server' : 'client';
    const federationConfig = {
      name: 'host',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {},
      remotes: {
        remote: `remote@http://localhost:3003/${location}/remoteEntry.js`,
        remote2: `remote2@http://localhost:3004/${location}/remoteEntry.js`,
      },
      shared: {},
      extraOptions: {},
      //runtimePlugins: [path.resolve(__dirname, './src/runtime-plugin.mjs')],
    };
    config.plugins.push(new NextFederationPlugin(federationConfig));

    /**
     * Work around for unsafe-eval CSP policy
     * @see https://github.com/vercel/next.js/discussions/21425#discussioncomment-7256984
     */
    Object.defineProperty(config, "devtool", {
      get() {
        return "source-map";
      },
      set() { },
    });

    return config;
  }
};

export default nextConfig;
