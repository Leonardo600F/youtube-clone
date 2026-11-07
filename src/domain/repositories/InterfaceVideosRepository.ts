import type { Video } from "../entities/Video";

export interface InterfaceVideosRepository {
    getVideos(
        token: string,
        user_id: string
    ): Promise<{ videos: Video[] }>;

    createVideo(
        token: string,
        user_id: string,
        thumbnail: string,
        title: string,
        description: string,
        publishedAt: Date
    ): Promise<{ message: string }>;

    deleteVideo(
        token: string,
        video_id: string
    ): Promise<{ message: string }>;
}