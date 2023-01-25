import { Injectable } from '@angular/core';

/* use those apis to get user geolocations and nationality all apis accept get request
https://backofficeapi.khaleejgate.com/api/GetAllCountriesByLangName?LangCode=en
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
export class MyApisService {

  constructor() { }
}
