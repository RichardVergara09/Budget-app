import { neon } from "@neondatabase/serverless";

// fetch list of users
export async function GET(request, { params }) {
    const databaseUrl = process.env.DATABASE_URL || "";
    const sql = neon(databaseUrl);
  
    const id = Number(params.id);
    const response = await sql`SELECT * FROM users WHERE id = ${id};`;
    const user = response[0];
  
    if (!user) {
      return new Response(null, { status: 404 });
    }
  
    return new Response(JSON.stringify(user), { status: 200 });
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

// delete user // works?
export async function DELETE(request,{ params }) {
    const databaseUrl = process.env.DATABASE_URL || "";
    const sql = neon(databaseUrl);
    const response =
      await sql`DELETE FROM users WHERE id = ${params.id} RETURNING *;`;
  
    if (response.length === 0) {
      return new Response(null, { status: 404 });
    }
  
    return new Response(null, { status: 204 });
  }

  // update all the information of a user
export async function PUT(request, { params }) {
    const databaseUrl = process.env.DATABASE_URL || "";
    const sql = neon(databaseUrl);
    const requestData = await request.json();
  
    const response =
      await sql`UPDATE users SET email = ${requestData.email}, first_name = ${requestData.first_name}, last_name = ${requestData.last_name}, password = ${requestData.password} WHERE id = ${params.id} RETURNING *;`;
  
    if (response.length === 0) {
      return new Response(null, { status: 404 });
    }
  
    return new Response(null, { status: 204 });
  }