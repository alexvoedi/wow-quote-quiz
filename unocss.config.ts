import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      prefix: "ico-",
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography(),
  ],
  theme: {
    fontFamily: {
      main: ["Lora", "serif"],
    },
    colors: {
      primary: "#efd213",
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
