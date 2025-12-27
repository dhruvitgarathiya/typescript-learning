//example 1
type User = {
  name: string;
  profile?: {
    age?: number;
    city?: string;
  };
};

const user1: User = {
  name: "Dhruvit",
};

//console.log(user1.profile?.age);

//example 2
const user2 = {
  name: "aman",
  address: {
    city: "ahmedbafd",
  },
};

//console.log(user2.address?.city);
//console.log(user2.address?.pincode);

//example 3

const users: { name: string }[] | undefined = undefined;
//console.log(users?.[0]?.name);
