/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입을 말함
 */

type Admin = {
    name: string;
    kickCount: number;
};

type Member = {
    name: string;
    point: number;
};

type Guset = {
    name: string;
    visitCount: number;
};

type User = Admin | Member | Guset;

// Admin -> {name}님 현재까지 {kickCount} 명 강퇴했습니다.
// Member -> {name}님 현재까지 {point} 모았습니다.
// Guset -> {name}님 현재까지 {visitCount} 번 오셨습니다.
function login(user: User) {
    if ('kickCount' in user) {
        // admin 타입
    } else if ()
}
