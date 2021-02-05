import { DataTypes, Sequelize } from 'sequelize'

const MapEntry = async (sequelize: Sequelize) => {
  const model = sequelize.define('MapEntry', {
    key: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    value: {
      type: DataTypes.STRING,
    },
  })
  await model.sync()
  return model
}

export default MapEntry
