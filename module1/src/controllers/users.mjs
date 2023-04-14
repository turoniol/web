import { getUser as getUserByNickname, saveUser, getAllUsers } from '../services/users.mjs';

const getUsers = async () => {
  const results = await getAllUsers();
  return results;
}

const createUser = async (body) => {
  const existingUser = await getUserByNickname(body.nickname);

  if(existingUser){
    return res.status(400).send('User already exists!');
  }

  const user = {
    nickname: body.nickname,
    firstName: body.firstName,
    secondName: body.secondName
  }

  const result = await saveUser(user);

  return result;
}

export {
    getUsers,
    createUser
}