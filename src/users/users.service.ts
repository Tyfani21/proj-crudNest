import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Tyfani',
      email: 'tyfani.abreu@gmail.com',
      password: '12345',
    },

    {
      id: 2,
      name: 'Pammela',
      email: 'pammela.abreu@gmail.com',
      password: '12354',
    },
  ];
  findAll() {
    return this.users;
  }

  findById(id: number) {
    return this.users.find((user) => user.id == id);
  }
}
