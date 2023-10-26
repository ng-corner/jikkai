import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class Top100HttpService {
  constructor(private httpClient: HttpClient) { }

  getAnime(page: number) {
    return this.httpClient.get(`top/anime?page=${page + 1}`);
  }
}
