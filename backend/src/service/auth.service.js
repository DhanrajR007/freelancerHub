import { findUserbyEmail } from "../dao/auth.dao.js"
import { BadRequestError } from "../utils/errorHandler.js"
import { comparePassword } from "../utils/helper.js"

export const loginService = ( email , password)=>{
 const isUserExist = findUserbyEmail(email)
 if(!isUserExist){
    throw new BadRequestError("invalid credentials")
 }
 try{
   const isValidPassword = comparePassword(password,isUserExist.password)
   if(!isValidPassword){
    throw new BadRequestError("invalid credentials")
   }
   return isUserExist
 }
 catch(err){}
}