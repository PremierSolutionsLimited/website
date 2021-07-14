import Cookies from "js-cookie";

class Registration {
  getCipher(): string | null {
    return Cookies.get("had-registration") || null;
  }

  setCipher(token: string): void {
    Cookies.set("had-registration", token, { expires: 1 });
  }

  clearCipher(): void {
    Cookies.remove("had-registration");
  }
}

export default new Registration();
