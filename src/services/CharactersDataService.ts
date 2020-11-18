import http from "../http-common";

class CharactersDataService {
  getAll() {
    return http.get("/character");
  }

  get(id: number) {
    return http.get(`/character/${id}`);
  }

  getCharactersByName(name: string) {
    return http.get("/character/", {
      params: {
        name: name,
      },
    });
  }
}

export default new CharactersDataService();
