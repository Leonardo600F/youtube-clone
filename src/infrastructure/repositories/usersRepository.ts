import api from "../../api";

export interface User {
    user_id: string;
    name: string;
    surname: string;
    email: string;
    nickname: string;
}

export interface SignInResponse { token: string; }

export class UsersRepository {

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

    async createUser(name: string, surname: string, email: string, nickname: string, password: string) {
        const response = await api.post('/users/sign-up', {
            name, surname, email, nickname, password
        });

        return response.data;
    }

    async getUser(token: string): Promise<User> {
        const response = await api.get<User>('/users/get-user', {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    }
}