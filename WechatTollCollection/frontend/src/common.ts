import Models from './models'

export default {}
export class ServiceBase {
    context: Models.Context
    constructor(context: Models.Context) {
        this.context = context;
    }
    protected async execute<T>(action: () => T): Promise<Models.ServiceResult<T>> {
        try {
            var result = action();
            return {
                success: true,
                code: 0,
                msg: 'Successed',
                data: result
            };
        } catch (e) {
            return {
                success: false,
                code: -1,
                msg: e.toString()
            };
        }
    }
}