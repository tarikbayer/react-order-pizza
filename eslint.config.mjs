import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  
  // add to files
  files: ["**/*.js", "**/*.jsx"], // add JSX
  
  //after the languageOptions object:
  rules: {
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
  },