import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../../usuario/entities/usuario.entity';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'tb_produtos' })
export class Produto {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  titulo: string;

  @IsNotEmpty()
  @Column({ length: 500, nullable: false })
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
  @ApiProperty()
  preco: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  origem: string;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  @ApiProperty()
  destino: string;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 6, scale: 2, nullable: false })
  @ApiProperty()
  distanciaKm: number;

  @IsNotEmpty()
  @Column({ type: 'int', nullable: false })
  @ApiProperty()
  tempoMinutos: number;

  @IsNotEmpty()
  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: false })
  @ApiProperty()
  velocidadeMediaKmh: number;

  @Column({ default: true })
  @ApiProperty()
  ativo: boolean;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  @ApiProperty()
  data: Date;

  @Column()
  @ApiProperty()
  motoristaMesmoGenero: boolean;

  @ApiProperty({type: () => Categoria})
  @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
  categoria: Categoria;

  @ApiProperty()
  @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
    onDelete: 'CASCADE',
  })
  usuario: Usuario;
}
