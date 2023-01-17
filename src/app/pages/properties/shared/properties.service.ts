import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Property } from '../shared/property.model'


@Injectable({
    providedIn:'root'
})

export class PropertiesService{


    constructor(private http:HttpClient){

    }

    public listAll():Observable<Property[]>{

        const url = `${environment.baseUrlBackend}/properties`

        return this.http.get(url).pipe(
            map(this.mapToProperties)
        )

    }

    public listById(id:number): Observable<Property>{

        const url = `${environment.baseUrlBackend}/properties/${id}`

        return this.http.get(url).pipe(
            map(this.mapToProperty)
        )

    }



    public saveNew(newProperty:Property):Observable<Property>{
        
        const url = `${environment.baseUrlBackend}/properties`

        return this.http.post(url, newProperty).pipe(
            map(this.mapToProperty)
        )
    }


    public update(property:Property):Observable<Property>{
        
        const url = `${environment.baseUrlBackend}/properties/${property.id}`

        return this.http.put(url, property).pipe(
            map(this.mapToProperty)
        )
    }


    public delete(propertyId:number):Observable<any>{

        const url = `${environment.baseUrlBackend}/properties/${propertyId}`
        return this.http.delete(url, {responseType:'json'})
    }



    private mapToProperties(data:any):Array<Property>{
        const listProperties: Property[] = [];

        data.forEach((e:any) => listProperties.push(Object.assign(new Property, e)))

        return listProperties;
    }


    private mapToProperty(data:any):Property{
        

        return (Object.assign(new Property, data))

    }

}