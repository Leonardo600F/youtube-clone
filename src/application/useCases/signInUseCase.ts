import { UsersRepository } from "../../infrastructure/repositories/usersRepository";
import type { SignInResponse } from "../../infrastructure/repositories/usersRepository";

export class SignInUseCase {
    constructor(private usersRepository: UsersRepository) { }

    async execute(
        email: string,
        password: string
    ): Promise<SignInResponse> {
        return this.usersRepository.signIn(email, password);
    }
}