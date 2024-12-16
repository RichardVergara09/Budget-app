import neon from '@neondatabase/serverless';

// fetch one transaction
export async function GET(request, {params}) {
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const id = Number(params.id);
    const response = await sql`SELECT * FROM transactions WHERE id = ${id};`;
    const transaction = response[0];

    if (!transaction) {
        return new Response(null, {status: 404});
    }

    return new Response(JSON.stringify(transaction), {status: 200});
}

// update all the information of a transaction
export async function PUT(request, {params}) {
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const requestData = await request.json();
    const response = await sql`
        UPDATE transactions
        SET description = ${requestData.description},
        amount = ${requestData.amount},
        date = ${requestData.date}
        WHERE id = ${params.id}
        RETURNING *;
    `;
    if (response.length === 0) {
        return new Response(null, {status: 404});
    }
    return new Response(null, {status: 204});
}

// delete a transaction
export async function DELETE(request, {params}) {
    const databaseURL = process.env.DATABASE_URL || "";
    const sql = neon(databaseURL);
    const response = await sql`
        DELETE FROM transactions
        WHERE id = ${params.id}
        RETURNING *;
    `;
    if (response.length === 0) {
        return new Response(null, {status: 404});
    }
    return new Response(null, {status: 204});
}
