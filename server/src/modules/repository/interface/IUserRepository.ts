import { ICreateUserDTO } from "../../dtos/ICreateUserDto";
import { IUpdateUserDTO } from "../../dtos/IUpdateUserDto";
import { User } from "../../models/User";

interface IUserRepository {
  Create({
    name,
    email,
    password,
    documentType,
    document,
    phone,
    mobile,
  }: ICreateUserDTO): Promise<User>;
  FindByEmail(email: string): Promise<User | undefined>;
  FindById(id: string): Promise<User | undefined>;
  Update({ id, phone, mobile }: IUpdateUserDTO): Promise<User>;
  FindAll(): Promise<User[]>;
}

export { IUserRepository };
