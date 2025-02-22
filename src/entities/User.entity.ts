import { BeforeInsert, Column, Entity, ManyToOne } from "typeorm";
import { CommonEntity } from './Common.entity';
import * as bcrypt from "bcrypt"
import { Gender } from "../enum/gender.enum"
import { Nationality } from '../enum/nationality.enum';
import { UserRole } from "src/enum/user-roles.enum";
import { PickupLocationEntity } from "./Pickup-Location.entity";

export type UserKey = keyof User; 

@Entity()
export class User extends CommonEntity {
    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column({
        type: "enum",
        enum: Gender,
        default: Gender.MAN
    })
    gender: Gender;

    @Column({ unique: true })
    fincode: string;

    @Column({ unique: true })
    serialNumber: string;

    @Column()
    adress: string;

    @Column()
    phonenumber: string;

    @Column({ type: 'date' })
    birthdate: Date;

    @Column({
        type: "enum",
        enum: Nationality,
        default: Nationality.AZERBAIJANI
    })
    nationality: Nationality;

    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;    

    @ManyToOne(() => PickupLocationEntity, (location) => location.users, { nullable: false })
    pickupLocation: PickupLocationEntity;

    @BeforeInsert()
    async beforeInsert() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}
