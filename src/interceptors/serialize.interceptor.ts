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
import { UserDTO } from "../users/dtos/user.dto";
 
export class SerializeInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, handler: CallHandler<any>): Observable<any> {
        return handler.handle().pipe(
            map((data: any) => {
                return plainToClass(UserDTO, data, { 
                    excludeExtraneousValues: true,
                });
            })
        );
    }
}