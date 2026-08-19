const pool = require("./db");

async function testDatabase() {
    try {
        const [rows] = await pool.query("SELECT 1 AS test");
        console.log("Database connection successful:", rows);
    } catch (error) {
        console.error("Database connection failed:", error.message);
    } finally {
        await pool.end();
    }
}

testDatabase();