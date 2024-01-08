import { User } from "src/app/entity/user";

export interface UserState {
    user : User;
    loading : boolean;
    error : string | null;
}