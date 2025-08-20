/**
 * 타입 추론
 */

let a = 10;
let b = 'hello';
let c = {
    id: 1,
    name: '송송송',
    profile: {
        nickname: 'songsong',
    },
    urls: ['https://songworld.com'],
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];

function func() {
    return 'hello';
}

let d;
d = 1;
d.toFixed();

d = 'hello';
d.toUpperCase();

const num = 10;
const str = 'hello';

let arr = [1, 'string'];
