"use strict";
// here we will learn that what is best practise to write an user admin and guest role access code using never type also this is real life example of the never type usecase
Object.defineProperty(exports, "__esModule", { value: true });
function handleRole(role) {
    switch (role) {
        case "admin":
            return "admin have all the control and access";
        case "guest":
            return "guest can read all the stuff but can't modify it";
        case "user":
            return "user can use the functionalities";
        default:
            const _exhaustiveCheck = role;
            return _exhaustiveCheck;
    }
}
//# sourceMappingURL=nevertype.js.map