import {
  Column,
  CreatedAt,
  DataType,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt
} from 'sequelize-typescript'

@Table({
  tableName: 'MapEntry',
  charset: 'utf8mb4',
})
export default class MapEntry extends Model {
  @PrimaryKey
  @Column(DataType.STRING)
  public key!: string

  @Column(DataType.TEXT)
  public value!: string

  @CreatedAt
  public readonly createdAt!: Date

  @UpdatedAt
  public readonly updatedAt!: Date
}
