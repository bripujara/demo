import { Post } from '../Post';
import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
// import 'rxjs/add/operator/toPromise';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';


@Injectable()
export class DataService {

    constructor(private configUrl: string, private http: HttpClient) {

    }
    getConfig() {

        return this.http.get(this.configUrl)
         .pipe(
            map(response => response as []),
            catchError(this.handleError));
    }

    postConfig(resource) {

        return this.http.post(this.configUrl, JSON.stringify(resource))
        .pipe(catchError(this.handleError));
    }

    putConfig(obj) {
        return this.http.put(this.configUrl + '/' + (obj as Post).id, JSON.stringify(obj))
        .pipe(catchError(this.handleError));
    }

    deleteConfig(id) {
        // return throwError(new AppError);
        return this.http.delete(this.configUrl + '/' + id)
            .pipe(retry(3),
                catchError(this.handleError));
    }

    private handleError(error: Response) {

        if (error.status === 404) {
            return Observable.throw(new NotFoundError());
        }

        return Observable.throw(new AppError(error));
      }
}
