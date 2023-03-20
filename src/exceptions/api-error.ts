import { HttpStatus } from "@nestjs/common";


export class ApiError extends Error {
  status: number;
  error;

  constructor(status, message, error = []){
    super(message)
    this.status = status;
    this.error = error
  }

  static UnautorizedError(){
    return new ApiError(401,'Пользователь не найден', )
  }

  static BadRequst(message,error = []){
    return new ApiError(HttpStatus.BAD_REQUEST,message,error)
  }

  static Forbidden(message,error = []){
    return new ApiError(HttpStatus.FORBIDDEN,message,error)
  }
}