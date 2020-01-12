import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id!: number

  @ManyToOne(type => User, user => user.id)
  user!: User

  @Column()
  imagePath!: string
}
