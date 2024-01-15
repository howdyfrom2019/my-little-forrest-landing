module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: false,
  singleQuote: true,
  trailingComma: "all",
  semi: true,
  tabWidth: 2,
  useTabs: false,
  printWidth: 80,
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
  overrides: [
    {
      files: ['**/*.tsx', '**/*.ts'],
      options: {
        singleQuote: true,
      }
    }
  ],

  // Tailwind CSS
  tailwindConfig: "./tailwind.config.ts",
  tailwindFunctions: ["clsx", "cn"],

  // Sort imports
  importOrder: ["<THIRD_PARTY_MODULES>", "@/(.*)$", "^[./](.*)$"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
