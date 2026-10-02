import { UsersRepository } from "../../infrastructure/repositories/usersRepository";

export class SignInUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute(email: string, password: string) { return await this.usersRepository.signIn(email, password); }
}