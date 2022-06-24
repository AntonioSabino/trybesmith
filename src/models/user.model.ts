import { ResultSetHeader } from 'mysql2';
import { User, UserLogin } from '../interface/interfaces';
import connection from './connection';

const createUser = async (user: User): Promise<User> => {
  const { username, classe, level, password } = user;

  const query = `
    INSERT INTO
      Trybesmith.Users (username, classe, level, password)
    VALUES
      (?, ?, ?, ?)
    `;

  const [newUser] = await connection.execute<ResultSetHeader>(query, [
    username,
    classe,
    level,
    password,
  ]);

  return { id: newUser.insertId, username, classe, level, password };
};

const getUser = async ({ username, password }: UserLogin): Promise<User | null> => {
  const query = `
    SELECT * FROM Trybesmith.Users 
      WHERE username = ? AND password = ?;
  `;

  const [result] = await connection.execute(query, [username, password]);

  const [user] = result as User[];

  if (!user) return null;

  return user;
};

const UserModel = { createUser, getUser };

export default UserModel;
