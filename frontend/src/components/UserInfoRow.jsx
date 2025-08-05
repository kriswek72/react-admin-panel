import InfoRow from './InfoRow';

const UserInfoRow = ({ user }) => (
  <InfoRow
    icon="🔒"
    label={<TooltipLabel label="Status konta" tooltip="Czy konto jest aktywne, zablokowane lub wygaszone" />}
    value={user.status}
  />
);

export default UserInfoRow;