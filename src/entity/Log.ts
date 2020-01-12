import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'
import { Image } from './Image'

@Entity()
export class Log {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(type => User, user => user.id)
  user!: User

  @ManyToOne(type => Image, image => image.id)
  image!: Image

  @Column()
  ipAddress!: string
}
