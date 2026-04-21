import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import express from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';

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

    @Post('create')
    CreateUser(@Body() userdata: CreateUserDto){
        console.log(userdata);
    }

    @Get('id')
    getUserById(@Param('id') id: string ){
        console.log(id,);
    }
}
