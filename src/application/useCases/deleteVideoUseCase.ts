import type { InterfaceVideosRepository } from "../../domain/repositories/InterfaceVideosRepository";

export class DeleteVideosUseCase {
    constructor(private videosRepository: InterfaceVideosRepository) { }

    async execute(token: string, video_id: string): Promise<{ message: string }> {
        return this.videosRepository.deleteVideo(token, video_id);
    }
}