/* types */
import { HttpResponse } from 'shared/types';

export const httpResponseHandler = <T>(
    data: T,
    error: any,
    message: string
): HttpResponse<T> => ({
    data,
    message,
    error,
});
