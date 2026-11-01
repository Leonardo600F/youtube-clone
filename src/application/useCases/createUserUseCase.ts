import { UsersRepository } from "../../infrastructure/repositories/usersRepository";
import type { CreateUserResponse } from "../../infrastructure/repositories/usersRepository";

export class CreateUserUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute(
        name: string,
        surname: string,
        email: string,
        nickname: string,
        password: string
    ): Promise<CreateUserResponse> {
        return this.usersRepository.createUser(
            name, surname, email, nickname, password
        );
    }
}