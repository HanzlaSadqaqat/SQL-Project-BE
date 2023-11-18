
import mysql from 'mysql2/promise';



const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // Change the user if you have a different user in your XAMPP setup
    password: '', // Set the password if you have one; it might be empty by default
    database: 'clientdata', // Replace 'your_database_name' with your database name
});

// const db = async () => {
//     try {
export default {
    query: async (text: string, _params?: any[]) => {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.query(text);
            console.log(rows)
            return rows;
        } finally {
            connection.release();
        }
    },
};



