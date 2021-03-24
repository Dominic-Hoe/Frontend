import Axios from 'axios';

export class APIError extends Error {
    constructor(message) {
        super(message);
        this.name = "APIError";
    }
}

const request = async ({ endpoint, method, body, headers }) => {
    try {
        const { data } = await Axios({
            url: `https://api.domhoe.dev/${endpoint}`,
            method,
            data: body ? body: null,
            headers: {
                ...headers
            },
            withCredentials: true
        });

        return data;
    } catch (err) {
        err = err.response.data.error;

        throw new APIError(`${err.charAt(0).toUpperCase() + err.slice(1)}.`);
    }
}

const register = async (username, password) => {
    const data = await request({
        endpoint: "/auth/register",
        method: "POST",
        body: {
            username,
            password
        }
    });

    return data;
}

const login = async (username, password) => {
    const data = await request({
        endpoint: "/auth/login",
        method: "POST",
        body: {
            username,
            password
        }
    });

    return data;
}

const Article = {
    create: async (title, content) => {
        const data = await request({
            endpoint: "/article",
            method: "POST",
            body: {
                title,
                content
            }
        });

        return data;
    },
    getList: async () => {
        
    }
}