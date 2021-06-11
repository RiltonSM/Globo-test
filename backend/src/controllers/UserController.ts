import knex from '../database/connection';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

class UserController { 
    async index(request: Request, response: Response) {
        const users = await knex('users').select('*');

        return response.json(users);
    }

    async login(request: Request, response: Response) {
        const { email, senha } = request.body;
    
        const user = await knex('users').where('email', email).select('*');

        if(user.length < 1){
            return response.status(401).send()
        } else {

            bcrypt.compare(senha, user[0].senha, async (err, result) => {
                if(err){
                    return response.status(401).send()
                } else if(result) {
                    return response.json(user).send()
                } else {
                    return response.status(401).send();
                }
            });
        }

    }

    async create(request: Request, response: Response) {
        const { email, nivel_acesso, senha } = request.body;

        bcrypt.hash(senha, 10, async (errorBcrypt, hash) => {
            if(errorBcrypt){
                return response.status(500).send();
            }

            const verifyEmails = await knex('users').where('email', email).select('*');

            console.log(verifyEmails);

            if(verifyEmails.length === 0){
                const user = await knex('users').insert({
                    email,
                    nivel_acesso,
                    senha: hash
                });
    
                return response.json(user);
            } else {
                return response.status(409).send();
            }

        });
    }


    async update(request: Request, response: Response) {
        const { id } = request.params;
        const { email, nivel_acesso, senha } = request.body;

        if(senha){
            bcrypt.hash(senha, 10, async (errorBcrypt, hash) => {
                if(errorBcrypt){
                    return response.status(500).send();
                }
    
                const user = await knex('users').where('id', id).update({
                    email,
                    nivel_acesso,
                    senha: hash
                });
        
                return response.json(user);
            });
        } else {
            const user = await knex('users').where('id', id).update({
                email,
                nivel_acesso
            });
    
            return response.json(user);
        }
    }

    async remove(request: Request, response: Response) {
        const { id } = request.params;
        
        const user = await knex('users').where('id', id).delete();

        return response.json(user);
    }
}

export default UserController;