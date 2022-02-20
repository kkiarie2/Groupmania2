 const Sequelize = require('sequelize')
 const db  = new Sequelize( process.env.db_name,   process.env.db_user, process.env.db_password, 
    {
    host: process.env.db_host,
    port: process.env.db_port,
    dialect: 'postgres',
    logging: false 
  });

  module.exports = db

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*
 const {Pool} = require("pg")
 const pool =  new Pool({
    user:"postgres",
    host: "localhost",
    database: "postgres",
    password: "sql",
    port: "5432"

        }


 )
pool.query('SELECT NOW()', (err, res) => {
   if (err) console.log({err})
   console.log({res})
    pool.end()
  }) 

  

 module.exports = {
     query: (text, params) => pool.query(text, params),
    

 };  */
  