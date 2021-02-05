import { Sequelize } from 'sequelize'

const dbInstance = async () => {
  if (process.env.DB_NAME === undefined) return
  if (process.env.DB_ENDPOINT === undefined) return
  if (process.env.DB_USERNAME === undefined) return
  if (process.env.DB_PASSWORD === undefined) return
  if (process.env.DB_DIALECT === undefined) return

  const sequelize =
    process.env.DB_DIALECT === 'sqlite'
      ? new Sequelize({
          dialect: 'sqlite',
          storage: 'db.sqlite',
        })
      : new Sequelize(
          process.env.DB_NAME,
          process.env.DB_USERNAME,
          process.env.DB_PASSWORD,
          {
            host: process.env.DB_ENDPOINT,
            dialect: process.env.DB_DIALECT as
              | 'mysql'
              | 'postgres'
              | 'sqlite'
              | 'mariadb'
              | 'mssql',
          }
        )
  await sequelize.authenticate()

  return sequelize
}

export { dbInstance }
