const mssql = require('mssql/msnodesqlv8');

const conn = new mssql.ConnectionPool({
    server: 'localhost',
    // database: 'DEVCORP2',
    password: 'Sql2@19',
    driver: "msnodesqlv8",
    // server: 'SISTEMA-SSD\\SQLEXPRESS',
    database: 'DEVCORP2',
    user: 'sa',
    // password: '_43690'
})

module.exports = conn;