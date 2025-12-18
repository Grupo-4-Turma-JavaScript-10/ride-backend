import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titulo: string;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
  preco: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  origem: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  destino: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  distanciaKm: number;

  @IsNotEmpty()
  @Column({ type: 'int', nullable: false })
  tempoMinutos: number;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  velocidadeMediaKmh: number;

  @Column({ default: true })
  ativo: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data: Date;

}
