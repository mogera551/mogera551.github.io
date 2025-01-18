import { config, registerSingleFileComponents as register } from "@quel";

register({ 
  "myapp-main":   "@app/main",
});

config.useShadowRoot = true;
config.useInvokerCommands = true;
