import Models from './models'
import {UserService} from './services'

export class App {
    readonly context: Models.Context
    readonly userService: UserService
    constructor() {
        this.context = { user: { id: 0, name: 'guest' }, token: { accessToken: '' } };
        this.userService = new UserService(this.context);
    }
    public async signIn(name: string, password: string) : Promise<boolean> {
        var result = await this.userService.signIn(name, password);
        if (result.success && result.data){
            this.context.user = result.data.user;
            this.context.token = result.data.token;
            return true;
        }
        return false;
    }
}