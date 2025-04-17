import bcrypt from 'bcrypt';


const salt= 10;

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, salt)

};

export const verifyPassword = async (passowrd, hash) => {
    return await bcrypt.compare(passowrd, hash);
}