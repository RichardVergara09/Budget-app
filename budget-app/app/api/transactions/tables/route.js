import { neon } from '@neondatabase/serverless';

export async function POST() {
    try {
        const databaseURL = process.env.DATABASE_URL || "";
        const sql = neon(databaseURL);
        const response = await sql 
            `CREATE TABLE transactions (id SERIAL PRIMARY KEY, description VARCHAR(20), amount DECIMAL(5,2), date DATE);`;
        return Response.json({response}, {status: 200});
    }
    catch (error) {
        return Response.json({error}, {status: 500});
    }
}

export async function DELETE() {
    try {
      const databaseUrl = process.env.DATABASE_URL || "";
      const sql = neon(databaseUrl);
      const result = await sql`DROP TABLE transactions;`;
      return Response.json({ result }, { status: 200 });
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  }


  