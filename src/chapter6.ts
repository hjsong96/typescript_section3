/**
 * 타입 단언
 */
type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = '송송송';
person.age = 27;

type Dog = {
    name: string;
    color: string;
};

let dog = {
    name: '돌돌이',
    color: 'brown',
    bread: '진도',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A 가 B 의 슈퍼타입이거나
 * A 가 B 의 서브타입이어야 함
 */
let num1 = 10 as never;
let num2 = 10 as unknown;

let num3 = 10 as unknown as string;

/**
 * const 단언
 */
let num4 = 10 as const;

let cat = {
    name: '야옹이',
    color: 'yellow',
} as const;

/**
 * Non Null 단언
 * 어떤 값이 null 이거나 undefined 가 아니라고 컴파일러에게 알려주는 역할
 */

type Post = {
    title: string;
    author?: string; //익명 가능성이 있어 선택적 프로퍼티로 만듦
};

let post: Post = {
    title: '게시글1',
    author: '송송송',
};

const len: number = post.author!.length;
