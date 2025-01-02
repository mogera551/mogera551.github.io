import { config, registerSingleFileComponents as register } from "@quel";

register({ 
  "myapp-detail": "@app/detail",
  "myapp-main":   "@app/main",
});

config.useShadowRoot = true;
