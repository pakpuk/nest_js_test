import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    getUsers(){
        return {message: 'ghaith',email :'ghaith@example.com'}
    }
    @Get('fetch')
    fetchUsers(){
        return {message: 'Fetching users...'}
    }

    @Post('path')
    postUser(){
        return {message: 'Posting user...'}
    }
}
