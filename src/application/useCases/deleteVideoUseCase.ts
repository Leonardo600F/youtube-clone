import { VideosRepository } from "../../infrastructure/repositories/videosRepository";

export class DeleteVideosUseCase {
    constructor(private videosRepository: VideosRepository) { }

    async execute(token: string, video_id: string) {
        return await this.videosRepository.deleteVideo(token, video_id);
    }
}