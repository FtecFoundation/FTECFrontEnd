export class RegistrationData {
    username: string;
    email: string;
    password: string;
    subscribeForEmail: boolean;

    deserialize(formData: any): this {
        this.username = formData.username;
        this.email = formData.email;
        this.password = formData.passwordGroup.password;
        this.subscribeForEmail = formData.subscribeForEmail;
        return this;
    }
}
