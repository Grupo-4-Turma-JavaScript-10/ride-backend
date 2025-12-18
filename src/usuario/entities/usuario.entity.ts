import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { Produto } from '../../produto/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_usuarios' })
export class Usuario {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  nome: string;

  @IsEmail()
  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty({example: "email@email.com.br"})
  usuario: string;

  @MinLength(8)
  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  senha: string;

  @Column({ length: 5000 })
  @ApiProperty()
  foto: string;

  @MaxLength(1)
  @IsNotEmpty()
  @Column({ length: 1, nullable: false })
  @ApiProperty()
  sexo: string;

  @CreateDateColumn()
  @ApiProperty()
  data: Date;

  @ApiProperty()
  @OneToMany(() => Produto, (produto) => produto.usuario)
  produto: Produto[];
}
