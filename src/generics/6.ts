type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = Omit<Form, "errors">;

const user: Params = {
  email: "artem@user.com",
  firstName: "Artem",
  lastName: "user",
  phone: "12345678",
};

console.log(user);
