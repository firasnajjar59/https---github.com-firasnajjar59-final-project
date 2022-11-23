import Joi from "joi-browser"
const registerSchema={
    name: Joi.string().min(2).max(50).required().label("name"),
    email: Joi.string().email().min(6).max(1024).required().label("email"),
    password: Joi.string().min(6).max(20).required().label("password"),
    biz:Joi.label("biz")
}
export default registerSchema