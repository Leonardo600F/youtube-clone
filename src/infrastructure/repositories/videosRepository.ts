import axios from "axios";
import api from "../../api";
import { AppError } from "../../domain/errors/AppError";
import type { Video } from "../../domain/entities/Video";
import type { InterfaceVideosRepository } from "../../domain/repositories/InterfaceVideosRepository";

export interface CreateVideoResponse { message: string; }

export interface DeleteVideoResponse { message: string; }

export class VideosRepository implements InterfaceVideosRepository {
    async getVideos(
        token: string,
        user_id: string
    ): Promise<{ videos: Video[] }> {
        try {
            const response = await api.get<{ videos: Video[] }>(
                `/videos/get-videos?user_id=${user_id}`,
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );

            return response.data;

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const message =
                    error.response?.data?.error ||
                    "Não foi possível buscar os vídeos.";

                const statusCode = error.response?.status;

                throw new AppError(message, statusCode);
            }

            throw error;
        }
    }

    async createVideo(
        token: string,
        user_id: string,
        thumbnail: string,
        title: string,
        description: string,
        publishedAt: Date
    ): Promise<CreateVideoResponse> {
        try {
            const response = await api.post<CreateVideoResponse>(
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

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const message =
                    error.response?.data?.error ||
                    "Não foi possível criar o vídeo.";

                const statusCode = error.response?.status;

                throw new AppError(message, statusCode);
            }

            throw error;
        }
    }

    async deleteVideo(
        token: string,
        video_id: string
    ): Promise<DeleteVideoResponse> {
        try {
            const response = await api.delete<DeleteVideoResponse>(
                `/videos/delete-video/${video_id}`,
                { headers: { Authorization: `Bearer ${token}` } }
            );

            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const message =
                    error.response?.data?.error || "Não foi possível excluir o vídeo.";

                const statusCode = error.response?.status;

                throw new AppError(message, statusCode);
            }
            throw error;
        }
    }
}