
const Users = () => {
    return (
        <section>
            <div className="users-module">
                <h2>👤 Users</h2>
                <p>Welcome to the user management module!</p>
                {/* Here you can add user management functionalities */}
                <MyAccount />
                <UserList />
                <UserRoles />
                <UserPermissions />
                <UserActivity />
                <UserSettings />
                <UserNotifications />
                <UserPreferences />
            </div>
        </section>
    );
};

export default Users;
