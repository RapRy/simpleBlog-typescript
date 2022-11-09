export type SignUpFormdataType = {
    username: string;
    email: string;
    studentId: string;
    password: string;
    confirmPassword: string;
  };
  
  export type SignInFormdataType = {
    email: string;
    password: string;
  };

  export type UserType = {
    _id: string,
    username: string,
    email: string,
    password: string,
    avatar: string,
    accountType: number,
    active: number,
    blacklisted: number,
    schoolId: number,
    createdAt: string,
    updatedAt: string,
    post: {
        topics: string[],
        replies: string[],
        upvotes: string[],
        downvotes: string[],
    },
    name: {
        firstName: string,
        lastName: string
    },
    date: {
        activity: string[],
        registered: string
    },
    token?: string
  }