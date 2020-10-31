import {
  Controller,
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Items } from './../items';
import { Item } from './../item';
import { AuthGuard } from '@nestjs/passport';

@Controller('items')
export class ItemsController {
  constructor(private readonly ItemsService: ItemsService) {}

  @Get()
  async findAll(): Promise<Items> {
    return this.ItemsService.findAll();
  }

  @Get(':id')
  async find(@Param('id') id: number): Promise<Item> {
    return this.ItemsService.find(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  async create(@Body('item') item: Item): Promise<void> {
    this.ItemsService.create(item);
  }

  @UseGuards(AuthGuard('jwt'))
  @Put()
  async update(@Body('item') item: Item): Promise<void> {
    this.ItemsService.create(item);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  async delete(@Param('id') id: number): Promise<void> {
    this.ItemsService.delete(id);
  }
}
