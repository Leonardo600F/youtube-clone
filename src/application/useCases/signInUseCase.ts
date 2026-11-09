import type { InterfaceUsersRepository } from "../../domain/repositories/InterfaceUsersRepository";

export class SignInUseCase {
    constructor(private usersRepository: InterfaceUsersRepository) { }

    async execute(
        email: string,
        password: string
    ): Promise<{ token: string }> {
        return this.usersRepository.signIn(email, password);
    }
}