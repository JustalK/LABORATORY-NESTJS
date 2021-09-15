import { Controller, Get, UseGuards, SetMetadata } from '@nestjs/common'
import { Experience6Service } from './experience6.service'
import { RolesGuard } from './guards/experience6.guard'

export const Roles = (...roles: string[]) => SetMetadata('roles', roles);

@Controller('experience6')
@UseGuards(RolesGuard)
export class Experience6Controller {
  constructor(private readonly experience6Service: Experience6Service) {}

  @Get('admin')
  @Roles('admin')
  guarded() {
    // Doest work since I dont know how to make an authorization ey on Nest.js
    return this.experience6Service.guarded();
  }

  @Get()
  unguarded() {
    return this.experience6Service.guarded();
  }
}
