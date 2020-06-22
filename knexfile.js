module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/data.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
  },

  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      },
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  // this is jackson, I figured we can use the production env,
  // even though the heroku deployment is named signlingo-staging
  // so I commented out the staging environment and am going straight to
  // production, it seemed appropriate in the scope of our app.. ? 
  
  // staging: {
  //   client: "pg",
  //   connection: process.env.HEROKU_POSTGRESQL_RED_URL,
  //   migrations: {
  //     directory: "./data/migrations",
  //   },
  //   seeds: {
  //     directory: "./data/seeds",
  //   },
  // },

  production: {
    client: "pg",
    connection: process.env.HEROKU_POSTGRESQL_RED_URL,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
};
