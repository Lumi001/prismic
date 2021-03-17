import Prismic from 'prismic-javascript';

export const apiEndpoint = "https://trucsr.cdn.prismic.io/api/v2";

export const accessToken = "";

//client object

export const Client = (req = null) => {

    const options = (req = null, prismicAccessToken = null) => {

        const reqOption = req ? { req } : {};

        const accessTokenOption = prismicAccessToken ?
            { accessToken: prismicAccessToken } :
            {}

            return { ...reqOption, ...accessTokenOption }
        }
        return Prismic.client(apiEndpoint, options(req, accessToken));
    }