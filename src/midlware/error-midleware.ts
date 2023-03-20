import { ApiError } from "src/exceptions/api-error"

module.exports = function(err,req,resp,next){
    if(err instanceof ApiError){
      return resp.status(err.status).json({message: err.message, errors: err.error})
    }
    return resp.status(500).json({message: "Произошла неизветсная ошибка"})
}
