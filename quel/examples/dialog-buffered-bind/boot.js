import { config, registerSingleFileComponents as register } from "@quel";

register({ 
  "myapp-dialog": "@app/dialog",
  "myapp-main":   "@app/main",
});

config.useShadowRoot = true;
config.useInvokerCommands = true;
