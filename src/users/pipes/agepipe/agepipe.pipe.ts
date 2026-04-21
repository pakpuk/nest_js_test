import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';

@Injectable()
export class AgepipePipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
console.log('Inside ValidateCreateUserPipe !)');
console.log(value);
console.log(metadata);

const parseAgeToInt = parseInt(value.age.toString());
console.log('${value.age} is not a number');
 
    return value;
  }
}
