import { ResultSetHeader } from 'mysql2';
import { User } from '../interface/interfaces';
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

const UserModel = { createUser };

export default UserModel;
