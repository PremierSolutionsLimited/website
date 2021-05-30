import Cookies from "js-cookie";

export const BASE_URL =
  process.env.REACT_APP_SERVER_URL ||
  "https://fibonacci-mlm-engine.herokuapp.com/graphql";

class Auth {
  getCipher(): string | null {
    return Cookies.get("had-cipher") || null;
  }

  setCipher(token: string): void {
    Cookies.set("had-cipher", token);
  }

  clearCipher(): void {
    Cookies.remove("had-cipher");
  }
}

export default new Auth();
