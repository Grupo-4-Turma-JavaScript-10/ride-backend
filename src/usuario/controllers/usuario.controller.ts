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
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../entities/usuario.entity';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('Usuario')
@Controller('/usuarios')
@ApiBearerAuth()
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/procurar/:usuario')
  @HttpCode(HttpStatus.OK)
  findByUser(@Param('usuario') usuario: string): Promise<Usuario | null> {
    return this.usuarioService.findByUser(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/all')
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Usuario[]> {
    return this.usuarioService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    return this.usuarioService.findById(id);
  }

  @Post('/cadastrar')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.create(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/atualizar')
  @HttpCode(HttpStatus.OK)
  update(@Body() usuario: Usuario): Promise<Usuario> {
    return this.usuarioService.update(usuario);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usuarioService.delete(id);
  }
}
