import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Lucas Bittencourt",
    email: "lucascafieiro@gmail.com",
    password: "123456",
    techs: [
      { title: "NodeJS", experience: 70 },
      "ReactJS",
      "React Native"
    ]
  });
  return response.json({ message: "Hello World!" });
}