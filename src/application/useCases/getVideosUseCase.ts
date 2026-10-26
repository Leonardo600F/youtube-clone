import type { Video } from "../../domain/entities/Video";
import { VideosRepository } from "../../infrastructure/repositories/videosRepository";

export class GetVideosUseCase {
    constructor(private videosRepository: VideosRepository) { }

    async execute(
        token: string,
        user_id: string
    ): Promise<{ videos: Video[] }> {
        return this.videosRepository.getVideos(token, user_id);
    }
}