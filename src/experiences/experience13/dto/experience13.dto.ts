import { Exclude, Expose, Transform } from 'class-transformer';

export class Experience13Dto {
  id: number;

  @Transform(({ value }) => value[0])
  firstName: string;

  lastName: string;

  @Exclude()
  password: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(partial: Partial<Experience13Dto>) {
    Object.assign(this, partial);
  }
}
