import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { User, File } from 'App/Models'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public description: string
  @column()
  public userId: string

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @hasOne(() => File, {
    foreignKey: 'owerId',
    onQuery: (query) => query.where('fileCategory', 'post'),
  })
  public media: HasOne<typeof File>
}
