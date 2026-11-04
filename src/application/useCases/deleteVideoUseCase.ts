import { VideosRepository } from "../../infrastructure/repositories/videosRepository";
import type { DeleteVideoResponse } from "../../infrastructure/repositories/videosRepository";

export class DeleteVideosUseCase {
    constructor(private videosRepository: VideosRepository) { }

    async execute(token: string, video_id: string): Promise<DeleteVideoResponse> {
        return this.videosRepository.deleteVideo(token, video_id);
    }
}