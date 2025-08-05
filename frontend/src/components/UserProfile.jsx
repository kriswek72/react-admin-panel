import { maskEmail, maskPhone, maskName, maskPESEL, maskNIP, maskREGON, maskAddress } from '../utils/maskUtils';

const UserProfile = ({ user }) => (
  <div>
    <p>📧 Email: {maskEmail(user.email)}</p>
    <p>📱 Telefon: {maskPhone(user.phone)}</p>
    <p>👤 Imię: {maskName(user.first_name)}</p>
    <p>👤 Nazwisko: {maskName(user.last_name)}</p>
    <>📅 Data urodzenia: {user.birth_date}</>
    <p>📜 PESEL: {user.pesel ? maskPESEL(user.pesel) : 'Brak'}</p>
    <p>🏢 NIP: {user.nip ? maskNIP(user.nip) : 'Brak'}</p>
    <p>🏢 REGON: {user.regon ? maskREGON(user.regon) : 'Brak'}</p>
    <p>🏠 Adres: {user.address ? maskAddress(user.address) : 'Brak'}</p>
  </div>

);
export default UserProfile;