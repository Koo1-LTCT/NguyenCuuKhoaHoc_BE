class AuthService {
  async signIn(): Promise<void> {}

  async signUp(): Promise<void> {}

  async signOut(): Promise<void> {}
}

const authService = new AuthService();

export default authService;
