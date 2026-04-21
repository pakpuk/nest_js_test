import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';

@Injectable()
export class UsersService {
  private fakeUsers =[{userName: 'ghaith',email :'ghaith@example.com'},{userName: 'john',email :'john@example.com'}]
    fetchUsers(){
        return this.fakeUsers;
    }

    CreateUser( userDetails : CreateUserDto){
        this.fakeUsers.push(userDetails);
    }
}
