
const queries = {
    drop_user_table: 'DROP TABLE IF EXISTS users',
    create_user_table: `
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(60) NOT NULL,
            last VARCHAR(60) NOT NULL,
            balance REAL DEFAULT 0
        )`,

    insert_user: 'INSERT INTO users (name, last, balance) VALUES (?, ?, ?);',


    create_client_table: `
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) NOT NULL,
            last VARCHAR(100) NOT NULL,
            cpf VARCHAR(14) UNIQUE NOT NULL,
            birthDay VARCHAR(16) NOT NULL,
            city VARCHAR(100),
            neighborhood VARCHAR(100),
            street VARCHAR(100),
            homeNumber VARCHAR(10),
            email VARCHAR(150) UNIQUE,
            phoneNumber VARCHAR(20)
        )`,

    insert_client: 'INSERT INTO clients (name,last,cpf,birthDay,city,neighborhood,street,homeNumber,email,phoneNumber) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',

    create_loan_table: `
        CREATE TABLE IF NOT EXISTS loans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_id INTEGER NOT NULL,
            value REAL NOT NULL,
            firstInstallmentDate TEXT NOT NULL,
            percentual REAL NOT NULL,
            installmentsCount INTEGER NOT NULL
        )`,

    insert_loan: 'INSERT INTO loans (client_id, value, firstInstallmentDate, percentual, installmentsCount) VALUES (?, ?, ?, ?, ?)',

};

export default queries;
