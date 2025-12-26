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

console.log(user1.profile?.age);
