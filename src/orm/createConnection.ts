import { getConnectionOptions, createConnection as ormCreateConnection, Connection } from "typeorm";

export async function createConnection(): Promise<Connection> {
    const options = await getConnectionOptions()
    return ormCreateConnection(options)
}