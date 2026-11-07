import api from "../../api";
import type { InterfaceUsersRepository } from "../../domain/repositories/InterfaceUsersRepository";
import type { User } from "../../domain/entities/User";

export interface SignInResponse { token: string; }

export interface CreateUserResponse { message: string; }

export class UsersRepository implements InterfaceUsersRepository {

    async signIn(
        email: string,
        password: string
    ): Promise<SignInResponse> {
        const response = await api.post<SignInResponse>(
            "/users/sign-in",
            { email, password }
        );
        return response.data;
    }

    async createUser(
        name: string,
        surname: string,
        email: string,
        nickname: string,
        password: string
    ): Promise<CreateUserResponse> {
        const response = await api.post<CreateUserResponse>('/users/sign-up', {
            name, surname, email, nickname, password
        });

        return response.data;
    }

    async getUser(token: string): Promise<User | null> {
        const response = await api.get<User>('/users/get-user', {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    }
}