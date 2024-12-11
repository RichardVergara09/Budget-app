import { neon } from '@neondatabase/serverless';

export async function POST() {
    try {
        const databaseURL = process.env.DATABASE_URL || ""; // set a default value if DATABASE_URL is undefined
        const sql = neon(databaseURL);

        // postgres database
        // create a table for users containing id, email, name, age, and password
        const response = await sql 
            `CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(30), first_name VARCHAR(30), last_name VARCHAR(30), password VARCHAR(30));`;
        return Response.json({response}, {status: 200});
    }
    catch (error) {
        return Response.json({error}, {status: 500});
    }
}

// Delete users table
export async function DELETE() {
    try {
      const databaseUrl = process.env.DATABASE_URL || "";
      const sql = neon(databaseUrl);
      const result = await sql`DROP TABLE users;`;
      return Response.json({ result }, { status: 200 });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }