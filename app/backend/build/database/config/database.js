"use strict";
require("dotenv/config");
const config = {
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    port: Number(process.env.PGPORT),
    dialect: 'postgres',
    define: {
        timestamps: true,
        underscored: true,
    },
};
module.exports = config;
//# sourceMappingURL=database.js.map