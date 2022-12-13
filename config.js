const config = {
    db: {
      host: process.env.MY_HOST || 'localhost',
      user: process.env.MY_USER,
      password: process.env.MY_PASS,
      database: process.env.MY_DATABASE || '',
    },
    listPerPage: 10,
  }
  module.exports = config