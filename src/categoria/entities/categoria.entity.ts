import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Produto } from '../../produto/entities/produto.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_categoria' })
export class Categoria {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  carro: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  fabricante: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  modelo: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', nullable: false })
  @ApiProperty()
  ano: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  cor: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  @ApiProperty()
  placa: string;

  @ApiProperty({type: () => [Produto]})
  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[];
}
