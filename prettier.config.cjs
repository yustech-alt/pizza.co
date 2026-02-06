module.exports = {
  // prefer plugin name string so Prettier resolves it (avoids require() -> ESM errors)
  plugins: ['prettier-plugin-tailwindcss'],
  singleQuote: true,
};
