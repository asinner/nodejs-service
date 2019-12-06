module.exports = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "dbname",
    synchronize: true,
    logging: false,
    entities: [
       "src/lib/entities/*.ts"
    ],
    bigNumberStrings: true
 }
 