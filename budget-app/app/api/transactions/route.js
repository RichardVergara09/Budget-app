import {neon} from '@neondatabase/serverless';

// fetch list of transactions
export async function GET() {
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const response = await sql`SELECT id, description, amount, TO_CHAR(date, 'DD-MM-YY') as date FROM transactions ORDER BY date;`;
    return new Response(JSON.stringify(response), {status: 200});
}

// create a new transaction
export async function POST(request) {
    const requestData = await request.json();
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const response = await sql`
        INSERT INTO transactions
        (description, amount, date) VALUES (${requestData.description}, ${requestData.amount}, ${requestData.date})
        RETURNING *;`;
    return new Response(JSON.stringify(response), {status: 201});
}

// delete all transactions
export async function DELETE() {
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const response = await sql`
        DELETE FROM transactions;`;

    return new Response(null, {status: 204});
}