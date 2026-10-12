import { VideosRepository } from "../../infrastructure/repositories/videosRepository";

export class CreateVideoUseCase {
    constructor(private videosRepository: VideosRepository) { }

    async execute(
        token: string,
        user_id: string,
        thumbnail: string,
        title: string,
        description: string,
        publishedAt: Date
    ) {
        return await this.videosRepository.createVideo(
            token,
            user_id,
            thumbnail,
            title,
            description,
            publishedAt
        );
    }
}