const Pool = require('pg').Pool;
const pool = new Pool({
 host: 'ec2-176-34-114-78.eu-west-1.compute.amazonaws.com',
  database: 'd4h6a7019h2u48',
  user:'fmqamykgthxrls',
  password: '079cab004f317d220b1c6732596b581f8b5344c5daa669b5d7b7660e0357cc1b',
  port: 5432, 
  ssl: { rejectUnauthorized: false }
}) 
const getUsers = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");

  pool.query('SELECT * FROM users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
response.header("Access-Control-Allow-Origin", "*");

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById  
}