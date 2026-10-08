import { UsersRepository } from "../../infrastructure/repositories/usersRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { SignInUseCase } from "./signInUseCase";

const usersRepository = new UsersRepository();

export const signInUseCase = new SignInUseCase(usersRepository);
export const createUserUseCase = new CreateUserUseCase(usersRepository);