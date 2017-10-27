const mysql = require('mysql')

const pool = mysql.createPool({
  connectionLimit: 5,
  database: process.env.RDS_DB_NAME,
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
});

module.exports = pool