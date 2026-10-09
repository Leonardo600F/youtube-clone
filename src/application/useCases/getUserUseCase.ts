import { UsersRepository } from "../../infrastructure/repositories/usersRepository";

export class GetUserUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute(token: string) { return await this.usersRepository.getUser(token); }
}