const msSQL = require("mssql/msnodesqlv8");

// Windows Authentication
/* var dbConfig = {
//     server: <server_name>,
//     port: <db_port>,
//     database: <db_name>,
//     driver: "msnodesqlv8",
//     options: {
//       trustedConnection: true
//     }
//   }
//   module.export = dbConfig */

const dbConfig = {
    server: 'DIIN-MAHERNANDE\\SQLDEV2016',
    port: 1433,
    database: 'Northwind',
    driver: "msnodesqlv8",
    options: {
      trustedConnection: true
    }
};

msSQL.connect(dbConfig)
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));





//module.export = dbConfig;

// SQL Server Authentication
/* var config = {
//     user: 'sa',
//     password: 'mypassword',
//     server: 'localhost', 
//     database: 'SchoolDB' 
// };*/
