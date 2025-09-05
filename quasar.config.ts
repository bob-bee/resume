// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from '#q-app/wrappers';

export default defineConfig(() => {
  return {
    // Boot files
    boot: ['initResumeStore'],

    // CSS
    css: ['app.scss'],

    // Quasar extras
    extras: ['mdi-v7', 'fontawesome-v6', 'roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },
      typescript: {
        strict: true,
        vueShim: true,
      },
      vueRouterMode: 'hash',
      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: true,
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      open: true,
    },

    framework: {
      plugins: [],
    },

    animations: [],

    // PWA config
    pwa: {
      workboxMode: 'GenerateSW',
      manifestFilename: 'manifest.json',
      extendManifestJson: (manifest) => {
        manifest.name = 'Resume';
        manifest.short_name = 'ResumeCV';
        manifest.icons = [{ src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' }];
      },
    },

    // Capacitor config
    capacitor: {
      hideSplashscreen: true,
    },

    // Electron config
    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,

      bundler: 'builder',

      builder: {
        appId: 'com.bobbee.resume',
        productName: 'ResumeBuilder',
        win: { target: ['nsis'] },
        mac: { target: ['dmg'] },
        linux: { target: ['AppImage'] },
      },
    },
  };
});
