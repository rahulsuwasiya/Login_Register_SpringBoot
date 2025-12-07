// common/index.js
import { AuthRepository } from "./repositories/AuthRepository.js";
import { UseCase } from "./usecases/useCases.js";

const authRepository = new AuthRepository();
export const useCaseInstance = new UseCase(authRepository);
