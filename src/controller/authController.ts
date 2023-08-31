import { Request, Response } from 'express';
import { successResponse, errorResponse, handleError } from '../utiles/response';
import { hashPassword, comparePassword } from '../utiles/hashPassWord';
import { generateToken } from '../utiles/jwt';
import { UsersEntity } from '../entities/UsersEntity';
import { getRepository } from 'typeorm';
import { createAccountSchema } from '../validator/authValidator';

export const createUser = async (req: Request, res: Response) => {
    try {
        const userRepository = getRepository(UsersEntity);

        const { error, value } = createAccountSchema.validate(req.body);

        if (error) {
                 return errorResponse(res, 400, error.details[0].message);
        }

        const { firstName, lastName, email, password } = value;

        const emailExist = await userRepository.findOne({
            where: email
        })

        if (emailExist) return errorResponse(res, 409, 'email already in use by another user');

         const hash = await hashPassword(password);

         const newUser = userRepository.create({
                 firstName,
                 lastName,
                 email,
                 password : hash
         });

         await userRepository.save(newUser);

         const responseUser = { ...newUser };
         delete responseUser.password;

         return successResponse(res, 201, 'Account created successfully',  responseUser);
    } catch (error) {
        handleError(error, req);
        return errorResponse(res, 500, 'Server error.');
    }
};
