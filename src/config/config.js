module.exports = {
  development: {
    dialect: process.env.DB_DIALECT || 'mysql',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Thund3r$truck',
    database: process.env.DB_NAME || 'dev_blog',
    host: process.env.DB_HOST || '127.0.0.1',
    port: process.env.DB_PORT || 3306,
  },
  test: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
  production: {
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  },
};
