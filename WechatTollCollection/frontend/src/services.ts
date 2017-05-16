import {ServiceBase} from './common'
import Models from './models'

export class UserService extends ServiceBase {
    constructor(context: Models.Context) {
        super(context);
    }
    async signIn(name: string, password: string): Promise<Models.ServiceResult<{ user: Models.User, token: Models.Token }>> {
        return await this.execute(() => {
            return {
                user: {
                    id: parseInt((Math.random() * 100000).toString()),
                    name: 'Jason',
                },
                token: {
                    accessToken: 'token'
                }
            }
        });
    }
}