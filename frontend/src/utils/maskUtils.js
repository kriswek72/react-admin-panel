// Funkcje do maskowania danych osobowych, używane do ochrony prywatności użytkowników w aplikacji
// Te funkcje są używane do maskowania danych osobowych, takich jak imię, nazwisko, adres e-mail, numer telefonu itp.
export const maskAll = (data) => {
  return {
    username: data.username,
    email: maskEmail(data.email),
    phone: maskPhone(data.phone),
    address: maskAddress(data.address),
    bank: maskBankAccountNumber(data.bank),
    pesel: maskPESEL(data.pesel),
    nip: maskNIP(data.nip),
    regon: maskREGON(data.regon),
    first_name: maskName(data.first_name),
    last_name: maskName(data.last_name),
    birth_date: data.birth_date, // Data urodzenia nie jest maskowana
    id_card: maskIDCardNumber(data.id_card),
    passport: maskPassportNumber(data.passport),
    vehicle_registration: maskVehicleRegistrationNumber(data.vehicle_registration),
    social_security: maskSocialSecurityNumber(data.social_security),
    company_name: maskCompanyName(data.company_name),
    role: data.role,
  };
};


// Maskuj nazwę użytkownika: KrzysztofW → K********
export const maskUsername = (username) => {
  return username[0] + '*'.repeat(username.length - 1);
};

// Maskuj e-mail: jan.kowalski@gmail.com → j***@g****
export const maskEmail = (email) => {
  const [local, domain] = email.split('@');
  return `${local[0]}***@${domain[0]}****`;
};

// Maskuj telefon: 600123456 → *** *** 456
export const maskPhone = (phone) => {
  return phone.replace(/\d(?=\d{3})/g, '*');
};

// Maskuj imię/nazwisko: Krzysztof → K*******
export const maskName = (name) => {
  return name[0] + '*'.repeat(name.length - 1);
};
// Maskuj PESEL: 12345678901 → ***-**-**-**-**
export const maskPESEL = (pesel) => {
  return pesel.replace(/\d/g, '*');
};
// Maskuj NIP: 123-456-32-18 → ***-***-**-**
export const maskNIP = (nip) => {
  return nip.replace(/\d/g, '*');
}
// Maskuj REGON: 123456789 → *********
export const maskREGON = (regon) => {
  return regon.replace(/\d/g, '*');
};
// Maskuj adres: ul. Kwiatowa 12 → ul. K***** 12
export const maskAddress = (address) => {
  const [street, streetNumber] = address.split(' ');
  return `${street[0]}***** ${streetNumber}`;
};
// Maskuj kod pocztowy: 12-345 → **-*** (lub **-** jeśli nie ma myślnika)
export const maskPostalCode = (postalCode) => {
  return postalCode.replace(/\d/g, '*').replace(/-/g, '-');
};
// Maskuj nazwę firmy: Firma XYZ → F**** Y**Z
export const maskCompanyName = (companyName) => {
  const words = companyName.split(' ');
  return words.map(word => {
    if (word.length <= 2) return word; // nie maskujemy krótkich słów
    return word[0] + '*'.repeat(word.length - 1);
  }).join(' ');
}
// Maskuj numer konta bankowego: 12 3456 7890 1234 5678 9012 3456 → ** **** **** **** **** **** ****
export const maskBankAccountNumber = (accountNumber) => {
  return accountNumber.replace(/\d(?=\d{4})/g, '*');
};
// Maskuj numer dowodu osobistego: ABC123456 → **C******6
export const maskIDCardNumber = (idCardNumber) => {
  return idCardNumber.replace(/^[A-Z]/, '*').replace(/.(?=.{2}$)/g, '*');
};
// Maskuj numer paszportu: ABC123456 → **C******6
export const maskPassportNumber = (passportNumber) => {
  return passportNumber.replace(/^[A-Z]/, '*').replace(/.(?=.{2}$)/g, '*');
};
// Maskuj numer rejestracyjny pojazdu: ABC1234 → **C****4
export const maskVehicleRegistrationNumber = (registrationNumber) => {
  return registrationNumber.replace(/^[A-Z]/, '*').replace(/.(?=.{2}$)/g, '*');
};
// Maskuj numer ubezpieczenia społecznego: 123-45-6789 → ***-**-****
export const maskSocialSecurityNumber = (ssn) => {
  return ssn.replace(/\d/g, '*').replace(/-/g, '-');
};