/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CategoriaService } from '../services/categoria.service';
import { Categoria } from '../entities/categoria.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Categoria')
@UseGuards(JwtAuthGuard)
@Controller('/categorias')
@ApiBearerAuth()
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get('/meuscarros')
  @UseGuards(AuthGuard('jwt'))
  findMinhas(@Request() req) {
    return this.categoriaService.findByUsuario(req.user.sub);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get('/categoria/:categoriaId')
  @HttpCode(HttpStatus.OK)
  findByCategoria(@Param('categoriaId', ParseIntPipe) categoriaId: number) {
    return this.categoriaService.findByCategoria(categoriaId);
  }

  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
    return this.categoriaService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() categoria: Categoria, @Request() req): Promise<Categoria> {
    categoria.usuario = { id: req.user.sub } as any;

    return this.categoriaService.create(categoria);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  update(@Body() categoria: Categoria): Promise<Categoria> {
    return this.categoriaService.update(categoria);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.categoriaService.delete(id);
  }
}
