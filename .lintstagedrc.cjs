module.exports = {
  '*.{ts,tsx}': ['yarn lint', "bash -c 'yarn compile'", 'yarn run:prettier'],
};
