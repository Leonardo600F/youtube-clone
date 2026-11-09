import type { InterfaceUsersRepository } from "../../domain/repositories/InterfaceUsersRepository";

export class CreateUserUseCase {
    constructor(private usersRepository: InterfaceUsersRepository) { }

    async execute(
        name: string,
        surname: string,
        email: string,
        nickname: string,
        password: string
    ): Promise<{ message: string }> {
        return this.usersRepository.createUser(
            name, surname, email, nickname, password
        );
    }
}