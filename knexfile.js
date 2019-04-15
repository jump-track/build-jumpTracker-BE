const localPg = {
  host: 'localhost',
  database: 'tracker',
  user: 'null',
  password: 'null'
}
const productDbConnection = process.env.DATABASE_URL || localPg;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/tracker.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    }
  },
  testing: {
    client: 'sqlite3',
    connection: {
      filename: './src/data/test.db3',
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      },
    }
  },
  production: {
    client: 'pg',
    connection: productDbConnection,
    migrations: {
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    }
  }
};