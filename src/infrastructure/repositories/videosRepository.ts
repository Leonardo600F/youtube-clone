import api from "../../api";

export class VideosRepository {
    async getVideos(token: string, user_id: string) {
        const response = await api.get(`/videos/get-videos?user_id=${user_id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    }
}