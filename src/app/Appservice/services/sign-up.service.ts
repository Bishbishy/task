import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { CountryModel } from '../models/country-model';
import { GeolocationModel } from '../models/geolocation';
import { IpAddressModel } from '../models/ip-address';
/* use those apis to get user geolocations and nationality all apis accept get request
https://backofficeapi.online-tkt.com/api/GetAllCountriesByLangName?LangCode=en
returns all countries with country codes
*********
https://api.ipify.org/?format=json
returns users ip adress
*********
use ip adress to get user geo location and country
https://ipapi.co/${ip-adress}/json/
*/

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http: HttpClient
  ) { }

  getAllCountries(): Observable<CountryModel[]> {
    return this.http.get<CountryModel[]>('https://backofficeapi.khaleejgate.com/api/GetAllCountriesByLangName?LangCode=en')
  }

  getIpAdress(): Observable<IpAddressModel> {
    return this.http.get<IpAddressModel>('https://api.ipify.org/?format=json')
  }

  getGeoLocation(ipAdress: any): Observable<GeolocationModel> {
    return this.http.get<GeolocationModel>(`https://ipapi.co/${ipAdress}/json/`)
  }

}
