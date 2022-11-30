export interface User {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  picture: Picture;
  cell: string | undefined;
}

export interface Name {
  first: string;
  last: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
}

export interface Dob {
  date: string;
  age: number;
}

export interface Picture {
  large: string;
}
