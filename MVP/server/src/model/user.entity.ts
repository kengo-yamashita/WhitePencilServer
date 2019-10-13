import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

@Entity()
export class User {

    // 管理連番
    @PrimaryGeneratedColumn()
    id : number;

    // 作成日
    @CreateDateColumn()
    createAt: Date;

    // 編集日
    updateAt: Date;

    // バージョン
    version: number;

    // ユーザー名
    @Column()
    name : string;

    //  パスワード
    @Column()
    password : string;

}
