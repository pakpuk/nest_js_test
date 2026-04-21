import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    fetchUsers(){
        return [{message: 'ghaith',email :'ghaith@example.com'}]
    }
}
