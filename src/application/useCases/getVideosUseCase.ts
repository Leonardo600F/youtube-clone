import { VideosRepository } from "../../infrastructure/repositories/videosRepository";

export class GetVideosUseCase {
    constructor(private videosRepository: VideosRepository) { }

    async execute(token: string, user_id: string) {
        return await this.videosRepository.getVideos(token, user_id);
    }
}