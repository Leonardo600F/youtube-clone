import { UsersRepository } from "../../infrastructure/repositories/usersRepository";
import { SignInUseCase } from "./signInUseCase";

const usersRepository = new UsersRepository();

export const signInUseCase = new SignInUseCase(usersRepository);