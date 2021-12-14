export class User {
    id: string | undefined;
    username!: string;
    password: string | undefined;
    token: string | undefined;
    personalInfo: PersonalInformation | undefined;
    contactInfo: ContactInformation | undefined;
    addressInfo: AddressInformation | undefined;
}

class PersonalInformation {
    firstName: string | undefined;
    lastName: string | undefined;
    birthDate: Date | undefined;
    religion: string | undefined;
    occupation: string | undefined;
}

class ContactInformation {
    phoneNumber!: string;
    email: string | undefined;
}

class AddressInformation {
    country: string | undefined;
    city: string | undefined;
}