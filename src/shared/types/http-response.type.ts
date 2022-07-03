export interface HttpResponse<T = any> {
    data: T;
    message: string;
    error: boolean;
}
