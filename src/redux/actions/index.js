export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";


export const addToCartFavourite = ( data.company_name)  => {
    return {
        type: "ADD_TO_FAVOURITE",
        payload: data.company_name,
    }
}