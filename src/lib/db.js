// MySQL Database Connection 
import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',       // Change if your MySQL user is different
  password: 'Aayush@01', // Use your MySQL password
  database: 'imdb_clone',
});

export default db;
