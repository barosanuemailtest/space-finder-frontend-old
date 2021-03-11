

export interface FakeUser {
    userName: string,
    email: string
}

export class AuthService {

    public async login(userName: string, password: string): Promise<FakeUser | undefined> {
        if (userName === 'user' && password === '1234') {
            return {
                userName: userName,
                email: `${userName}@gmail.com`
            }
        } else {
            return undefined
        }
    }

}