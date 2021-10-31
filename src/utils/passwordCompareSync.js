const bcrypt = require('bcrypt');

// eslint-disable-next-line max-len
const passwordCompareSync = (passwordToTest, passwordHash) => bcrypt.compareSync(passwordToTest, passwordHash);

module.exports = passwordCompareSync;
