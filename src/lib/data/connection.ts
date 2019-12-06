import { getConnectionOptions, createConnection as ormCreateConnection, Connection } from "typeorm";

let conn: Connection;

export async function createConnection(): Promise<Connection> {
    const options = await getConnectionOptions()
    console.log(options);
    
    conn = await ormCreateConnection(options)
    return conn
}

export async function stopConnection(): Promise<void> {
    if (conn) {
        await conn.close()
    }
}