import { createPool } from "mysql2/promise";

const pool = createPool({
    host: "univalle.mysql.database.azure.com",
    user: "univalle",
    password:"Atrevet2023",
    port:"3306",
    database:"KERNEL",
    ssl: {
        // DO NOT DO THIS
        // set up your ca correctly to trust the connection
        rejectUnauthorized: false
      }
});

export { pool };