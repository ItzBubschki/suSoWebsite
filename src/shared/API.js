import * as URLS from "../constants/URLs";

export async function getFilledGameField(field) {
    const url = `${URLS.SUDOKU_SOLVER_BACKEND}/solve`;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const rawBody = JSON.stringify(field);

    var requestOptions = {
        method: 'POST',
        headers: headers,
        body: rawBody,
        redirect: 'follow'
    };
    const response = await fetch(url, requestOptions);
    return await response.json();
}