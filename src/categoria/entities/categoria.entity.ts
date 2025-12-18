import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Produto } from '../../produto/entities/produto.entity';

@Entity({ name: 'tb_categoria' })
export class Categoria {
  @IsNotEmpty()
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  carro: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  fabricante: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  modelo: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', nullable: false })
  ano: number;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  cor: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  placa: string;

  @OneToMany(() => Produto, (produto) => produto.categoria)
  produto: Produto[];
}
