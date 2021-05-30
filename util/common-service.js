export default class CommonService {
    constructor() { }
    static toQueryString(obj, parent = '') {
        var queryString = Object.keys(obj).map(key => {
            if (typeof obj[key] === 'object' && obj[key] != null) {
                return `${this.toQueryString(obj[key], `${key}.`)}`;
            }
            else {
                return `${parent}${key}=${obj[`${key}`]}`;
            }
        }).join('&');
        return queryString;
    }

    static encodeParams(string) {
        string = 'bbvgjj6' + string + 'bbvgjj677*hhbvYYYHNNMB';
        let number = '0';
        let length = string.length;
        for (let i = 0; i < length; i++) {
            number += string.charCodeAt(i).toString(16);
        }
        return number;
    }
    static decodeParams(number) {
        let string = '';
        number = number.slice(1);
        let length = number.length;
        for (let i = 0; i < length;) {
            let code = number.slice(i, i += 2);
            string += String.fromCharCode(parseInt(code, 16));
        }
        if (string.includes('bbvgjj6') && string.includes('bbvgjj677*hhbvYYYHNNMB')) {
            return string.replace('bbvgjj6', '').replace('bbvgjj677*hhbvYYYHNNMB', '');
        }
        return '';
    }
}