import type { Video } from "../../domain/entities/Video";
import type { InterfaceVideosRepository } from "../../domain/repositories/InterfaceVideosRepository";

export class GetVideosUseCase {
    constructor(private videosRepository: InterfaceVideosRepository) { }

    async execute(
        token: string,
        user_id: string
    ): Promise<{ videos: Video[] }> {
        return this.videosRepository.getVideos(token, user_id);
    }
}