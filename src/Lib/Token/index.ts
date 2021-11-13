class Token {
  public static getToken(): string | null {
    return localStorage.getItem("access_token");
  }
}

export default Token;
