import type { InterfaceUsersRepository } from "../../domain/repositories/InterfaceUsersRepository";
import type { User } from "../../domain/entities/User";

export class GetUserUseCase {
    constructor(private usersRepository: InterfaceUsersRepository) { }

    async execute(token: string): Promise<User | null> {
        return this.usersRepository.getUser(token);
    }
}