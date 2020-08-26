import { Photo } from './Photo';

export interface User {
    id: number;
    username: string;
    created: Date;
    lastActive: Date;
    photoUrl: string;
   address: string;
   contactnumber:string;
    photos?: Photo[];
}
