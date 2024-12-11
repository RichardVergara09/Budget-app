import { neon } from '@neondatabase/serverless';

// fetch list of users
export async function GET() {
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const response = await sql`SELECT * FROM users;`;
    return new Response(JSON.stringify(response), {status: 200});
}

// create a new user
export async function POST(request) {
    const requestData = await request.json();
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const response = await sql`
        INSERT INTO users (email, first_name, last_name, password)
        VALUES (${requestData.email}, ${requestData.first_name}, ${requestData.last_name}, ${requestData.password})
        RETURNING *;
    `;
    // RETURNING *; returns the newly created
    return new Response(JSON.stringify(response), {status: 201});
}

// delete all users
export async function DELETE() {
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const response = await sql`DELETE FROM users;`;
    return new Response(JSON.stringify(response), {status: 200});
}