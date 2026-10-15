import { UsersRepository } from "../../infrastructure/repositories/usersRepository";
import { VideosRepository } from "../../infrastructure/repositories/videosRepository";
import { CreateUserUseCase } from "./createUserUseCase";
import { SignInUseCase } from "./signInUseCase";
import { GetUserUseCase } from "./getUserUseCase";
import { GetVideosUseCase } from "./getVideosUseCase";
import { CreateVideoUseCase } from "./CreateVideoUseCase";
import { DeleteVideosUseCase } from "./deleteVideoUseCase";

const usersRepository = new UsersRepository();
const videosRepository = new VideosRepository();

export const signInUseCase = new SignInUseCase(usersRepository);
export const createUserUseCase = new CreateUserUseCase(usersRepository);
export const getUserUseCase = new GetUserUseCase(usersRepository);
export const getVideosUseCase = new GetVideosUseCase(videosRepository);
export const createVideoUseCase = new CreateVideoUseCase(videosRepository);
export const deleteVideoUseCase = new DeleteVideosUseCase(videosRepository);