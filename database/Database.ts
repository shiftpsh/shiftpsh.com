import { Sequelize } from 'sequelize-typescript'
import db_config from '../db_config'
import MapEntry from './model/MapEntry'

const initDatabase = async () => {
  const sequelize = new Sequelize(db_config)

  sequelize.addModels([MapEntry])

  return await sequelize.sync()
}

export { initDatabase }
