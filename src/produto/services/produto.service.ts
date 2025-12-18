import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from '../entities/produto.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  async findById(id: number): Promise<Produto> {
    const produto = await this.produtoRepository.findOne({
      where: { id },
    });

    if (!produto) {
      throw new HttpException('Produto não encontrado!', HttpStatus.NOT_FOUND);
    }

    return produto;
  }

  async create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async update(produto: Produto): Promise<Produto> {
    await this.findById(produto.id);

    return this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<DeleteResult> {
    await this.findById(id);
    return await this.produtoRepository.delete(id);
  }

  async calcularTempo(id: number): Promise<number> {
    const viagem = await this.findById(id);
    const tempo = viagem.distanciaKm / viagem.velocidadeMediaKmh;
    const minutos = tempo * 60;

    return minutos;
  }

  async mudarTipoViagem(id: number): Promise<boolean> {
    const viagem = await this.findById(id);

    viagem.motoristaMesmoGenero = !viagem.motoristaMesmoGenero;

    await this.produtoRepository.save(viagem);

    return viagem.motoristaMesmoGenero;
  }
}
