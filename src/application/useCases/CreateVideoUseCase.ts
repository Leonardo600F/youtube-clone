import type { InterfaceVideosRepository } from "../../domain/repositories/InterfaceVideosRepository";

export class CreateVideoUseCase {
    constructor(private videosRepository: InterfaceVideosRepository) { }

    async execute(
        token: string,
        user_id: string,
        thumbnail: string,
        title: string,
        description: string,
        publishedAt: Date
    ): Promise<{ message: string }> {
        return this.videosRepository.createVideo(
            token,
            user_id,
            thumbnail,
            title,
            description,
            publishedAt
        );
    }
}