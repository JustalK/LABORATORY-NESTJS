import { Injectable, NestMiddleware, LoggerService } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class Experience3Middleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
