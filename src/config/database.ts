import { createConnection, Connection } from 'typeorm'

const db = async (): Promise<Connection> => await createConnection()

export default db
