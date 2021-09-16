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

export const PRISMIC_heading = (item, index) => {
    return item?.heading[index = 0]?.text || " "
}
export const PRISMIC_title = (item, index) => {
    return item?.title[index = 0]?.text || " "
}
export const PRISMIC_heading2 = (item, index) => {
    return item?.heading2[index = 0]?.text || " "
}
export const PRISMIC_name = (item, index) => {
    return item?.name[index = 0]?.text || " "
}
export const PRISMIC_text = (item, index) => {
    return item?.text[index = 0]?.text || " "
}
export const PRISMIC_text2 = (item, index) => {
    return item?.text[index = 1]?.text || " "
}
export const PRISMIC_message = (item, index) => {
    return item?.message[index = 0]?.text || " "
}
export const PRISMIC_link_text = (item, index) => {
    return item?.link_text || " "
}
export const PRISMIC_role = (item, index) => {
    return item?.role || " "
}
export const PRISMIC_link = (item, index) => {
    return item?.link?.url || " "
}
export const PRISMIC_image = (item, image) => {
    return item?.image?.url || image || "#ffffff "
}
export const PRISMIC_icon = (item) => {
    return item?.icon?.url || " "
}