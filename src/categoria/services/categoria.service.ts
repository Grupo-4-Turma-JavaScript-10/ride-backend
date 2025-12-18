import { promises } from "dns";
import { Categoria } from "../entities/categoria.entity";
import { DeleteResult, Repository } from "typeorm";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class CategoriaService {
constructor(
  @InjectRepository(Categoria)
  private readonly categoriaRepository: Repository<Categoria>
){}

async findById(id: number): Promise<Categoria> {
        const categoria = await this.categoriaRepository.findOne({
            where: { 
            id 
        }
        });

        if (!categoria)
            throw new HttpException('Veiculo não encontrado!', HttpStatus.NOT_FOUND);

        return categoria;
    }

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find();
    }

    async findByCategoria(categoriaId: number): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
        });
    }

    async create(categoria: Categoria): Promise<Categoria> {
        const newCategoria = this.categoriaRepository.create(categoria);
        return await this.categoriaRepository.save(newCategoria); }

    async update(categoria: Categoria): Promise<Categoria> {
    await this.findById(categoria.id);
    return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.categoriaRepository.delete(id);
    }

















/*  
  // Método para criar (cadastrar) um veículo
  async executeCreate({ fabricante, modelo, ano, cor, placa } promises: Categoria) {
    
    // 1. Validação básica: verificar se todos os campos foram enviados
    if (!fabricante || !modelo || !ano || !cor || !placa) {
      throw new Error("Todos os campos (fabricante, modelo, ano, cor, placa) são obrigatórios.");
    }

    // 2. Regra de Negócio: Exemplo de validação de placa (formato simples)
    if (placa.length < 7) {
      throw new Error("A placa informada é inválida.");
    }

    // 3. Regra de Negócio: Limite de idade do veículo para o app de carona
    const currentYear = new Date().getFullYear();
    if (currentYear - ano > 15) {
      throw new Error("O veículo não pode ter mais de 15 anos de uso.");
    }

    const novoVeiculo = {
      id: Math.random().toString(36).substr(2, 9), // Simulação de ID
      fabricante,
      modelo,
      ano,
      cor,
      placa: placa.toUpperCase(),
      createdAt: new Date()
    };

    return novoVeiculo;
  }

  // Método para listar categorias/veículos
  async listAll() {
    // Aqui você buscaria no banco de dados
    return []; 

  }
    */
}