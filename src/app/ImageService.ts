import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class ImageService{
  private ApiUrl = "https://pixabay.com/api/" ;
  private ApiToken= "42939100-b758f03715ea5859162b18dce" ;

  constructor(private http:HttpClient) {
  }

  getImages(query: string): Observable<any> {
    const url = `${this.ApiUrl}?key=${this.ApiToken}&q=${encodeURIComponent(query)}`;
    return this.http.get(url);
  }

}
