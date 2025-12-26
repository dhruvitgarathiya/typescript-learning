"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user1 = {
    name: "Dhruvit",
};
console.log(user1.profile?.age);
//example 2
const user2 = {
    name: "aman",
    address: {
        city: "ahmedbafd",
    },
};
console.log(user2.address?.city);
console.log(user2.address?.pincode);
//# sourceMappingURL=nullundefined.js.map