import { HttpClient } from "@angular/common/http";
import { OracleResponse } from "./response";
import { map } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RestHelperService {
    constructor(
        private http: HttpClient
    ) { }

    public get<T>(request: string) {
        return this.handleResponse<T>(this.http.get<OracleResponse<T>>(request))
    }

    public post<T>(request: string, body: T) {
        return this.handleResponse(this.http.post<OracleResponse<T>>(request, body))
    }

    private handleResponse<T>(requestCallBack: Observable<OracleResponse<T>>): Observable<T[] | undefined> {
        return requestCallBack.pipe(
            map((response: OracleResponse<T>) => response.items)
        );
    }
}