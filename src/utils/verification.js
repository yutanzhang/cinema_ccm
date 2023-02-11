export function checkUser(data) {
    let reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/
    return !reg.test(data)? true : false;
}

export function checkPassword(data) {
    let reg = /^[a-zA-Z]\w{5,17}$/
    return !reg.test(data) ? true : false;
}