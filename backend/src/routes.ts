import express from 'express';
import { celebrate, Joi } from 'celebrate';

import UserController from './controllers/UserController';

const routes = express.Router();

const userController = new UserController();

routes.post('/login', 
    userController.login, 
    celebrate({
        body: Joi.object().keys({
            email: Joi.string().required(),
            senha: Joi.string().required(),
        })
    })
);

routes.get(
    '/users', 
    userController.index,   
);
routes.post(
    '/user/add', 
    userController.create,
    celebrate({
        body: Joi.object().keys({
            email: Joi.string().required(),
            nivel_acesso: Joi.string().required(),
            senha: Joi.string().required(),
        })
    })
);
routes.put(
    '/user/update/:id', 
    userController.update,
    celebrate({
        params: Joi.object().keys({
            id: Joi.string().required
        })
    })    
);
routes.delete(
    '/user/remove/:id', 
    userController.remove,
    celebrate({
        params: Joi.object().keys({
            id: Joi.string().required
        })
    })
)

export default routes;