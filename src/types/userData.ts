export interface UserData {
  uid: number;
  username: string;
  image: string;
  fullname: string;
  twubric: {
    total: number;
    friends: number;
    influence: number;
    chirpiness: number;
  };
  join_date: number;
}
