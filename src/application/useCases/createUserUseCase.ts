import { UsersRepository } from "../../infrastructure/repositories/usersRepository";

export class CreateUserUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute(name: string, surname: string, email: string, nickname: string, password: string) {
        return await this.usersRepository.createUser(name, surname, email, nickname, password);
    }
}