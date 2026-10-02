import api from "../../api";

export class UsersRepository {
    async signIn(email: string, password: string) {
        const response = await api.post("/users/sign-in", { email, password });

        return response.data;
    }
}