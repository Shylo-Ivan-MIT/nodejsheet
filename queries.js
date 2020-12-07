const Pool = require('pg').Pool;
const pool = new Pool({
 host: 'ec2-52-211-108-161.eu-west-1.compute.amazonaws.com',
  database: 'd3l31g6umf064g',
  user:'tbnfjcjivxqbea',
  password: 'befe07cba5a90846f18de0e374fc2109cd41a002e0ca575befddeb61d4351720',
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