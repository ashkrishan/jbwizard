export class User {
    screenName: string;
    email: string;
    password: string;

    constructor(screenName: string, email: string, password: string) {
        this.screenName = screenName;
        this.email = email;
        this.password = password;
    }
}