import { from } from "rxjs";
import{
    UseInterceptors,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
} from  "@nestjs/common";

import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { plainToClass } from "class-transformer";

export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
        // run something before a request is handled
        console.log('Before...');
        return handler.handle().pipe(
            map((data: any) => {
                // run something before the response is sent out
                console.log('After...');
                //return data;

            })
        );
    }
}