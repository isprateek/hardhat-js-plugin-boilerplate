const HardhatConfig = require("hardhat/config");
const [extendConfig, extendEnvironment] = [
  HardhatConfig.extendConfig,
  HardhatConfig.extendEnvironment,
];
const lazyObject = require("hardhat/plugins").lazyObject;
const path = require("path");
const ExampleHardhatRuntimeEnvironmentField = require("./ExampleHardhatRuntimeEnvironmentField");

extendConfig((config, userConfig) => {
  // We apply our default config here. Any other kind of config resolution
  // or normalization should be placed here.
  //
  // `config` is the resolved config, which will be used during runtime and
  // you should modify.
  // `userConfig` is the config as provided by the user. You should not modify
  // it.
  //
  // If you extended the `HardhatConfig` type, you need to make sure that
  // executing this function ensures that the `config` object is in a valid
  // state for its type, including its extensions. For example, you may
  // need to apply a default value, like in this example
  const userPath = userConfig.paths?.newPath;

  let newPath;
  if (userPath === undefined) {
    newPath = path.join(config.paths.root, "newPath");
  } else {
    if (path.isAbsolute(userPath)) {
      newPath = userPath;
    } else {
      // We resolve relative paths starting from the project's root.
      // Please keep this convention to avoid confusion.
      newPath = path.normalize(path.join(config.paths.root, userPath));
    }
  }
  config.paths.newPath = newPath;
});

extendEnvironment((hre) => {
  // We add a field to the Hardhat Runtime Environment here.
  // We use lazyObject to avoid initializing things until they are actually
  // needed.
  hre.example = lazyObject(() => new ExampleHardhatRuntimeEnvironmentField());
});
