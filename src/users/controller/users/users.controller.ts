import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import express from 'express';

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
    postUser(@Req() request: express.Request,@Res() response:express.Response){
       console.log(request.body);
    }
}
