module.exports = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    database: "identity",
    synchronize: true,
    logging: false,
    entities: [
       "src/orm/entities/*.ts"
    ],
    bigNumberStrings: true
 }
 