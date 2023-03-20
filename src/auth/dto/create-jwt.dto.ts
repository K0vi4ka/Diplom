export class JwtDto {
  readonly id: number;
  readonly email: string;

  constructor(id, email){
    this.id = id;
    this.email = email;
  }
}