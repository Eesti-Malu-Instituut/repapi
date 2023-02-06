const config = {
  db: {
    host: process.env.MY_HOST || 'localhost',
    user: process.env.M_MYSQL_U,
    password: process.env.M_MYSQL_P,
    database: process.env.MY_DATABASE || '',
  },
  listPerPage: 10,
}
module.exports = config