-- Utwórz schemat użytkowników
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role VARCHAR(50) NOT NULL,
  permissions TEXT[] DEFAULT ARRAY[]::TEXT[],
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indeks dla wydajnego wyszukiwania po loginie
CREATE INDEX IF NOT EXISTS idx_users_username ON users (username);

-- Wstaw testowego użytkownika (UWAGA: hasło jawne do testów!)
INSERT INTO users (username, password, role, permissions)
VALUES (
  'krzysztof',
  'admin123',
  'superadmin',
  ARRAY['dashboard', 'invoices', 'finance', 'reports', 'settings', 'superadmin']
)
ON CONFLICT (username) DO NOTHING;

-- Wstaw użytkownika z hasłem zaszyfrowanym (przykład)
-- Użyj bcrypt do zaszyfrowania hasła przed wstawieniem
INSERT INTO users (username, password, role, permissions)
VALUES (
  'admin',
  '$2b$10$JTAkQUDCnR00lFVi7hjD/Olx5MNWl8c7WDbc9m8B2h2u2vKb6c9oy',
  'superadmin',
  ARRAY['dashboard', 'invoices', 'finance', 'reports', 'settings', 'superadmin']
)
ON CONFLICT (username) DO NOTHING;

-- Aktywuj rozszerzenie
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Zapisz zaszyfrowane imię
INSERT INTO users (username, password, first_name)
VALUES (
  'admin',
  'bcrypthash...',
  pgp_sym_encrypt('Krzysztof', 'tajnyklucz123')
);

-- Odczytaj imię
SELECT pgp_sym_decrypt(first_name::bytea, 'tajnyklucz123') FROM users;
-- Zaktualizuj hasło użytkownika
UPDATE users SET password = 'nowyhash...' WHERE username = 'admin';

CREATE TABLE activity_logs (
  id SERIAL PRIMARY KEY,
  user_id INT,
  action TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_activity_logs_user_id ON activity_logs (user_id);
-- Przykładowe logi aktywności
INSERT INTO activity_logs (user_id, action) VALUES
(1, 'Zalogowano'),
(1, 'Zmieniono hasło'),
(2, 'Dodano nowego użytkownika'),
(3, 'Usunięto użytkownika');
-- Przykładowe logi aktywności z datą
INSERT INTO activity_logs (user_id, action, created_at) VALUES
(1, 'Zalogowano', '2023-10-01 12:00:00'),
(1, 'Zmieniono hasło', '2023-10-02 14:30:00'),
(2, 'Dodano nowego użytkownika', '2023-10-03 09:15:00'),
(3, 'Usunięto użytkownika', '2023-10-04 16:45:00'); 
-- Przykładowe logi aktywności z datą i użytkownikiem
INSERT INTO activity_logs (user_id, action, created_at) VALUES
(1, 'Zalogowano', '2023-10-01 12:00:00'),
(1, 'Zmieniono hasło', '2023-10-02 14:30:00'),
(2, 'Dodano nowego użytkownika', '2023-10-03 09:15:00'),
(3, 'Usunięto użytkownika', '2023-10-04 16:45:00');
-- Przykładowe logi aktywności z datą, użytkownikiem i akcją
INSERT INTO activity_logs (user_id, action, created_at) VALUES
(1, 'Zalogowano', '2023-10-01 12:00:00'),
(1, 'Zmieniono hasło', '2023-10-02 14:30:00'),
(2, 'Dodano nowego użytkownika', '2023-10-03 09:15:00'),
(3, 'Usunięto użytkownika', '2023-10-04 16:45:00');
-- Przykładowe logi aktywności z datą, użytkownikiem, akcją i szczegółami
INSERT INTO activity_logs (user_id, action, created_at) VALUES
(1, 'Zalogowano', '2023-10-01 12:00:00'),
(1, 'Zmieniono hasło', '2023-10-02 14:30:00'),
(2, 'Dodano nowego użytkownika', '2023-10-03 09:15:00'),
(3, 'Usunięto użytkownika', '2023-10-04 16:45:00');
// Dodaj kolumny do tabeli users
ALTER TABLE users
  ADD COLUMN first_name BYTEA,
  ADD COLUMN email VARCHAR(100),
  ADD COLUMN phone VARCHAR(20),
  ADD COLUMN avatar TEXT,
  ADD COLUMN status VARCHAR(20) DEFAULT 'active',
  ADD COLUMN timezone VARCHAR(50),
  ADD COLUMN language VARCHAR(10),
  ADD COLUMN last_login TIMESTAMP,
  ADD COLUMN last_activity TIMESTAMP,
  ADD COLUMN last_password_change TIMESTAMP,
  ADD COLUMN details TEXT,
  ADD COLUMN two_factor_enabled BOOLEAN DEFAULT FALSE,
  ADD COLUMN two_factor_secret TEXT,
  ADD COLUMN two_factor_backup_codes TEXT[],
  ADD COLUMN created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ADD COLUMN updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users
  ADD CONSTRAINT chk_status CHECK (status IN ('active', 'inactive', 'blocked', 'expired')),
  ADD CONSTRAINT chk_language CHECK (language IN ('en', 'pl', 'de', 'fr', 'es')),
  ADD CONSTRAINT chk_timezone CHECK (timezone ~ '^[A-Za-z]+/[A-Za-z_]+$'),
  ADD CONSTRAINT chk_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}$'),
  ADD CONSTRAINT chk_phone CHECK (phone ~* '^\\+?[0-9]{7,15}$'),
  ADD CONSTRAINT chk_avatar CHECK (avatar IS NULL OR avatar ~* '^(https?://)?[A-Za-z0-9._%+-]+\\.[A-Z|a-z]{2,}(/.*)?$'),
  ADD CONSTRAINT chk_two_factor_secret CHECK (two_factor_secret IS NULL OR two_factor_secret ~* '^[A-Za-z0-9+/=]+$'),
  ADD CONSTRAINT chk_two_factor_backup_codes CHECK (two_factor_backup_codes IS NULL OR array_length(two_factor_backup_codes, 1) > 0),
  ADD CONSTRAINT chk_last_login CHECK (last_login IS NULL OR last_login <= CURRENT_TIMESTAMP),
  ADD CONSTRAINT chk_last_activity CHECK (last_activity IS NULL OR last_activity <= CURRENT_TIMESTAMP),
  ADD CONSTRAINT chk_last_password_change CHECK (last_password_change IS NULL OR last_password_change <= CURRENT_TIMESTAMP),
  ADD CONSTRAINT chk_created_at CHECK (created_at <= CURRENT_TIMESTAMP),
  ADD CONSTRAINT chk_updated_at CHECK (updated_at <= CURRENT_TIMESTAMP);