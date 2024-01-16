import { Roles } from "src/utility/common/user-role.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";

@Entity('users')
export class UserEntity {
@PrimaryGeneratedColumn()
id:Number
@Column()
name:string
@Column()
email:string
@Column({select:false})
password:string
@Column({type:'enum',enum:Roles,array:true,default:[Roles.USER]})
roles:Roles[]
//create and update date
@CreateDateColumn()
createdAt:Timestamp;
@UpdateDateColumn()
updatedAt:Timestamp
}
