
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

    drop_client_table: 'DROP TABLE IF EXISTS clients',
    create_client_table: `
        CREATE TABLE IF NOT EXISTS clients (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) NOT NULL,
            last VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE,
            phoneNumber VARCHAR(20) UNIQUE,
            sendEmails VARCHAR(2)
        )`,

    insert_client: 'INSERT INTO clients (name,last,email,phoneNumber,sendEmails) VALUES (?, ?, ?, ?, ?)',
    update_client: 'UPDATE clients SET name = ?, last = ?, email = ?, phoneNumber = ?, sendEmails = ? WHERE id = ?',

    drop_loan_table: 'DROP TABLE IF EXISTS loans',
    create_loan_table: `
        CREATE TABLE IF NOT EXISTS loans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            client_id INTEGER NOT NULL,
            value REAL NOT NULL,
            date TEXT NOT NULL,
            percentual REAL NOT NULL,
            loans INTEGER NOT NULL,
            loansPrices REAL NOT NULL
        )`,
    insert_loan: 'INSERT INTO loans (client_id, value, date, percentual, loans, loansPrices) VALUES (?, ?, ?, ?, ?, ?)',

    create_installment_table: `
        CREATE TABLE IF NOT EXISTS  installments (
            id INTEGER PRIMARY KEY,
            loanId INTEGER NOT NULL,
            partNum INTEGER NOT NULL,
            value REAL NOT NULL,
            status TEXT NOT NULL,
            dueDate TEXT NOT NULL
        )`,

    insert_installment: 'INSERT INTO Installments (loanId, partNum, value, status, dueDate) VALUES (?, ?, ?, ?, ?)',
};

export default queries;
