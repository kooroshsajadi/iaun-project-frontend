export class User {
    id!: string;
    username!: string;
    password!: string;
    token!: string;
    personalInfo!: PersonalInformation;
    contactInfo!: ContactInformation;
    addressInfo: AddressInformation | undefined;
}

class PersonalInformation {
    firstName!: string;
    lastName!: string;
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