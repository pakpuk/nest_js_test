import { Body, Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import express from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dtos';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService : UsersService){}
    @Get()
    getUsers(){
        return this.userService.fetchUsers();
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
