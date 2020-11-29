import * as URLS from "../constants/URLs";

export async function getFilledGameField(field) {
    const url = `${URLS.SUDOKU_SOLVER_BACKEND}/solve`;
    const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({...field})
    });
    console.log(response);
    return response;
}