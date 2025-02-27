import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  // API url
  //https://www.file.io/
  baseApiUrl = "https://file.io";
    
  constructor(private http:HttpClient) { }
  
  // Returns an observable
  upload<T>(file: File):Observable<T> {
  
      // Create form data
      const formData = new FormData(); 
        
      // Store form name as "file" with file data
      formData.append("file", file, file.name);
        
      // Make http post request over api
      // with formData as req
      return this.http.post<T>(this.baseApiUrl, formData);
  }

}
