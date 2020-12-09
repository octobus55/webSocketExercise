export type Nullable<T> = T | null;

interface IName {
  title: string;
  first: string;
  last: string;
}

interface IStreet {
  number: number;
  name: string;
}

export interface ICoordinates {
  latitude: string;
  longitude: string;
}

interface ITimezone {
  offset: string;
  description: string;
}

interface ILocation {
  street: IStreet;
  city: string;
  state: string;
  country: string;
  postCode: number;
  coordinates: ICoordinates;
  timezone: ITimezone;
}

interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface IDate {
  age: number;
  date: string;
}

interface IResultId {
  name: string;
  value: string;
}

interface IResultLogin {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

export interface IResult {
  gender: string;
  name: IName;
  location: ILocation;
  email: string;
  nat: string;
  picture: IPicture;
  phone: string;
  cell: string;
  dob: IDate;
  id: IResultId;
  registered: IDate;
  login: IResultLogin;
}
