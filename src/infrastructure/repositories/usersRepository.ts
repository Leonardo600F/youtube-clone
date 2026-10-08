import api from "../../api";

export class UsersRepository {
    async signIn(email: string, password: string) {
        const response = await api.post("/users/sign-in", { email, password });

        return response.data;
    }

    async createUser(name: string, surname: string, email: string, nickname: string, password: string) {
        const response = await api.post('/users/sign-up', {
            name, surname, email, nickname, password
        });

        return response.data;
    }
}