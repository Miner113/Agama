const path = require('path');
const fixPath = require('fix-path');
const os = require('os');

const pathsAgama = (api) => {
  if (!api) api = {};

  switch (os.platform()) {
    case 'darwin':
      fixPath();
      api.agamaDirKMD = `${process.env.HOME}/Library/Application Support/Agama`;

      api.agamaDir = `${process.env.HOME}/Library/Application Support/VerusAgama`;
      return api;
      break;

    case 'linux':
      api.agamaDirKMD = `${process.env.HOME}/.agama`;

      api.agamaDir = `${process.env.HOME}/.verus-agama`;
      return api;
      break;

    case 'win32':
      api.agamaDirKMD = `${process.env.APPDATA}/Agama`;
      api.agamaDirKMD = path.normalize(api.agamaDirKMD);

      api.agamaDir = `${process.env.APPDATA}/VerusAgama`;
      api.agamaDir = path.normalize(api.agamaDir);
      return api;
      break;
  }
};

const pathsDaemons = (api) => {
  if (!api) api = {};

  switch (os.platform()) {
    case 'darwin':
      fixPath();
      api.agamaTestDir = `${process.env.HOME}/Library/Application Support/VerusAgama/test`,
      api.komododBin = path.join(__dirname, '../../assets/bin/osx/komodod'),
      api.komodocliBin = path.join(__dirname, '../../assets/bin/osx/komodo-cli'),
      api.komodocliDir = path.join(__dirname, '../../assets/bin/osx'),
      api.komodoDir = api.appConfig && api.appConfig.native.dataDir.length ? api.appConfig.native.dataDir : `${process.env.HOME}/Library/Application Support/Komodo`,
      api.verusDir = `${process.env.HOME}/Library/Application Support/Komodo/VRSC`,
      api.zcashdBin = '/Applications/ZCashSwingWalletUI.app/Contents/MacOS/zcashd',
      api.zcashcliBin = '/Applications/ZCashSwingWalletUI.app/Contents/MacOS/zcash-cli',
      api.zcashDir = `${process.env.HOME}/Library/Application Support/Zcash`,
      api.zcashParamsDir = `${process.env.HOME}/Library/Application Support/ZcashParams`,
      api.chipsBin = path.join(__dirname, '../../assets/bin/osx/chipsd'),
      api.chipscliBin = path.join(__dirname, '../../assets/bin/osx/chips-cli'),
      api.chipsDir = `${process.env.HOME}/Library/Application Support/Chips`,
      api.coindRootDir = path.join(__dirname, '../../assets/bin/osx/dex/coind'),
      api.mmBin = path.join(__dirname, '../../node_modules/marketmaker/bin/darwin/x64/marketmaker');
      return api;
      break;

    case 'linux':
      api.agamaTestDir = `${process.env.HOME}/.verus-agama/test`,
      api.komododBin = path.join(__dirname, '../../assets/bin/linux64/komodod'),
      api.komodocliBin = path.join(__dirname, '../../assets/bin/linux64/komodo-cli'),
      api.komodocliDir = path.join(__dirname, '../../assets/bin/linux64'),
      api.komodoDir = api.appConfig && api && api.appConfig.native.dataDir.length ? api.appConfig.native.dataDir : `${process.env.HOME}/.komodo`,
      api.verusDir = `${process.env.HOME}/.komodo/VRSC`,
      api.zcashParamsDir = `${process.env.HOME}/.zcash-params`,
      api.chipsBin = path.join(__dirname, '../../assets/bin/linux64/chipsd'),
      api.chipscliBin = path.join(__dirname, '../../assets/bin/linux64/chips-cli'),
      api.chipsDir = `${process.env.HOME}/.chips`,
      api.coindRootDir = path.join(__dirname, '../../assets/bin/linux64/dex/coind'),
      api.mmBin = path.join(__dirname, '../../node_modules/marketmaker/bin/linux/x64/marketmaker');
      return api;
      break;

    case 'win32':
      api.agamaTestDir = `${process.env.APPDATA}/VerusAgama/test`;
      api.agamaTestDir = path.normalize(api.agamaTestDir);
      api.komododBin = path.join(__dirname, '../../assets/bin/win64/komodod.exe'),
      api.komododBin = path.normalize(api.komododBin),
      api.komodocliBin = path.join(__dirname, '../../assets/bin/win64/komodo-cli.exe'),
      api.komodocliBin = path.normalize(api.komodocliBin),
      api.komodocliDir = path.join(__dirname, '../../assets/bin/win64'),
      api.komodocliDir = path.normalize(api.komodocliDir),
      api.komodoDir = api.appConfig && api && api.appConfig.native.dataDir.length ? api.appConfig.native.dataDir : `${process.env.APPDATA}/Komodo`,
      api.komodoDir = path.normalize(api.komodoDir),
      api.verusDir = `${process.env.APPDATA}/Komodo/VRSC`,
      api.verusDir = path.normalize(api.verusDir),
      api.chipsBin = path.join(__dirname, '../../assets/bin/win64/chipsd.exe'),
      api.chipsBin = path.normalize(api.chipsBin),
      api.chipscliBin = path.join(__dirname, '../../assets/bin/win64/chips-cli.exe'),
      api.chipscliBin = path.normalize(api.chipscliBin),
      api.chipsDir = `${process.env.APPDATA}/Chips`,
      api.chipsDir = path.normalize(api.chipsDir);
      api.zcashParamsDir = `${process.env.APPDATA}/ZcashParams`;
      api.zcashParamsDir = path.normalize(api.zcashParamsDir);
      api.coindRootDir = path.join(__dirname, '../../assets/bin/osx/dex/coind');
      api.coindRootDir = path.normalize(api.coindRootDir);
      api.mmBin = path.join(__dirname, '../../node_modules/marketmaker/bin/win32/x64/marketmaker.exe');
      api.mmBin = path.normalize(api.mmBin);
      return api;
      break;
  }
}

const customPathsDaemons = (api, daemonName) => {
  if (!api) api = {};

  let binName = daemonName + "Bin";
  switch (os.platform()) {
    case 'darwin':
      fixPath();
      api[binName] = path.join(__dirname, `../../assets/bin/osx/${daemonName}/${daemonName}`);
      return api;
      break;
    case 'linux':
      api[binName] = path.join(__dirname, `../../assets/bin/linux64/${daemonName}/${daemonName}`);
      return api;
      break;
    case 'win32':
      api[binName] = path.join(__dirname, `../../assets/bin/win64/${daemonName}/${daemonName}.exe`),
      api[binName] = path.normalize(api[binName]);
      return api;
      break;
  }
}

module.exports = {
  pathsAgama,
  pathsDaemons,
  customPathsDaemons
};