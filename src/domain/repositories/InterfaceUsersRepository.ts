import type { User } from "../entities/User";

export interface InterfaceUsersRepository {

    signIn(
        email: string,
        password: string
    ): Promise<{ token: string }>;

    createUser(
        name: string,
        surname: string,
        email: string,
        nickname: string,
        password: string
    ): Promise<{ message: string }>;

    getUser(token: string): Promise<User | null>;
}