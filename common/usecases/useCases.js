// common/usecases/useCases.js
export class UseCase {
  constructor(repository) {
    this.repository = repository;
  }

  async login(username, password) {
    if (!username || !password) throw new Error("Username and password are required");
    return this.repository.login(username, password);
  }

  async register(username, email, password) {
    if (!username || !email || !password) throw new Error("All fields are required");
    return this.repository.register(username, email, password);
  }
}
