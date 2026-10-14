import api from "../../api";

export class VideosRepository {
    async getVideos(token: string, user_id: string) {
        const response = await api.get(`/videos/get-videos?user_id=${user_id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });

        return response.data;
    }

    async createVideo(
        token: string,
        user_id: string,
        thumbnail: string,
        title: string,
        description: string,
        publishedAt: Date
    ) {
        const response = await api.post(
            '/videos/create-video',
            { user_id, thumbnail, title, description, publishedAt },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data;
    }

    async deleteVideo(token: string, video_id: string) {
        const response = await api.delete(
            `/videos/delete-video/${video_id}`,
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        );
        return response.data;
    }
}