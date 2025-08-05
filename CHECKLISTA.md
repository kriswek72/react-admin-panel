# ✅ CHECKLISTA: Panel Admina w React z systemem ról

## 1. Inicjalizacja projektu

- [✅] stwórz repozytorium na GitHubie
- [✅] sklonuj repozytorium na swój komputer `gh repo clone kriswek72/react-admin-panel`
- [✅] przejdź do katalogu projektu `cd react-admin-panel`

FRONTEND

- [✅] zainstaluj Node.js i npm
- [✅] zainstaluj Vite `npm install -g create-vite`
- [✅] create Vite app `npm create vite@latest react-admin-panel --template react`
- [✅] `npm install`
- [✅] `npm install react-router-dom`

## 2. Struktura folderów

- [✅ ] `src/`
  - [✅ ] `components/` - komponenty wspólne
  - [✅ ] `modules/` - moduły aplikacji
  - [✅ ] `pages/` - strony aplikacji
  - [✅ ] `routes/` - trasy aplikacji
  - [✅ ] `utils/` - narzędzia i funkcje pomocnicze
  - [✅ ] `App.jsx` - główny komponent aplikacji
  - [✅ ] `index.jsx` - punkt wejścia aplikacji
- [✅ ] `styles/` - style aplikacji
- [✅ ] `assets/` - zasoby statyczne (obrazy, ikony itp.)
- [✅ ] `public/` - pliki publiczne (favicon, manifest itp.)
- [✅ ] `package.json` - plik konfiguracyjny projektu
- [✅ ] `vite.config.js` - konfiguracja Vite
- [✅ ] `.env` - zmienne środowiskowe
- [ ] `.gitignore` - plik ignorowania Gita
- [ ] `README.md` - dokumentacja projektu
- [ ] `LICENSE` - licencja projektu
- [✅ ] `CHECKLISTA.md` - lista kontrolna zadań do wykonania
- [ ] `tsconfig.json` - konfiguracja TypeScript (jeśli używasz TS)
- [✅ ] `eslint.config.js` - konfiguracja ESLint (jeśli używasz ESLint)
- [ ] `prettier.config.js` - konfiguracja Prettiera (jeśli używasz Prettiera)
- [ ] `babel.config.js` - konfiguracja Babel (jeśli używasz Babel)
- [ ] `jest.config.js` - konfiguracja Jest (jeśli używasz Jest)
- [ ] `cypress.config.js` - konfiguracja Cypress (jeśli używasz Cypress)
- [ ] `webpack.config.js` - konfiguracja Webpack (jeśli używasz Webpack)

## 3. Konfiguracja routingu

- [✅ ] utwórz plik `src/routes/index.jsx`
- [✅ ] `eslint.config.js` - konfiguracja ESLint (jeśli używasz ESLint)
- [✅ ] zainstaluj `react-router-dom` `npm install react-router-dom`
- [ ] skonfiguruj routing w `src/routes/index.jsx`
- [ ] utwórz plik `src/routes/PrivateRoute.jsx` dla tras prywatnych
- [ ] utwórz plik `src/routes/PublicRoute.jsx` dla tras publicznych
- [ ] utwórz plik `src/routes/NotFound.jsx` dla strony 404
- [ ] utwórz plik `src/routes/Redirect.jsx` dla przekierowań
- [ ] utwórz plik `src/routes/RoleBasedRoute.jsx` dla tras opartych na rolach
- [ ] utwórz plik `src/routes/ProtectedRoute.jsx` dla tras chronionych
- [ ] utwórz plik `src/routes/GuestRoute.jsx` dla tras gościnnych
- [ ] utwórz plik `src/routes/AdminRoute.jsx` dla tras admin
- [ ] utwórz plik `src/routes/UserRoute.jsx` dla tras użytkownika
- [ ] utwórz plik `src/routes/EditorRoute.jsx` dla tras edytora
- [ ] utwórz plik `src/routes/ViewerRoute.jsx` dla tras widza
- [ ] utwórz plik `src/routes/CustomRoute.jsx` dla tras niestandardowych
- [ ] utwórz plik `src/routes/CustomRedirect.jsx` dla niestandardowych przekierowań
- [ ] utwórz plik `src/routes/CustomNotFound.jsx` dla niestandardowej strony 404
- [ ] utwórz plik `src/routes/CustomError.jsx` dla niestandardowych błędów
- [ ] utwórz plik `src/routes/CustomLoading.jsx` dla niestandardowego ładowania
- [ ] utwórz plik `src/routes/CustomFallback.jsx` dla niestandardowego fallbacku
- [ ] utwórz plik `src/routes/CustomSuspense.jsx` dla niestandardowego Suspense
- [ ] utwórz plik `src/routes/CustomErrorBoundary.jsx` dla niestandardowej granicy błędów
- [ ] utwórz plik `src/routes/CustomBoundary.jsx` dla niestandardowej granicy
- [ ] utwórz plik `src/routes/CustomProvider.jsx` dla niestandardowego providera
- [ ] utwórz plik `src/routes/CustomContext.jsx` dla niestandardowego kontekstu
- [ ] utwórz plik `src/routes/CustomHook.jsx` dla niestandardowego hooka
- [ ] utwórz plik `src/routes/CustomHOC.jsx` dla niestandardowego HOC
- [ ] utwórz plik `src/routes/CustomComponent.jsx` dla niestandardowego komponentu
- [ ] utwórz plik `src/routes/CustomPage.jsx` dla niestandardowej strony
- [ ] utwórz plik `src/routes/CustomLayout.jsx` dla niestandardowego layoutu
- [ ] utwórz plik `src/routes/CustomTemplate.jsx` dla niestandardowego szablonu
- [ ] utwórz plik `src/routes/CustomStyle.jsx` dla niestandardowego stylu
- [ ] utwórz plik `src/routes/CustomTheme.jsx` dla niestandardowego motywu
- [ ] utwórz plik `src/routes/CustomConfig.jsx` dla niestandardowej konfiguracji
- [ ] utwórz plik `src/routes/CustomSettings.jsx` dla niestandardowych ustawień
- [ ] utwórz plik `src/routes/CustomFeature.jsx` dla niestandardowej funkcji
- [ ] utwórz plik `src/routes/CustomPlugin.jsx` dla niestandardowej wtyczki
- [ ] utwórz plik `src/routes/CustomModule.jsx` dla niestandardowego modułu
- [ ] utwórz plik `src/routes/CustomService.jsx` dla niestandardowej usługi
- [ ] utwórz plik `src/routes/CustomAPI.jsx` dla niestandardowego API
- [ ] utwórz plik `src/routes/CustomMiddleware.jsx` dla niestandardowego middleware
- [ ] utwórz plik `src/routes/CustomController.jsx` dla niestandardowego kontrolera
- [ ] utwórz plik `src/routes/CustomModel.jsx` dla niestandardowego modelu
- [ ] utwórz plik `src/routes/CustomSchema.jsx` dla niestandardowego schematu
- [ ] utwórz plik `src/routes/CustomValidator.jsx` dla niestandardowego walidatora
- [ ] utwórz plik `src/routes/CustomTransformer.jsx` dla niestandardowego transformera
- [ ] utwórz plik `src/routes/CustomSerializer.jsx` dla niestandardowego serializera
- [ ] utwórz plik `src/routes/CustomDeserializer.jsx` dla niestandardowego deserializera
- [ ] utwórz plik `src/routes/CustomParser.jsx` dla niestandardowego parsera
- [ ] utwórz plik `src/routes/CustomRenderer.jsx` dla niestandardowego renderera
- [ ] utwórz plik `src/routes/CustomCompiler.jsx` dla niestandardowego kompilatora
- [ ] utwórz plik `src/routes/CustomBundler.jsx` dla niestandardowego bundlera
- [ ] utwórz plik `src/routes/CustomOptimizer.jsx` dla niestandardowego optymalizera
- [ ] utwórz plik `src/routes/CustomMinifier.jsx` dla niestandardowego minifiera
- [ ] utwórz plik `src/routes/CustomTranspiler.jsx` dla niestandardowego transpilera
- [ ] utwórz plik `src/routes/CustomLinter.jsx` dla niestandardowego lintera
- [ ] utwórz plik `src/routes/CustomFormatter.jsx` dla niestandardowego formattera
- [ ] utwórz plik `src/routes/CustomDebugger.jsx` dla niestandardowego debuggera
- [ ] utwórz plik `src/routes/CustomProfiler.jsx` dla niestandardowego profilera
- [ ] utwórz plik `src/routes/CustomLogger.jsx` dla niestandardowego loggera
- [ ] utwórz plik `src/routes/CustomMonitor.jsx` dla niestandardowego monitora
- [ ] utwórz plik `src/routes/CustomWatcher.jsx` dla niestandardowego watchera
- [ ] utwórz plik `src/routes/CustomTester.jsx` dla niestandardowego testera
- [ ] utwórz plik `src/routes/CustomRunner.jsx` dla niestandardowego runnera
- [ ] utwórz plik `src/routes/CustomExecutor.jsx` dla niestandardowego wykonawcy
- [ ] utwórz plik `src/routes/CustomScheduler.jsx` dla niestandardowego harmonogramu
- [ ] utwórz plik `src/routes/CustomDispatcher.jsx` dla niestandardowego dyspozytora
- [ ] utwórz plik `src/routes/CustomBroker.jsx` dla niestandardowego brokera
- [ ] utwórz plik `src/routes/CustomQueue.jsx` dla niestandardowej kolejki
- [ ] utwórz plik `src/routes/CustomStream.jsx` dla niestandardowego strumienia
- [ ] utwórz plik `src/routes/CustomChannel.jsx` dla niestandardowego kanału
- [ ] utwórz plik `src/routes/CustomSocket.jsx` dla niestandardowego gniazda
- [ ] utwórz plik `src/routes/CustomConnection.jsx` dla niestandardowego połączenia
- [ ] utwórz plik `src/routes/CustomSession.jsx` dla niestandardowej sesji
- [ ] utwórz plik `src/routes/CustomContextProvider.jsx` dla niestandardowego providera kontekstu
- [ ] utwórz plik `src/routes/CustomContextConsumer.jsx` dla niestandardowego konsumenta kontekstu
- [ ] utwórz plik `src/routes/CustomContextHook.jsx` dla niestandardowego hooka kontekstu
- [ ] utwórz plik `src/routes/CustomContextHOC.jsx` dla niestandardowego HOC kontekstu
- [ ] utwórz plik `src/routes/CustomContextComponent.jsx` dla niestandardowego komponentu kontekstu
- [ ] utwórz plik `src/routes/CustomContextPage.jsx` dla niestandardowej strony kontekstu
- [ ] utwórz plik `src/routes/CustomContextLayout.jsx` dla niestandardowego layoutu kontekstu
- [ ] utwórz plik `src/routes/CustomContextTemplate.jsx` dla niestandardowego szablonu kontekstu
- [ ] utwórz plik `src/routes/CustomContextStyle.jsx` dla niestandardowego stylu kontekstu
- [ ] utwórz plik `src/routes/CustomContextTheme.jsx` dla niestandardowego motywu kontekstu
- [ ] utwórz plik `src/routes/CustomContextConfig.jsx` dla niestandardowej konfiguracji kontekstu
- [ ] utwórz plik `src/routes/CustomContextSettings.jsx` dla niestandardowych ustawień kontekstu
- [ ] utwórz plik `src/routes/CustomContextFeature.jsx` dla niestandardowej funkcji kontekstu
- [ ] utwórz plik `src/routes/CustomContextPlugin.jsx` dla niestandardowej wtyczki kontekstu
- [ ] utwórz plik `src/routes/CustomContextModule.jsx` dla niestandardowego modułu kontekstu
- [ ] utwórz plik `src/routes/CustomContextService.jsx` dla niestandardowej usługi kontekstu
- [ ] utwórz plik `src/routes/CustomContextAPI.jsx` dla niestandardowego API kontekstu
- [ ] utwórz plik `src/routes/CustomContextMiddleware.jsx` dla niestandardowego middleware kontekstu
- [ ] utwórz plik `src/routes/CustomContextController.jsx` dla niestandardowego kontrolera kontekstu
- [ ] utwórz plik `src/routes/CustomContextModel.jsx` dla niestandardowego modelu kontekstu
- [ ] utwórz plik `src/routes/CustomContextSchema.jsx` dla niestandardowego schematu kontekstu
- [ ] utwórz plik `src/routes/CustomContextValidator.jsx` dla niestandardowego walidatora kontekstu
- [ ] utwórz plik `src/routes/CustomContextTransformer.jsx` dla niestandardowego transformera kontekstu
- [ ] utwórz plik `src/routes/CustomContextSerializer.jsx` dla niestandardowego serializera kontekstu
- [ ] utwórz plik `src/routes/CustomContextDeserializer.jsx` dla niestandardowego deserializera kontekstu
- [ ] utwórz plik `src/routes/CustomContextParser.jsx` dla niestandardowego parsera kontekstu
- [ ] utwórz plik `src/routes/CustomContextRenderer.jsx` dla niestandardowego renderera kontekstu
- [ ] utwórz plik `src/routes/CustomContextCompiler.jsx` dla niestandardowego kompilatora kontekstu
- [ ] utwórz plik `src/routes/CustomContextBundler.jsx` dla niestandardowego bundlera kontekstu
- [ ] utwórz plik `src/routes/CustomContextOptimizer.jsx` dla niestandardowego optymalizera kontekstu
- [ ] utwórz plik `src/routes/CustomContextMinifier.jsx` dla niestandardowego minifiera kontekstu
- [ ] utwórz plik `src/routes/CustomContextTranspiler.jsx` dla niestandardowego transpilera kontekstu
- [ ] utwórz plik `src/routes/CustomContextLinter.jsx` dla niestandardowego lintera kontekstu
- [ ] utwórz plik `src/routes/CustomContextFormatter.jsx` dla niestandardowego formattera kontekstu
- [ ] utwórz plik `src/routes/CustomContextDebugger.jsx` dla niestandardowego debuggera kontekstu
- [ ] utwórz plik `src/routes/CustomContextProfiler.jsx` dla niestandardowego profilera kontekstu
- [ ] utwórz plik `src/routes/CustomContextLogger.jsx` dla niestandardowego loggera kontekstu
- [ ] utwórz plik `src/routes/CustomContextMonitor.jsx` dla niestandardowego monitora kontekstu
- [ ] utwórz plik `src/routes/CustomContextWatcher.jsx` dla niestandardowego watchera kontekstu
- [ ] utwórz plik `src/routes/CustomContextTester.jsx` dla niestandardowego testera kontekstu
- [ ] utwórz plik `src/routes/CustomContextRunner.jsx` dla niestandardowego runnera kontekstu
- [ ] utwórz plik `src/routes/CustomContextExecutor.jsx` dla niestandardowego wykonawcy kontekstu
- [ ] utwórz plik `src/routes/CustomContextScheduler.jsx` dla niestandardowego harmonogramu kontekstu
- [ ] utwórz plik `src/routes/CustomContextDispatcher.jsx` dla niestandardowego dyspozytora kontekstu
- [ ] utwórz plik `src/routes/CustomContextBroker.jsx` dla niestandardowego brokera kontekstu
- [ ] utwórz plik `src/routes/CustomContextQueue.jsx` dla niestandardowej kolejki kontekstu
- [ ] utwórz plik `src/routes/CustomContextStream.jsx` dla niestandardowego strumienia kontekstu
- [ ] utwórz plik `src/routes/CustomContextChannel.jsx` dla niestandardowego kanału kontekstu
- [ ] utwórz plik `src/routes/CustomContextSocket.jsx` dla niestandardowego gniazda kontekstu
- [ ] utwórz plik `src/routes/CustomContextConnection.jsx` dla niestandardowego połączenia kontekstu
- [ ] utwórz plik `src/routes/CustomContextSession.jsx` dla niestandardowej sesji kontekstu

## 4. Konfiguracja stanu aplikacji

- [ ] zainstaluj `redux` i `react-redux` `npm install redux react-redux`
- [ ] utwórz plik `src/store/index.js`  `import { createStore } from 'redux'; import rootReducer from './reducers'; const store = createStore(rootReducer); export default store;`
- [ ] utwórz plik `src/store/reducers/index.js` `import { combineReducers } from 'redux'; import authReducer from './authReducer'; import userReducer from './userReducer'; const rootReducer = combineReducers({ auth: authReducer, user: userReducer }); export default rootReducer;`
- [ ] utwórz plik `src/store/reducers/authReducer.js` `const initialState = { isAuthenticated: false, user: null }; const authReducer = (state = initialState, action) => { switch (action.type) { case 'LOGIN': return { ...state, isAuthenticated: true, user: action.payload }; case 'LOGOUT': return { ...state, isAuthenticated: false, user: null }; default: return state; } }; export default authReducer;`
- [ ] utwórz plik `src/store/reducers/userReducer.js` `const initialState = { users: [] }; const userReducer = (state = initialState, action) => { switch (action.type) { case 'SET_USERS': return { ...state, users: action.payload }; default: return state; } }; export default userReducer;`
- [ ] utwórz plik `src/store/actions/authActions.js` `export const login = (user) => ({ type: 'LOGIN', payload: user }); export const logout = () => ({ type: 'LOGOUT' });`
- [ ] utwórz plik `src/store/actions/userActions.js` `export const setUsers = (users) => ({ type: 'SET_USERS', payload: users });`
- [ ] utwórz plik `src/store/middleware/logger.js` `const logger = (store) => (next) => (action) => { console.log('Dispatching action:', action); return next(action); }; export default logger;`
- [ ] utwórz plik `src/store/middleware/thunk.js` `const thunk = (store) => (next) => (action) => { if (typeof action === 'function') { return action(store.dispatch, store.getState); } return next(action); }; export default thunk;`
- [ ] utwórz plik `src/store/middleware/index.js` `import logger from './logger'; import thunk from './thunk'; const middleware = [logger, thunk]; export default middleware;`
- [ ] utwórz plik `src/store/configureStore.js` `import { createStore, applyMiddleware } from 'redux'; import rootReducer from './reducers'; import middleware from './middleware'; const configureStore = () => { const store = createStore(rootReducer, applyMiddleware(...middleware)); return store; }; export default configureStore;`
- [ ] utwórz plik `src/store/selectors/authSelectors.js` `export const isAuthenticated = (state) => state.auth.isAuthenticated; export const getUser = (state) => state.auth.user;`
- [ ] utwórz plik `src/store/selectors/userSelectors.js` `export const getUsers = (state) => state.user.users; export const getUserById = (state, userId) => state.user.users.find(user => user.id === userId);`
- [ ] utwórz plik `src/store/types/authTypes.js` `export const LOGIN = 'LOGIN'; export const LOGOUT = 'LOGOUT';`
- [ ] utwórz plik `src/store/types/userTypes.js` `export const SET_USERS = 'SET_USERS';`
- [ ] utwórz plik `src/store/index.js` `import { createStore, applyMiddleware } from 'redux'; import rootReducer from './reducers'; import middleware from './middleware'; const store = createStore(rootReducer, applyMiddleware(...middleware)); export default store;`
- [ ] utwórz plik `src/store/index.js` `import { Provider } from 'react-redux'; import store from './store'; const ReduxProvider = ({ children }) => { return <Provider store={store}>{children}</Provider>; }; export default ReduxProvider;`
- [ ] utwórz plik `src/store/index.js` `import { useSelector, useDispatch } from 'react-redux'; import { isAuthenticated, getUser } from './selectors/authSelectors'; import { login, logout } from './actions/authActions'; const useAuth = () => { const dispatch = useDispatch(); const authenticated = useSelector(isAuthenticated); const user = useSelector(getUser); return { authenticated, user, login: (user) => dispatch(login(user)), logout: () => dispatch(logout()) }; }; export default useAuth;`
- [ ] utwórz plik `src/store/index.js` `import { useSelector, useDispatch } from 'react-redux'; import { getUsers, getUserById } from './selectors/userSelectors'; import { setUsers } from './actions/userActions'; const useUser = () => { const dispatch = useDispatch(); const users = useSelector(getUsers); const userById = (id) => useSelector((state) => getUserById(state, id)); return { users, userById, setUsers: (users) => dispatch(setUsers(users)) }; }; export default useUser;`
- [ ] utwórz plik `src/store/index.js` `import { useSelector } from 'react-redux'; import { isAuthenticated, getUser } from './selectors/authSelectors'; const useAuth = () => { const authenticated = useSelector(isAuthenticated); const user = useSelector(getUser); return { authenticated, user }; }; export default useAuth;`
- [ ] utwórz plik `src/store/index.js` `import { useSelector } from 'react-redux'; import { getUsers, getUserById } from './selectors/userSelectors'; const useUser = () => { const users = useSelector(getUsers); const userById = (id) => useSelector((state) => getUserById(state, id)); return { users, userById }; }; export default useUser;`
- [ ] utwórz plik `src/store/index.js` `import { useSelector } from 'react-redux'; import { isAuthenticated, getUser } from './selectors/authSelectors'; import { getUsers, getUserById } from './selectors/userSelectors'; const useAuth = () => { const authenticated = useSelector(isAuthenticated); const user = useSelector(getUser); return { authenticated, user }; }; const useUser = () => { const users = useSelector(getUsers); const userById = (id) => useSelector((state) => getUserById(state, id)); return { users, userById }; }; export { useAuth, useUser };`  

## 5. Konfiguracja autoryzacji i ról

- [✅ ] zainstaluj `jsonwebtoken` `npm install jsonwebtoken`
- [✅ ] utwórz plik `src/utils/auth.js` `import jwt from 'jsonwebtoken'; const secretKey = 'your_secret_key'; export const generateToken = (user) => { return jwt.sign({ id: user.id, role: user.role }, secretKey, { expiresIn: '1h' }); }; export const verifyToken = (token) => { try { return jwt.verify(token, secretKey); } catch (error) { return null; } };`
- [ ] utwórz plik `src/utils/roles.js` `export const roles = { ADMIN: 'admin', USER: 'user' };`
- [ ] utwórz plik `src/utils/permissions.js` `export const permissions = { READ: 'read', WRITE: 'write', DELETE: 'delete' };`
- [ ] utwórz plik `src/utils/rolePermissions.js` `import { roles } from './roles'; import { permissions } from './permissions'; export const rolePermissions = { [roles.ADMIN]: [permissions.READ, permissions.WRITE, permissions.DELETE], [roles.USER]: [permissions.READ] };`
- [ ] utwórz plik `src/utils/authMiddleware.js` `import { verifyToken } from './auth'; import { roles } from './roles'; import { rolePermissions } from './rolePermissions'; export const authMiddleware = (req, res, next) => { const token = req.headers['authorization']; if (!token) return res.status(401).send('Access denied. No token provided.'); const decoded = verifyToken(token); if (!decoded) return res.status(400).send('Invalid token.'); req.user = decoded; next(); }; export const roleMiddleware = (role) => (req, res, next) => { if (req.user.role !== role) return res.status(403).send('Access denied.'); next(); }; export const permissionMiddleware = (permission) => (req, res, next) => { if (!rolePermissions[req.user.role].includes(permission)) return res.status(403).send('Access denied.'); next(); };`
- [ ] utwórz plik `src/utils/authUtils.js` `import { generateToken, verifyToken } from './auth'; import { roles } from './roles'; import { permissions } from './permissions'; export const authUtils = { generateToken, verifyToken, roles, permissions };`
- [ ] utwórz plik `src/utils/index.js` `export * from './auth'; export * from './roles'; export * from './permissions'; export * from './rolePermissions'; export * from './authMiddleware'; export * from './authUtils';`  
- [ ] utwórz plik `src/utils/index.js` `export * from './auth'; export * from './roles'; export * from './permissions'; export * from './rolePermissions'; export * from './authMiddleware'; export * from './authUtils';`

## 6. Konfiguracja komponentów

- [✅ ] utwórz plik `src/components/Header.jsx` `import React from 'react'; const Header = () => { return <header><h1>Panel Admina</h1></header>; }; export default Header;`
- [✅ ] utwórz plik `src/components/Footer.jsx` `import React from 'react'; const Footer = () => { return <footer><p>© 2023 Panel Admina</p></footer>; }; export default Footer;`
- [✅ ] utwórz plik `src/components/Sidebar.jsx` `import React from 'react'; const Sidebar = () => { return <aside><h2>Menu</h2></aside>; }; export default Sidebar;`
- [✅ ] utwórz plik `src/components/PrivateRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const PrivateRoute = ({ children }) => { const { authenticated } = useAuth(); return authenticated ? children : <Navigate to="/login" />; }; export default PrivateRoute;`
- [✅ ] utwórz plik `src/components/PublicRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const PublicRoute = ({ children }) => { const { authenticated } = useAuth(); return !authenticated ? children : <Navigate to="/" />; }; export default PublicRoute;`
- [✅ ] utwórz plik `src/components/NotFound.jsx` `import React from 'react'; const NotFound = () => { return <div><h2>404 - Strona nie znaleziona</h2></div>; }; export default NotFound;`
- [ ] utwórz plik `src/components/Redirect.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; const Redirect = ({ to }) => { return <Navigate to={to} />; }; export default Redirect;`
- [ ] utwórz plik `src/components/RoleBasedRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const RoleBasedRoute = ({ children, allowedRoles }) => { const { user } = useAuth(); return allowedRoles.includes(user.role) ? children : <Navigate to="/" />; }; export default RoleBasedRoute;`
- [✅ ] utwórz plik `src/components/ProtectedRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const ProtectedRoute = ({ children }) => { const { authenticated } = useAuth(); return authenticated ? children : <Navigate to="/login" />; }; export default ProtectedRoute;`
- [ ] utwórz plik `src/components/GuestRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const GuestRoute = ({ children }) => { const { authenticated } = useAuth(); return !authenticated ? children : <Navigate to="/" />; }; export default GuestRoute;`
- [ ] utwórz plik `src/components/AdminRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const AdminRoute = ({ children }) => { const { user } = useAuth(); return user.role === 'admin' ? children : <Navigate to="/" />; }; export default AdminRoute;`
- [ ] utwórz plik `src/components/UserRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const UserRoute = ({ children }) => { const { user } = useAuth(); return user.role === 'user' ? children : <Navigate to="/" />; }; export default UserRoute;`
- [ ] utwórz plik `src/components/EditorRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const EditorRoute = ({ children }) => { const { user } = useAuth(); return user.role === 'editor' ? children : <Navigate to="/" />; }; export default EditorRoute;`
- [ ] utwórz plik `src/components/ViewerRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const ViewerRoute = ({ children }) => { const { user } = useAuth(); return user.role === 'viewer' ? children : <Navigate to="/" />; }; export default ViewerRoute;`
- [ ] utwórz plik `src/components/CustomRoute.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; const CustomRoute = ({ children, condition }) => { return condition ? children : <Navigate to="/" />; }; export default CustomRoute;`
- [ ] utwórz plik `src/components/CustomRedirect.jsx` `import React from 'react'; import { Navigate } from 'react-router-dom'; const CustomRedirect = ({ to }) => { return <Navigate to={to} />; }; export default CustomRedirect;`
- [ ] utwórz plik `src/components/CustomNotFound.jsx` `import React from 'react'; const CustomNotFound = () => { return <div><h2>404 - Strona nie znaleziona</h2></div>; }; export default CustomNotFound;`
- [ ] utwórz plik `src/components/CustomError.jsx` `import React from 'react'; const CustomError = ({ message }) => { return <div><h2>Błąd</h2><p>{message}</p></div>; }; export default CustomError;`
- [ ] utwórz plik `src/components/CustomLoading.jsx` `import React from 'react'; const CustomLoading = () => { return <div><h2>Ładowanie...</h2></div>; }; export default CustomLoading;`
- [ ] utwórz plik `src/components/CustomFallback.jsx` `import React from 'react'; const CustomFallback = () => { return <div><h2>Coś poszło nie tak...</h2></div>; }; export default CustomFallback;`
- [ ] utwórz plik `src/components/CustomSuspense.jsx` `import React, { Suspense } from 'react'; const CustomSuspense = ({ children }) => { return <Suspense fallback={<div>Ładowanie...</div>}>{children}</Suspense>; }; export default CustomSuspense;`
- [ ] utwórz plik `src/components/CustomErrorBoundary.jsx` `import React, { Component } from 'react'; class CustomErrorBoundary extends Component { constructor(props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error) { return { hasError: true }; } componentDidCatch(error, errorInfo) { console.error('Błąd:', error, errorInfo); } render() { if (this.state.hasError) { return <div><h2>Coś poszło nie tak...</h2></div>; } return this.props.children; } } export default CustomErrorBoundary;`
- [ ] utwórz plik `src/components/CustomBoundary.jsx` `import React from 'react'; const CustomBoundary = ({ children }) => { return <div>{children}</div>; }; export default CustomBoundary;`
- [ ] utwórz plik `src/components/CustomProvider.jsx` `import React from 'react'; const CustomProvider = ({ children }) => { return <div>{children}</div>; }; export default CustomProvider;`
- [ ] utwórz plik `src/components/CustomContext.jsx` `import React, { createContext, useContext } from 'react'; const CustomContext = createContext(); export const CustomProvider = ({ children }) => { return <CustomContext.Provider value={{}}>{children}</CustomContext.Provider>; }; export const useCustomContext = () => useContext(CustomContext);`
- [ ] utwórz plik `src/components/CustomHook.jsx` `import { useState, useEffect } from 'react'; const useCustomHook = () => { const [data, setData] = useState(null); useEffect(() => { // Fetch data or perform some action here }, []); return data; }; export default useCustomHook;`
- [ ] utwórz plik `src/components/CustomHOC.jsx` `import React from 'react'; const withCustomHOC = (WrappedComponent) => { return (props) => { // Add custom logic here return <WrappedComponent {...props} />; }; }; export default withCustomHOC;`
- [ ] utwórz plik `src/components/CustomComponent.jsx` `import React from 'react'; const CustomComponent = () => { return <div><h2>Custom Component</h2></div>; }; export default CustomComponent;`
- [ ] utwórz plik `src/components/CustomPage.jsx` `import React from 'react'; const CustomPage = () => { return <div><h2>Custom Page</h2></div>; }; export default CustomPage;`
- [ ] utwórz plik `src/components/CustomLayout.jsx` `import React from 'react'; const CustomLayout = ({ children }) => { return <div className="custom-layout">{children}</div>; }; export default CustomLayout;`
- [ ] utwórz plik `src/components/CustomTemplate.jsx` `import React from 'react'; const CustomTemplate = ({ children }) => { return <div className="custom-template">{children}</div>; }; export default CustomTemplate;`
- [ ] utwórz plik `src/components/CustomStyle.jsx` `import React from 'react'; const CustomStyle = () => { return <style>{`.custom-style { color: red; }`}</style>; }; export default CustomStyle;`
- [ ] utwórz plik `src/components/CustomTheme.jsx` `import React from 'react'; const CustomTheme = ({ children }) => { return <div className="custom-theme">{children}</div>; }; export default CustomTheme;`
- [ ] utwórz plik `src/components/CustomConfig.jsx` `import React from 'react'; const CustomConfig = () => { return <div className="custom-config">Konfiguracja</div>; }; export default CustomConfig;`
- [ ] utwórz plik `src/components/CustomSettings.jsx` `import React from 'react'; const CustomSettings = () => { return <div className="custom-settings">Ustawienia</div>; }; export default CustomSettings;`
- [ ] utwórz plik `src/components/CustomFeature.jsx` `import React from 'react'; const CustomFeature = () => { return <div className="custom-feature">Funkcja</div>; }; export default CustomFeature;`
- [ ] utwórz plik `src/components/CustomPlugin.jsx` `import React from 'react'; const CustomPlugin = () => { return <div className="custom-plugin">Wtyczka</div>; }; export default CustomPlugin;`
- [ ] utwórz plik `src/components/CustomModule.jsx` `import React from 'react'; const CustomModule = () => { return <div className="custom-module">Moduł</div>; }; export default CustomModule;`
- [ ] utwórz plik `src/components/CustomService.jsx` `import React from 'react'; const CustomService = () => { return <div className="custom-service">Usługa</div>; }; export default CustomService;`
- [ ] utwórz plik `src/components/CustomAPI.jsx` `import React from 'react'; const CustomAPI = () => { return <div className="custom-api">API</div>; }; export default CustomAPI;`
- [ ] utwórz plik `src/components/CustomMiddleware.jsx` `import React from 'react'; const CustomMiddleware = () => { return <div className="custom-middleware">Middleware</div>; }; export default CustomMiddleware;`
- [ ] utwórz plik `src/components/CustomController.jsx` `import React from 'react'; const CustomController = () => { return <div className="custom-controller">Kontroler</div>; }; export default CustomController;`
- [ ] utwórz plik `src/components/CustomModel.jsx` `import React from 'react'; const CustomModel = () => { return <div className="custom-model">Model</div>; }; export default CustomModel;`
- [ ] utwórz plik `src/components/CustomSchema.jsx` `import React from 'react'; const CustomSchema = () => { return <div className="custom-schema">Schemat</div>; }; export default CustomSchema;`
- [ ] utwórz plik `src/components/CustomValidator.jsx` `import React from 'react'; const CustomValidator = () => { return <div className="custom-validator">Walidator</div>; }; export default CustomValidator;`
- [ ] utwórz plik `src/components/CustomTransformer.jsx` `import React from 'react'; const CustomTransformer = () => { return <div className="custom-transformer">Transformator</div>; }; export default CustomTransformer;`
- [ ] utwórz plik `src/components/CustomSerializer.jsx` `import React from 'react'; const CustomSerializer = () => { return <div className="custom-serializer">Serializator</div>; }; export default CustomSerializer;`
- [ ] utwórz plik `src/components/CustomDeserializer.jsx` `import React from 'react'; const CustomDeserializer = () => { return <div className="custom-deserializer">Deserializator</div>; }; export default CustomDeserializer;`
- [ ] utwórz plik `src/components/CustomParser.jsx` `import React from 'react'; const CustomParser = () => { return <div className="custom-parser">Parser</div>; }; export default CustomParser;`
- [ ] utwórz plik `src/components/CustomRenderer.jsx` `import React from 'react'; const CustomRenderer = () => { return <div className="custom-renderer">Renderer</div>; }; export default CustomRenderer;`
- [ ] utwórz plik `src/components/CustomCompiler.jsx` `import React from 'react'; const CustomCompiler = () => { return <div className="custom-compiler">Kompilator</div>; }; export default CustomCompiler;`
- [ ] utwórz plik `src/components/CustomBundler.jsx` `import React from 'react'; const CustomBundler = () => { return <div className="custom-bundler">Bundler</div>; }; export default CustomBundler;`
- [ ] utwórz plik `src/components/CustomOptimizer.jsx` `import React from 'react'; const CustomOptimizer = () => { return <div className="custom-optimizer">Optymalizator</div>; }; export default CustomOptimizer;`
- [ ] utwórz plik `src/components/CustomMinifier.jsx` `import React from 'react'; const CustomMinifier = () => { return <div className="custom-minifier">Minifier</div>; }; export default CustomMinifier;`
- [ ] utwórz plik `src/components/CustomTranspiler.jsx` `import React from 'react'; const CustomTranspiler = () => { return <div className="custom-transpiler">Transpiler</div>; }; export default CustomTranspiler;`
- [ ] utwórz plik `src/components/CustomLinter.jsx` `import React from 'react'; const CustomLinter = () => { return <div className="custom-linter">Linter</div>; }; export default CustomLinter;`
- [ ] utwórz plik `src/components/CustomFormatter.jsx` `import React from 'react'; const CustomFormatter = () => { return <div className="custom-formatter">Formatter</div>; }; export default CustomFormatter;`
- [ ] utwórz plik `src/components/CustomDebugger.jsx` `import React from 'react'; const CustomDebugger = () => { return <div className="custom-debugger">Debugger</div>; }; export default CustomDebugger;`
- [ ] utwórz plik `src/components/CustomProfiler.jsx` `import React from 'react'; const CustomProfiler = () => { return <div className="custom-profiler">Profiler</div>; }; export default CustomProfiler;`
- [ ] utwórz plik `src/components/CustomLogger.jsx` `import React from 'react'; const CustomLogger = () => { return <div className="custom-logger">Logger</div>; }; export default CustomLogger;`
- [ ] utwórz plik `src/components/CustomMonitor.jsx` `import React from 'react'; const CustomMonitor = () => { return <div className="custom-monitor">Monitor</div>; }; export default CustomMonitor;`
- [ ] utwórz plik `src/components/CustomWatcher.jsx` `import React from 'react'; const CustomWatcher = () => { return <div className="custom-watcher">Watcher</div>; }; export default CustomWatcher;`
- [ ] utwórz plik `src/components/CustomTester.jsx` `import React from 'react'; const CustomTester = () => { return <div className="custom-tester">Tester</div>; }; export default CustomTester;`
- [ ] utwórz plik `src/components/CustomRunner.jsx` `import React from 'react'; const CustomRunner = () => { return <div className="custom-runner">Runner</div>; }; export default CustomRunner;`
- [ ] utwórz plik `src/components/CustomExecutor.jsx` `import React from 'react'; const CustomExecutor = () => { return <div className="custom-executor">Wykonawca</div>; }; export default CustomExecutor;`
- [ ] utwórz plik `src/components/CustomScheduler.jsx` `import React from 'react'; const CustomScheduler = () => { return <div className="custom-scheduler">Harmonogram</div>; }; export default CustomScheduler;`
- [ ] utwórz plik `src/components/CustomDispatcher.jsx` `import React from 'react'; const CustomDispatcher = () => { return <div className="custom-dispatcher">Dyspozytor</div>; }; export default CustomDispatcher;`
- [ ] utwórz plik `src/components/CustomBroker.jsx` `import React from 'react'; const CustomBroker = () => { return <div className="custom-broker">Broker</div>; }; export default CustomBroker;`
- [ ] utwórz plik `src/components/CustomQueue.jsx` `import React from 'react'; const CustomQueue = () => { return <div className="custom-queue">Kolejka</div>; }; export default CustomQueue;`
- [ ] utwórz plik `src/components/CustomStream.jsx` `import React from 'react'; const CustomStream = () => { return <div className="custom-stream">Strumień</div>; }; export default CustomStream;`
- [ ] utwórz plik `src/components/CustomChannel.jsx` `import React from 'react'; const CustomChannel = () => { return <div className="custom-channel">Kanał</div>; }; export default CustomChannel;`
- [ ] utwórz plik `src/components/CustomSocket.jsx` `import React from 'react'; const CustomSocket = () => { return <div className="custom-socket">Gniazdo</div>; }; export default CustomSocket;`
- [ ] utwórz plik `src/components/CustomConnection.jsx` `import React from 'react'; const CustomConnection = () => { return <div className="custom-connection">Połączenie</div>; }; export default CustomConnection;`
- [ ] utwórz plik `src/components/CustomSession.jsx` `import React from 'react'; const CustomSession = () => { return <div className="custom-session">Sesja</div>; }; export default CustomSession;`
- [ ] utwórz plik `src/components/CustomContextPlugin.jsx` `import React from 'react'; const CustomContextPlugin = () => { return <div className="custom-context-plugin">Niestandardowa wtyczka kontekstu</div>; }; export default CustomContextPlugin;`
- [ ] utwórz plik `src/components/CustomContextModule.jsx` `import React from 'react'; const CustomContextModule = () => { return <div className="custom-context-module">Niestandardowy moduł kontekstu</div>; }; export default CustomContextModule;`
- [ ] utwórz plik `src/components/CustomContextService.jsx` `import React from 'react'; const CustomContextService = () => { return <div className="custom-context-service">Niestandardowa usługa kontekstu</div>; }; export default CustomContextService;`
- [ ] utwórz plik `src/components/CustomContextAPI.jsx` `import React from 'react'; const CustomContextAPI = () => { return <div className="custom-context-api">Niestandardowe API kontekstu</div>; }; export default CustomContextAPI;`
- [ ] utwórz plik `src/components/CustomContextMiddleware.jsx` `import React from 'react'; const CustomContextMiddleware = () => { return <div className="custom-context-middleware">Niestandardowy middleware kontekstu</div>; }; export default CustomContextMiddleware;`
- [ ] utwórz plik `src/components/CustomContextController.jsx` `import React from 'react'; const CustomContextController = () => { return <div className="custom-context-controller">Niestandardowy kontroler kontekstu</div>; }; export default CustomContextController;`
- [ ] utwórz plik `src/components/CustomContextModel.jsx` `import React from 'react'; const CustomContextModel = () => { return <div className="custom-context-model">Niestandardowy model kontekstu</div>; }; export default CustomContextModel;`
- [ ] utwórz plik `src/components/CustomContextSchema.jsx` `import React from 'react'; const CustomContextSchema = () => { return <div className="custom-context-schema">Niestandardowy schemat kontekstu</div>; }; export default CustomContextSchema;`
- [ ] utwórz plik `src/components/CustomContextValidator.jsx` `import React from 'react'; const CustomContextValidator = () => { return <div className="custom-context-validator">Niestandardowy walidator kontekstu</div>; }; export default CustomContextValidator;`
- [ ] utwórz plik `src/components/CustomContextTransformer.jsx` `import React from 'react'; const CustomContextTransformer = () => { return <div className="custom-context-transformer">Niestandardowy transformator kontekstu</div>; }; export default CustomContextTransformer;`
- [ ] utwórz plik `src/components/CustomContextSerializer.jsx` `import React from 'react'; const CustomContextSerializer = () => { return <div className="custom-context-serializer">Niestandardowy serializator kontekstu</div>; }; export default CustomContextSerializer;`
- [ ] utwórz plik `src/components/CustomContextDeserializer.jsx` `import React from 'react'; const CustomContextDeserializer = () => { return <div className="custom-context-deserializer">Niestandardowy deserializator kontekstu</div>; }; export default CustomContextDeserializer;`
- [ ] utwórz plik `src/components/CustomContextParser.jsx` `import React from 'react'; const CustomContextParser = () => { return <div className="custom-context-parser">Niestandardowy parser kontekstu</div>; }; export default CustomContextParser;`
- [ ] utwórz plik `src/components/CustomContextRenderer.jsx` `import React from 'react'; const CustomContextRenderer = () => { return <div className="custom-context-renderer">Niestandardowy renderer kontekstu</div>; }; export default CustomContextRenderer;`
- [ ] utwórz plik `src/components/CustomContextCompiler.jsx` `import React from 'react'; const CustomContextCompiler = () => { return <div className="custom-context-compiler">Niestandardowy kompilator kontekstu</div>; }; export default CustomContextCompiler;`
- [ ] utwórz plik `src/components/CustomContextBundler.jsx` `import React from 'react'; const CustomContextBundler = () => { return <div className="custom-context-bundler">Niestandardowy bundler kontekstu</div>; }; export default CustomContextBundler;`
- [ ] utwórz plik `src/components/CustomContextOptimizer.jsx` `import React from 'react'; const CustomContextOptimizer = () => { return <div className="custom-context-optimizer">Niestandardowy optymalizator kontekstu</div>; }; export default CustomContextOptimizer;`
- [ ] utwórz plik `src/components/CustomContextMinifier.jsx` `import React from 'react'; const CustomContextMinifier = () => { return <div className="custom-context-minifier">Niestandardowy minifier kontekstu</div>; }; export default CustomContextMinifier;`
- [ ] utwórz plik `src/components/CustomContextTranspiler.jsx` `import React from 'react'; const CustomContextTranspiler = () => { return <div className="custom-context-transpiler">Niestandardowy transpiler kontekstu</div>; }; export default CustomContextTranspiler;`
- [ ] utwórz plik `src/components/CustomContextLinter.jsx` `import React from 'react'; const CustomContextLinter = () => { return <div className="custom-context-linter">Niestandardowy linter kontekstu</div>; }; export default CustomContextLinter;`
- [ ] utwórz plik `src/components/CustomContextFormatter.jsx` `import React from 'react'; const CustomContextFormatter = () => { return <div className="custom-context-formatter">Niestandardowy formatter kontekstu</div>; }; export default CustomContextFormatter;`
- [ ] utwórz plik `src/components/CustomContextDebugger.jsx` `import React from 'react'; const CustomContextDebugger = () => { return <div className="custom-context-debugger">Niestandardowy debugger kontekstu</div>; }; export default CustomContextDebugger;`
- [ ] utwórz plik `src/components/CustomContextProfiler.jsx` `import React from 'react'; const CustomContextProfiler = () => { return <div className="custom-context-profiler">Niestandardowy profiler kontekstu</div>; }; export default CustomContextProfiler;`
- [ ] utwórz plik `src/components/CustomContextLogger.jsx` `import React from 'react'; const CustomContextLogger = () => { return <div className="custom-context-logger">Niestandardowy logger kontekstu</div>; }; export default CustomContextLogger;`
- [ ] utwórz plik `src/components/CustomContextMonitor.jsx` `import React from 'react'; const CustomContextMonitor = () => { return <div className="custom-context-monitor">Niestandardowy monitor kontekstu</div>; }; export default CustomContextMonitor;`
- [ ] utwórz plik `src/components/CustomContextWatcher.jsx` `import React from 'react'; const CustomContextWatcher = () => { return <div className="custom-context-watcher">Niestandardowy watcher kontekstu</div>; }; export default CustomContextWatcher;`
- [ ] utwórz plik `src/components/CustomContextTester.jsx` `import React from 'react'; const CustomContextTester = () => { return <div className="custom-context-tester">Niestandardowy tester kontekstu</div>; }; export default CustomContextTester;`
- [ ] utwórz plik `src/components/CustomContextRunner.jsx` `import React from 'react'; const CustomContextRunner = () => { return <div className="custom-context-runner">Niestandardowy runner kontekstu</div>; }; export default CustomContextRunner;`
- [ ] utwórz plik `src/components/CustomContextExecutor.jsx` `import React from 'react'; const CustomContextExecutor = () => { return <div className="custom-context-executor">Niestandardowy wykonawca kontekstu</div>; }; export default CustomContextExecutor;`
- [ ] utwórz plik `src/components/CustomContextScheduler.jsx` `import React from 'react'; const CustomContextScheduler = () => { return <div className="custom-context-scheduler">Niestandardowy harmonogram kontekstu</div>; }; export default CustomContextScheduler;`
- [ ] utwórz plik `src/components/CustomContextDispatcher.jsx` `import React from 'react'; const CustomContextDispatcher = () => { return <div className="custom-context-dispatcher">Niestandardowy dyspozytor kontekstu</div>; }; export default CustomContextDispatcher;`
- [ ] utwórz plik `src/components/CustomContextBroker.jsx` `import React from 'react'; const CustomContextBroker = () => { return <div className="custom-context-broker">Niestandardowy broker kontekstu</div>; }; export default CustomContextBroker;`
- [ ] utwórz plik `src/components/CustomContextQueue.jsx` `import React from 'react'; const CustomContextQueue = () => { return <div className="custom-context-queue">Niestandardowa kolejka kontekstu</div>; }; export default CustomContextQueue;`
- [ ] utwórz plik `src/components/CustomContextStream.jsx` `import React from 'react'; const CustomContextStream = () => { return <div className="custom-context-stream">Niestandardowy strumień kontekstu</div>; }; export default CustomContextStream;`
- [ ] utwórz plik `src/components/CustomContextChannel.jsx` `import React from 'react'; const CustomContextChannel = () => { return <div className="custom-context-channel">Niestandardowy kanał kontekstu</div>; }; export default CustomContextChannel;`
- [ ] utwórz plik `src/components/CustomContextSocket.jsx` `import React from 'react'; const CustomContextSocket = () => { return <div className="custom-context-socket">Niestandardowe gniazdo kontekstu</div>; }; export default CustomContextSocket;`
- [ ] utwórz plik `src/components/CustomContextConnection.jsx` `import React from 'react'; const CustomContextConnection = () => { return <div className="custom-context-connection">Niestandardowe połączenie kontekstu</div>; }; export default CustomContextConnection;`
- [ ] utwórz plik `src/components/CustomContextSession.jsx` `import React from 'react'; const CustomContextSession = () => { return <div className="custom-context-session">Niestandardowa sesja kontekstu</div>; }; export default CustomContextSession;`
- [ ] utwórz plik `src/components/index.js` `export { default as CustomContextLogger } from './CustomContextLogger'; export { default as CustomContextMonitor } from './CustomContextMonitor'; export { default as CustomContextWatcher } from './CustomContextWatcher'; export { default as CustomContextTester } from './CustomContextTester'; export { default as CustomContextRunner } from './CustomContextRunner'; export { default as CustomContextExecutor } from './CustomContextExecutor'; export { default as CustomContextScheduler } from './CustomContextScheduler'; export { default as CustomContextDispatcher } from './CustomContextDispatcher'; export { default as CustomContextBroker } from './CustomContextBroker'; export { default as CustomContextQueue } from './CustomContextQueue'; export { default as CustomContextStream } from './CustomContextStream'; export { default as CustomContextChannel } from './CustomContextChannel'; export { default as CustomContextSocket } from './CustomContextSocket'; export { default as CustomContextConnection } from './CustomContextConnection'; export { default as CustomContextSession } from './CustomContextSession';`

## 7. Konfiguracja routingu

- [ ] utwórz plik `src/routes/index.js` `import React from 'react'; import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Header from '../components/Header'; import Footer from '../components/Footer'; import Sidebar from '../components/Sidebar'; import NotFound from '../components/NotFound'; import PrivateRoute from '../components/PrivateRoute'; import PublicRoute from '../components/PublicRoute'; import Redirect from '../components/Redirect'; import RoleBasedRoute from '../components/RoleBasedRoute'; import ProtectedRoute from '../components/ProtectedRoute'; import GuestRoute from '../components/GuestRoute'; import AdminRoute from '../components/AdminRoute'; import UserRoute from '../components/UserRoute'; import EditorRoute from '../components/EditorRoute'; import ViewerRoute from '../components/ViewerRoute'; const AppRoutes = () => { return ( <Router> <Header /> <Sidebar /> <Routes> <Route path="/" element={<h2>Strona Główna</h2>} /> <Route path="/login" element={<h2>Logowanie</h2>} /> <PrivateRoute> <Route path="/dashboard" element={<h2>Panel</h2>} /> </PrivateRoute> <PublicRoute> <Route path="/register" element={<h2>Rejestracja</h2>} /> </PublicRoute> <RoleBasedRoute allowedRoles={['admin']}> <Route path="/admin" element={<h2>Panel Admina</h2>} /> </RoleBasedRoute> <ProtectedRoute> <Route path="/profile" element={<h2>Profil</h2>} /> </ProtectedRoute> <GuestRoute> <Route path="/guest" element={<h2>Gość</h2>} /> </GuestRoute> <AdminRoute> <Route path="/admin-only" element={<h2>Tylko dla Admina</h2>} /> </AdminRoute> <UserRoute> <Route path="/user-only" element={<h2>Tylko dla Użytkownika</h2>} /> </UserRoute> <EditorRoute> <Route path="/editor-only" element={<h2>Tylko dla Edytora</h2>} /> </EditorRoute> <ViewerRoute> <Route path="/viewer-only" element={<h2>Tylko dla Widza</h2>} /> </ViewerRoute> <Redirect to="/" /> <NotFound /> </Routes> <Footer /> </Router> ); }; export default AppRoutes;`
- [ ] utwórz plik `src/routes/PrivateRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const PrivateRoute = ({ children }) => { const { authenticated } = useAuth(); return authenticated ? children : <Navigate to="/login" />; }; export default PrivateRoute;`
- [ ] utwórz plik `src/routes/PublicRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const PublicRoute = ({ children }) => { const { authenticated } = useAuth(); return !authenticated ? children : <Navigate to="/" />; }; export default PublicRoute;`
- [ ] utwórz plik `src/routes/Redirect.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; const Redirect = ({ to }) => { return <Navigate to={to} />; }; export default Redirect;`
- [ ] utwórz plik `src/routes/RoleBasedRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const RoleBasedRoute = ({ children, allowedRoles }) => { const { user } = useAuth(); return allowedRoles.includes(user.role) ? children : <Navigate to="/" />; }; export default RoleBasedRoute;`
- [ ] utwórz plik `src/routes/ProtectedRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const ProtectedRoute = ({ children }) => { const { authenticated } = useAuth(); return authenticated ? children : <Navigate to="/login" />; }; export default ProtectedRoute;`
- [ ] utwórz plik `src/routes/GuestRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const GuestRoute = ({ children }) => { const { authenticated } = useAuth(); return !authenticated ? children : <Navigate to="/" />; }; export default GuestRoute;`
- [ ] utwórz plik `src/routes/AdminRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const AdminRoute = ({ children }) => { const { user } = useAuth(); return user.role === 'admin' ? children : <Navigate to="/" />; }; export default AdminRoute;`
- [ ] utwórz plik `src/routes/UserRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const UserRoute = ({ children }) => { const { user } = useAuth(); return user.role === 'user' ? children : <Navigate to="/" />; }; export default UserRoute;`
- [ ] utwórz plik `src/routes/EditorRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const EditorRoute = ({ children }) => { const { user } = useAuth(); return user.role === 'editor' ? children : <Navigate to="/" />; }; export default EditorRoute;`
- [ ] utwórz plik `src/routes/ViewerRoute.js` `import React from 'react'; import { Navigate } from 'react-router-dom'; import { useAuth } from '../store'; const ViewerRoute = ({ children }) => { const { user } = useAuth(); return user.role === 'viewer' ? children : <Navigate to="/" />; }; export default ViewerRoute;`
- [ ] utwórz plik `src/routes/index.js` `export { default as AppRoutes } from './AppRoutes'; export { default as PrivateRoute } from './PrivateRoute'; export { default as PublicRoute } from './PublicRoute'; export { default as Redirect } from './Redirect'; export { default as RoleBasedRoute } from './RoleBasedRoute'; export { default as ProtectedRoute } from './ProtectedRoute'; export { default as GuestRoute } from './GuestRoute'; export { default as AdminRoute } from './AdminRoute'; export { default as UserRoute } from './UserRoute'; export { default as EditorRoute } from './EditorRoute'; export { default as ViewerRoute } from './ViewerRoute';`

- [ ] utwórz plik `src/routes/index.js` `export * from './AppRoutes'; export * from './PrivateRoute'; export * from './PublicRoute'; export * from './Redirect'; export * from './RoleBasedRoute'; export * from './ProtectedRoute'; export * from './GuestRoute'; export * from './AdminRoute'; export * from './UserRoute'; export * from './EditorRoute'; export * from './ViewerRoute';`

## 8. Konfiguracja store

- [ ] utwórz plik `src/store/index.js` `import React, { createContext, useContext, useReducer } from 'react'; const initialState = { user: null, authenticated: false }; const AuthContext = createContext(initialState); const authReducer = (state, action) => { switch (action.type) { case 'LOGIN': return { ...state, user: action.payload, authenticated: true }; case 'LOGOUT': return { ...state, user: null, authenticated: false }; default: return state; } }; export const AuthProvider = ({ children }) => { const [state, dispatch] = useReducer(authReducer, initialState); return ( <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider> ); }; export const useAuth = () => useContext(AuthContext);`
- [ ] utwórz plik `src/store/actions.js` `export const login = (user) => ({ type: 'LOGIN', payload: user }); export const logout = () => ({ type: 'LOGOUT' });`
- [ ] utwórz plik `src/store/reducers.js` `import { login, logout } from './actions'; const initialState = { user: null, authenticated: false }; const authReducer = (state = initialState, action) => { switch (action.type) { case 'LOGIN': return { ...state, user: action.payload, authenticated: true }; case 'LOGOUT': return { ...state, user: null, authenticated: false }; default: return state; } }; export default authReducer;`
- [ ] utwórz plik `src/store/selectors.js` `export const selectUser = (state) => state.user; export const selectAuthenticated = (state) => state.authenticated;`
- [ ] utwórz plik `src/store/index.js` `export * from './actions'; export * from './reducers'; export * from './selectors';`
- [ ] utwórz plik `src/store/index.js` `export { AuthProvider, useAuth } from './index'; export * from './actions'; export * from './reducers'; export * from './selectors';`
- [ ] utwórz plik `src/store/index.js` `export { default as AuthProvider } from './AuthProvider'; export { default as useAuth } from './useAuth'; export * from './actions'; export * from './reducers'; export * from './selectors';`

## 9. Konfiguracja modułu

- [ ] utwórz plik `src/modules/index.js` `export { default as AuthModule } from './AuthModule'; export { default as UserModule } from './UserModule'; export { default as ProductModule } from './ProductModule';`
- [ ] utwórz plik `src/modules/AuthModule.js` `import React from 'react'; const AuthModule = () => { return <div className="auth-module">Moduł Autoryzacji</div>; }; export default AuthModule;`
- [✅ ] utwórz plik `src/modules/UserModule.js` `import React from 'react'; const UserModule = () => { return <div className="user-module">Moduł Użytkownika</div>; }; export default UserModule;` 
- [ ] utwórz plik `src/modules/ProductModule.js` `import React from 'react'; const ProductModule = () => { return <div className="product-module">Moduł Produktu</div>; }; export default ProductModule;` 
- [✅ ] utwórz plik `src/modules/ProjectsModule.jsx` `import React from 'react'; const ProjectsModule = () => { return <div className="projects-module">Moduł Projektów</div>; }; export default ProjectsModule;`
- [ ] utwórz plik `src/modules/index.js` `export * from './AuthModule'; export * from './UserModule'; export * from './ProductModule';`
- [ ] utwórz plik `src/modules/index.js` `export { AuthModule, UserModule, ProductModule } from './index'; export * from './AuthModule'; export * from './UserModule'; export * from './ProductModule';`

## 10. Konfiguracja Page

- [ ] utwórz plik `src/pages/index.js` `export { default as HomePage } from './HomePage'; export { default as LoginPage } from './LoginPage'; export { default as RegisterPage } from './RegisterPage'; export { default as DashboardPage } from './DashboardPage'; export { default as ProfilePage } from './ProfilePage'; export { default as AdminPage } from './AdminPage'; export { default as UserPage } from './UserPage'; export { default as EditorPage } from './EditorPage'; export { default as ViewerPage } from './ViewerPage';`
- [✅ ] utwórz plik `src/pages/HomePage.js` `import React from 'react'; const HomePage = () => { return <div className="home-page">Strona Główna</div>; }; export default HomePage;`
- [✅ ] utwórz plik `src/pages/LoginPage.js` `import React from 'react'; const LoginPage = () => { return <div className="login-page">Logowanie</div>; }; export default LoginPage;`
- [ ] utwórz plik `src/pages/RegisterPage.js` `import React from 'react'; const RegisterPage = () => { return <div className="register-page">Rejestracja</div>; }; export default RegisterPage;`
- [✅ ] utwórz plik `src/pages/DashboardPage.js` `import React from 'react'; const DashboardPage = () => { return <div className="dashboard-page">Panel</div>; }; export default DashboardPage;`
- [ ] utwórz plik `src/pages/ProfilePage.js` `import React from 'react'; const ProfilePage = () => { return <div className="profile-page">Profil</div>; }; export default ProfilePage;`
- [ ] utwórz plik `src/pages/AdminPage.js` `import React from 'react'; const AdminPage = () => { return <div className="admin-page">Panel Admina</div>; }; export default AdminPage;`
- [ ] utwórz plik `src/pages/UserPage.js` `import React from 'react'; const UserPage = () => { return <div className="user-page">Panel Użytkownika</div>; }; export default UserPage;`
- [ ] utwórz plik `src/pages/EditorPage.js` `import React from 'react'; const EditorPage = () => { return <div className="editor-page">Panel Edytora</div>; }; export default EditorPage;`
- [ ] utwórz plik `src/pages/ViewerPage.js` `import React from 'react'; const ViewerPage = () => { return <div className="viewer-page">Panel Widza</div>; }; export default ViewerPage;`
- [ ] utwórz plik `src/pages/index.js` `export * from './HomePage'; export * from './LoginPage'; export * from './RegisterPage'; export * from './DashboardPage'; export * from './ProfilePage'; export * from './AdminPage'; export * from './UserPage'; export * from './EditorPage'; export * from './ViewerPage';`
- [ ] utwórz plik `src/pages/index.js` `export { HomePage, LoginPage, RegisterPage, DashboardPage, ProfilePage, AdminPage, UserPage, EditorPage, ViewerPage } from './index'; export * from './HomePage'; export * from './LoginPage'; export * from './RegisterPage'; export * from './DashboardPage'; export * from './ProfilePage'; export * from './AdminPage'; export * from './UserPage'; export * from './EditorPage'; export * from './ViewerPage';`

## 11 Konfiguracja testów

## 10. Konfiguracja testów

- [ ] utwórz plik `src/tests/setupTests.js` `import '@testing-library/jest-dom/extend-expect';`
- [ ] utwórz plik `src/tests/App.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import App from '../App'; test('renders learn react link', () => { render(<App />); const linkElement = screen.getByText(/learn react/i); expect(linkElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/Header.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import Header from '../components/Header'; test('renders header', () => { render(<Header />); const headerElement = screen.getByText(/Header/i); expect(headerElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/Footer.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import Footer from '../components/Footer'; test('renders footer', () => { render(<Footer />); const footerElement = screen.getByText(/Footer/i); expect(footerElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/Sidebar.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import Sidebar from '../components/Sidebar'; test('renders sidebar', () => { render(<Sidebar />); const sidebarElement = screen.getByText(/Sidebar/i); expect(sidebarElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/NotFound.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import NotFound from '../components/NotFound'; test('renders not found', () => { render(<NotFound />); const notFoundElement = screen.getByText(/404 Not Found/i); expect(notFoundElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/PrivateRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import PrivateRoute from '../components/PrivateRoute'; test('renders private route', () => { render(<PrivateRoute />); const privateRouteElement = screen.getByText(/Private Route/i); expect(privateRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/PublicRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import PublicRoute from '../components/PublicRoute'; test('renders public route', () => { render(<PublicRoute />); const publicRouteElement = screen.getByText(/Public Route/i); expect(publicRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/Redirect.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import Redirect from '../components/Redirect'; test('renders redirect', () => { render(<Redirect to="/" />); const redirectElement = screen.getByText(/Redirect/i); expect(redirectElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/RoleBasedRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import RoleBasedRoute from '../components/RoleBasedRoute'; test('renders role based route', () => { render(<RoleBasedRoute allowedRoles={['admin']} />); const roleBasedRouteElement = screen.getByText(/Role Based Route/i); expect(roleBasedRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/ProtectedRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import ProtectedRoute from '../components/ProtectedRoute'; test('renders protected route', () => { render(<ProtectedRoute />); const protectedRouteElement = screen.getByText(/Protected Route/i); expect(protectedRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/GuestRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import GuestRoute from '../components/GuestRoute'; test('renders guest route', () => { render(<GuestRoute />); const guestRouteElement = screen.getByText(/Guest Route/i); expect(guestRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/AdminRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import AdminRoute from '../components/AdminRoute'; test('renders admin route', () => { render(<AdminRoute />); const adminRouteElement = screen.getByText(/Admin Route/i); expect(adminRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/UserRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import UserRoute from '../components/UserRoute'; test('renders user route', () => { render(<UserRoute />); const userRouteElement = screen.getByText(/User Route/i); expect(userRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/EditorRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import EditorRoute from '../components/EditorRoute'; test('renders editor route', () => { render(<EditorRoute />); const editorRouteElement = screen.getByText(/Editor Route/i); expect(editorRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/ViewerRoute.test.js` `import React from 'react'; import { render, screen } from '@testing-library/react'; import ViewerRoute from '../components/ViewerRoute'; test('renders viewer route', () => { render(<ViewerRoute />); const viewerRouteElement = screen.getByText(/Viewer Route/i); expect(viewerRouteElement).toBeInTheDocument(); });`
- [ ] utwórz plik `src/tests/index.js` `export * from './App.test'; export * from './Header.test'; export * from './Footer.test'; export * from './Sidebar.test'; export * from './NotFound.test'; export * from './PrivateRoute.test'; export * from './PublicRoute.test'; export * from './Redirect.test'; export * from './RoleBasedRoute.test'; export * from './ProtectedRoute.test'; export * from './GuestRoute.test'; export * from './AdminRoute.test'; export * from './UserRoute.test'; export * from './EditorRoute.test'; export * from './ViewerRoute.test';`
- [ ] utwórz plik `src/tests/index.js` `export * from './App.test'; export * from './Header.test'; export * from './Footer.test'; export * from './Sidebar.test'; export * from './NotFound.test'; export * from './PrivateRoute.test'; export * from './PublicRoute.test'; export * from './Redirect.test'; export * from './RoleBasedRoute.test'; export * from './ProtectedRoute.test'; export * from './GuestRoute.test'; export * from './AdminRoute.test'; export * from './UserRoute.test'; export * from './EditorRoute.test'; export * from './ViewerRoute.test';`
- [ ] utwórz plik `src/tests/index.js` `export * from './setupTests'; export * from './App.test'; export * from './Header.test'; export * from './Footer.test'; export * from './Sidebar.test'; export * from './NotFound.test'; export * from './PrivateRoute.test'; export * from './PublicRoute.test'; export * from './Redirect.test'; export * from './RoleBasedRoute.test'; export * from './ProtectedRoute.test'; export * from './GuestRoute.test'; export * from './AdminRoute.test'; export * from './UserRoute.test'; export * from './EditorRoute.test'; export * from './ViewerRoute.test';`

## 10. Konfiguracja dokumentacji

- [ ] Utwórz plik `src/docs/README.md` z podstawowymi informacjami o projekcie.
- [ ] Utwórz plik `src/docs/INSTALL.md` z instrukcjami instalacji.
- [ ] Utwórz plik `src/docs/USAGE.md` z instrukcjami użytkowania.
- [ ] Utwórz plik `src/docs/API.md` z dokumentacją API.
- [ ] Utwórz plik `src/docs/CONTRIBUTING.md` z zasadami współpracy.
- [ ] Utwórz plik `src/docs/CHANGELOG.md` z historią zmian.
- [ ] Utwórz plik `src/docs/LICENSE.md` z informacjami o licencji.
- [ ] Utwórz plik `src/docs/README.md` `# Projekt\n\n## Instalacja\n\nAby zainstalować projekt, użyj polecenia:\n\n```\nnpm install\n```\n\n## Użycie\n\nAby uruchomić projekt, użyj polecenia:\n\n```\nnpm start\n```\n\n## Dokumentacja API\n\nDokumentacja API znajduje się w pliku`API.md`.\n\n## Współpraca\n\nZasady współpracy znajdują się w pliku`CONTRIBUTING.md`.\n\n## Historia zmian\n\nHistoria zmian znajduje się w pliku`CHANGELOG.md`.\n\n## Licencja\n\nInformacje o licencji znajdują się w pliku`LICENSE.md`.\n`
- [ ] Utwórz plik `src/docs/INSTALL.md` `# Instalacja\n\nAby zainstalować projekt, użyj polecenia:\n\n```\nnpm install\n```\n`
- [ ] Utwórz plik `src/docs/USAGE.md` `# Użycie\n\nAby uruchomić projekt, użyj polecenia:\n\n```\nnpm start\n```\n\n## Komendy\n\n-`npm start` - uruchamia projekt\n- `npm test` - uruchamia testy\n- `npm run build`- buduje projekt`
- [ ] Utwórz plik `src/docs/API.md` `# Dokumentacja API\n\nDokumentacja API znajduje się w pliku`API.md`.\n`
- [ ] Utwórz plik `src/docs/CONTRIBUTING.md` `# Współpraca\n\nAby współpracować nad projektem, wykonaj następujące kroki:\n\n1. Forkuj repozytorium\n2. Stwórz nową gałąź (`git checkout -b feature/TwojaFunkcjonalność`)\n3. Wprowadź zmiany i commituj je (`git commit -m 'Dodaj nową funkcjonalność'`)\n4. Wyślij zmiany do swojego forkowanego repozytorium (`git push origin feature/TwojaFunkcjonalność`)\n5. Otwórz pull request`
- [ ] Utwórz plik `src/docs/CHANGELOG.md` `# Historia zmian\n\nWszystkie zmiany w projekcie są dokumentowane w tym pliku.\n`
- [ ] Utwórz plik `src/docs/LICENSE.md` `# Licencja\n\nProjekt jest objęty licencją MIT. Szczegóły znajdują się w pliku`LICENSE`.\n`
- [ ] Utwórz plik `src/docs/LICENSE.md` `MIT License\n\nCopyright (c) 2023\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\n```
The above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n`
- [ ] Utwórz plik `src/docs/index.js` `export * from './README.md'; export * from './INSTALL.md'; export * from './USAGE.md'; export * from './API.md'; export * from './CONTRIBUTING.md'; export * from './CHANGELOG.md'; export * from './LICENSE.md';`
- [ ] Utwórz plik `src/docs/index.js` `export { default as README } from './README.md'; export { default as INSTALL } from './INSTALL.md'; export { default as USAGE } from './USAGE.md'; export { default as API } from './API.md'; export { default as CONTRIBUTING } from './CONTRIBUTING.md'; export { default as CHANGELOG } from './CHANGELOG.md'; export { default as LICENSE } from './LICENSE.md';`
- [ ] Utwórz plik `src/docs/index.js` `export { default as README } from './README.md'; export { default as INSTALL } from './INSTALL.md'; export { default as USAGE } from './USAGE.md'; export { default as API } from './API.md'; export { default as CONTRIBUTING } from './CONTRIBUTING.md'; export { default as CHANGELOG } from './CHANGELOG.md'; export { default as LICENSE } from './LICENSE.md';`
- [ ] Utwórz plik `src/docs/index.js` `export * from './README'; export * from './INSTALL'; export * from './USAGE'; export * from './API'; export * from './CONTRIBUTING'; export * from './CHANGELOG'; export * from './LICENSE';`
- [ ] Utwórz plik `src/docs/index.js` `export * from './README.md'; export * from './INSTALL.md'; export * from './USAGE.md'; export * from './API.md'; export * from './CONTRIBUTING.md'; export * from './CHANGELOG.md'; export * from './LICENSE.md';`
- [ ] Utwórz plik `src/docs/index.js` `export * from './README'; export * from './INSTALL'; export * from './USAGE'; export * from './API'; export * from './CONTRIBUTING'; export * from './CHANGELOG'; export * from './LICENSE';`

## 11. Konfiguracja CI/CD

Aby skonfigurować CI/CD dla projektu, wykonaj następujące kroki:

1. Wybierz platformę CI/CD (np. GitHub Actions, GitLab CI, CircleCI).
2. Utwórz plik konfiguracyjny (np. `.github/workflows/ci.yml` dla GitHub Actions).
3. Skonfiguruj kroki budowania, testowania i wdrażania aplikacji.
4. Przetestuj konfigurację, wykonując push do repozytorium.
5. Sprawdź logi CI/CD, aby upewnić się, że wszystkie kroki przebiegły pomyślnie.

- [ ] Utwórz plik `.github/workflows/ci.yml` `name: CI\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v2\n      - name: Set up Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: '14'\n      - name: Install dependencies\n        run: npm install\n      - name: Run tests\n        run: npm test\n      - name: Build project\n        run: npm run build`
- [ ] Utwórz plik `.gitlab-ci.yml` `stages:\n  - build\n  - test\n  - deploy\n\nbuild:\n  stage: build\n  image: node:14\n  script:\n    - npm install\n    - npm run build\n\ntest:\n  stage: test\n  image: node:14\n  script:\n    - npm install\n    - npm test\n\ndeploy:\n  stage: deploy\n  image: node:14\n  script:\n    - npm install\n    - npm run deploy`
- [ ] Utwórz plik `circleci/config.yml` `version: 2.1\njobs:\n  build:\n    docker:\n      - image: circleci/node:14\n    steps:\n      - checkout\n      - run:\n          name: Install dependencies\n          command: npm install\n      - run:\n          name: Run tests\n          command: npm test\n      - run:\n          name: Build project\n          command: npm run build\nworkflows:\n  version: 2\n  build_and_test:\n    jobs:\n      - build`
- [ ] Utwórz plik `src/ci/index.js` `export * from './github'; export * from './gitlab'; export * from './circleci';`
- [ ] Utwórz plik `src/ci/github.js` `export const githubCI = () => { console.log('GitHub CI configuration'); };`
- [ ] Utwórz plik `src/ci/gitlab.js` `export const gitlabCI = () => { console.log('GitLab CI configuration'); };`
- [ ] Utwórz plik `src/ci/circleci.js` `export const circleCI = () => { console.log('CircleCI configuration'); };`

## 12. Konfiguracja środowiska produkcyjnego

Aby skonfigurować środowisko produkcyjne dla projektu, wykonaj następujące kroki:

1. Wybierz platformę chmurową (np. AWS, Azure, Google Cloud).
2. Skonfiguruj zasoby (np. serwery, bazy danych) w wybranej platformie.
3. Skonfiguruj procesy CI/CD dla wdrażania na środowisko produkcyjne.
4. Przetestuj wdrożenie, wykonując push do repozytorium.
5. Monitoruj aplikację w środowisku produkcyjnym, aby zapewnić jej stabilność i wydajność.

- [ ] Utwórz plik `src/prod/index.js` `export * from './aws'; export * from './azure'; export * from './gcp';`
- [ ] Utwórz plik `src/prod/aws.js` `export const awsProd = () => { console.log('AWS production configuration'); };`
- [ ] Utwórz plik `src/prod/azure.js` `export const azureProd = () => { console.log('Azure production configuration'); };`
- [ ] Utwórz plik `src/prod/gcp.js` `export const gcpProd = () => { console.log('GCP production configuration'); };`

- [ ] Utwórz plik `src/prod/index.js` `export { awsProd } from './aws'; export { azureProd } from './azure'; export { gcpProd } from './gcp';`

## 13. Konfiguracja środowiska deweloperskiego

Aby skonfigurować środowisko deweloperskie dla projektu, wykonaj następujące kroki:

1. Wybierz narzędzia i technologie (np. edytor kodu, system kontroli wersji).
1. Skonfiguruj lokalne środowisko (np. zainstaluj wymagane pakiety, ustaw zmienne środowiskowe).
3. Skonfiguruj procesy CI/CD dla środowiska deweloperskiego.
4. Przetestuj konfigurację, wykonując lokalne uruchomienie aplikacji.
5. Monitoruj aplikację w środowisku deweloperskim, aby zapewnić jej stabilność i wydajność.

- [ ] Utwórz plik `src/dev/index.js` `export * from './eslint'; export * from './prettier'; export * from './jest';`
- [ ] Utwórz plik `src/dev/eslint.js` `export const eslintConfig = () => { console.log('ESLint configuration'); };`
- [ ] Utwórz plik `src/dev/prettier.js` `export const prettierConfig = () => { console.log('Prettier configuration'); };`
- [ ] Utwórz plik `src/dev/jest.js` `export const jestConfig = () => { console.log('Jest configuration'); };`
- [ ] Utwórz plik `src/dev/index.js` `export { eslintConfig } from './eslint'; export { prettierConfig } from './prettier'; export { jestConfig } from './jest';`
- [ ] Utwórz plik `src/dev/index.js` `export * from './eslint'; export * from './prettier'; export * from './jest';`
- [ ] Utwórz plik `src/dev/index.js` `export { default as eslintConfig } from './eslint'; export { default as prettierConfig } from './prettier'; export { default as jestConfig } from './jest';`

## 14. Konfiguracja środowiska testowego

Aby skonfigurować środowisko testowe dla projektu, wykonaj następujące kroki:

1. Wybierz narzędzia i technologie (np. framework testowy, biblioteki asercji).
2. Skonfiguruj lokalne środowisko (np. zainstaluj wymagane pakiety, ustaw zmienne środowiskowe).
3. Skonfiguruj procesy CI/CD dla środowiska testowego.
4. Przetestuj konfigurację, wykonując lokalne uruchomienie testów.
5. Monitoruj aplikację w środowisku testowym, aby zapewnić jej stabilność i wydajność.

- [ ] Utwórz plik `src/test/index.js` `export * from './jest';`
- [ ] Utwórz plik `src/test/jest.js` `export const jestConfig = () => { console.log('Jest configuration'); };`
- [ ] Utwórz plik `src/test/index.js` `export { jestConfig } from './jest';`

## 15. Konfiguracja środowiska staging

Aby skonfigurować środowisko staging dla projektu, wykonaj następujące kroki:

1. Wybierz narzędzia i technologie (np. platforma chmurowa, system kontenerów).
2. Skonfiguruj zasoby (np. serwery, bazy danych) w wybranej platformie.
3. Skonfiguruj procesy CI/CD dla wdrażania na środowisko staging.
4. Przetestuj wdrożenie, wykonując push do repozytorium.
5. Monitoruj aplikację w środowisku staging, aby zapewnić jej stabilność i wydajność.

- [ ] Utwórz plik `src/staging/index.js` `export * from './aws'; export * from './azure'; export * from './gcp';`
- [ ] Utwórz plik `src/staging/aws.js` `export const awsStaging = () => { console.log('AWS staging configuration'); };`
- [ ] Utwórz plik `src/staging/azure.js` `export const azureStaging = () => { console.log('Azure staging configuration'); };`
- [ ] Utwórz plik `src/staging/gcp.js` `export const gcpStaging = () => { console.log('GCP staging configuration'); };`

- [ ] Utwórz plik `src/staging/index.js` `export { awsStaging } from './aws'; export { azureStaging } from './azure'; export { gcpStaging } from './gcp';`

## 16. Konfiguracja środowiska lokalnego

Aby skonfigurować środowisko lokalne dla projektu, wykonaj następujące kroki:

1. Wybierz narzędzia i technologie (np. edytor kodu, system kontroli wersji).
2. Skonfiguruj lokalne środowisko (np. zainstaluj wymagane pakiety, ustaw zmienne środowiskowe).
3. Skonfiguruj procesy CI/CD dla środowiska lokalnego.
4. Przetestuj konfigurację, wykonując lokalne uruchomienie aplikacji.
5. Monitoruj aplikację w środowisku lokalnym, aby zapewnić jej stabilność i wydajność.

- [ ] Utwórz plik `src/local/index.js` `export * from './eslint'; export * from './prettier'; export * from './jest';`
- [ ] Utwórz plik `src/local/eslint.js` `export const eslintConfig = () => { console.log('ESLint configuration'); };`
- [ ] Utwórz plik `src/local/prettier.js` `export const prettierConfig = () => { console.log('Prettier configuration'); };`
- [ ] Utwórz plik `src/local/jest.js` `export const jestConfig = () => { console.log('Jest configuration'); };`
- [ ] Utwórz plik `src/local/index.js` `export { eslintConfig } from './eslint'; export { prettierConfig } from './prettier'; export { jestConfig } from './jest';`

### Koniec FRONTEND?

## FRONTEND-🧱 Co mamy zrobione?

| Element                | Status                    |
|------------------------|---------------------------|
| Responsive Sidebar     | ✅ wjeżdża z klasą       |
| Hamburger menu         | ✅ styl i animacja       |
| Motyw ciemny/jasny     | ✅ z przełącznikiem      |
| Ikony w menu           | ✅ wyświetlane poprawnie |
| Layout                 | ✅ Navbar i stopka spójne|
| Context                | ✅ działa z ThemeContext |

Będzie BACKEND!

## BACKEND

Kolejny krok w tworzeniu aplikacji. W tym kroku skonfigurujemy środowisko backendowe, które będzie obsługiwać logikę biznesową, zarządzać danymi i komunikować się z frontendem.

## 17. Konfiguracja środowiska backendowego

Aby skonfigurować środowisko backendowe dla projektu, wykonaj następujące kroki:

## Wybierz narzędzia i technologie (np. framework backendowy, baza danych).

- [✅] zainstaluj Node.js i Express.js jako framework backendowy (np. `npm install express`)
- [✅] zainstaluj PostgreSQL lub MongoDB jako bazę danych (np. `npm install pg` dla PostgreSQL lub `npm install mongoose` dla MongoDB)
- [✅] zainstaluj Sequelize jako ORM (np. `npm install sequelize`)
- [✅] zainstaluj Axios do komunikacji z frontendem (np. `npm install axios`)
- [✅] zainstaluj JWT do autoryzacji (np. `npm install jsonwebtoken`)
- [✅] zainstaluj dotenv do zarządzania zmiennymi środowiskowymi (np. `npm install dotenv`)
- [✅] zainstaluj morgan do logowania żądań HTTP (np. `npm install morgan`)
- [✅] zainstaluj cors do obsługi CORS (np. `npm install cors`)
- [✅] zainstaluj bcrypt do haszowania haseł (np. `npm install bcrypt`)
- [✅] zainstaluj nodemon do automatycznego restartu serwera podczas zmian w kodzie (np. `npm install nodemon`)
- [✅] zainstaluj body-parser do parsowania ciał żądań (np. `npm install body-parser`)

## Skonfiguruj lokalne środowisko (np. zainstaluj wymagane pakiety, ustaw zmienne środowiskowe)

- [✅] utwórz plik `package.json` z podstawowymi informacjami o projekcie
- [✅] utwórz plik `.env` z konfiguracją bazy danych i JWT
- [✅] utwórz plik `src/server.js` z podstawową konfiguracją serwera Express
- [ ] utwórz plik `src/routes/index.js` z podstawowymi trasami
- [ ] utwórz plik `src/controllers/index.js` z podstawowymi kontrolerami
- [ ] utwórz plik `src/models/index.js` z podstawowymi modelami Sequelize
- [ ] utwórz plik `src/middleware/auth.js` z middleware do autoryzacji JWT
- [ ] utwórz plik `src/middleware/error.js` z middleware do obsługi błędów
- [ ] utwórz plik `src/utils/logger.js` z konfiguracją loggera
- [ ] utwórz plik `src/utils/response.js` z funkcjami pomocniczymi do formatowania odpowiedzi
- [ ] utwórz plik `src/config/database.js` z konfiguracją połączenia z bazą danych
- [ ] utwórz plik `src/config/jwt.js` z konfiguracją JWT
- [ ] utwórz plik `src/config/server.js` z konfiguracją serwera Express
- [ ] utwórz plik `src/config/index.js` z eksportem wszystkich konfiguracji
- [ ] utwórz plik `src/index.js` z uruchomieniem serwera Express
- [ ] utwórz plik `src/index.js` `import express from 'express'; import { config } from './config'; import { routes } from './routes'; const app = express(); app.use(express.json()); app.use(routes); app.listen(config.port, () => { console.log(`Server is running on port ${config.port}`); });`
- [ ] utwórz plik `src/config/index.js` `export * from './database'; export * from './jwt'; export * from './server';`
- [ ] utwórz plik `src/config/database.js` `import { Sequelize } from 'sequelize'; import { config } from './index'; const sequelize = new Sequelize(config.databaseUrl); export { sequelize };`
- [ ] utwórz plik `src/config/jwt.js` `export const jwtConfig = { secret: process.env.JWT_SECRET || 'default_secret' };`
- [ ] utwórz plik `src/config/server.js` `export const serverConfig = { port: process.env.PORT || 3000 };`
- [ ] utwórz plik `src/config/index.js` `export * from './database'; export * from './jwt'; export * from './server';`
- [ ] utwórz plik `src/routes/index.js` `import { Router } from 'express'; import { authMiddleware } from '../middleware/auth'; const router = Router(); router.use(authMiddleware); export { router };`
- [ ] utwórz plik `src/routes/index.js` `export * from './authRoutes'; export * from './userRoutes'; export * from './productRoutes';`
- [ ] utwórz plik `src/routes/authRoutes.js` `import { Router } from 'express'; import { login, register } from '../controllers/authController'; const router = Router(); router.post('/login', login); router.post('/register', register); export { router as authRoutes };`
- [ ] utwórz plik `src/routes/userRoutes.js` `import { Router } from 'express'; import { getUser, updateUser } from '../controllers/userController'; const router = Router(); router.get('/:id', getUser); router.put('/:id', updateUser); export { router as userRoutes };`
- [ ] utwórz plik `src/routes/productRoutes.js` `import { Router } from 'express'; import { getProducts, createProduct } from '../controllers/productController'; const router = Router(); router.get('/', getProducts); router.post('/', createProduct); export { router as productRoutes };`
- [ ] utwórz plik `src/controllers/index.js` `export * from './authController'; export * from './userController'; export * from './productController';`
- [ ] utwórz plik `src/controllers/authController.js` `import { User } from '../models'; import { jwtConfig } from '../config'; import jwt from 'jsonwebtoken'; export const login = async (req, res) => { const { email, password } = req.body; const user = await User.findOne({ where: { email } }); if (!user || !user.validatePassword(password)) { return res.status(401).json({ message: 'Invalid credentials' }); } const token = jwt.sign({ id: user.id }, jwtConfig.secret); res.json({ token }); }; export const register = async (req, res) => { const { email, password } = req.body; const user = await User.create({ email, password }); res.status(201).json(user); };`
- [ ] utwórz plik `src/controllers/userController.js` `import { User } from '../models'; export const getUser = async (req, res) => { const user = await User.findByPk(req.params.id); if (!user) { return res.status(404).json({ message: 'User not found' }); } res.json(user); }; export const updateUser = async (req, res) => { const user = await User.findByPk(req.params.id); if (!user) { return res.status(404).json({ message: 'User not found' }); } await user.update(req.body); res.json(user); };`
- [ ] utwórz plik `src/controllers/productController.js` `import { Product } from '../models'; export const getProducts = async (req, res) => { const products = await Product.findAll(); res.json(products); }; export const createProduct = async (req, res) => { const product = await Product.create(req.body); res.status(201).json(product); };`
- [ ] utwórz plik `src/models/index.js` `export * from './userModel'; export * from './productModel';`
- [ ] utwórz plik `src/models/userModel.js` `import { DataTypes } from 'sequelize'; import { sequelize } from '../config'; export const User = sequelize.define('User', { email: { type: DataTypes.STRING, allowNull: false, unique: true }, password: { type: DataTypes.STRING, allowNull: false }, }, { timestamps: true }); User.prototype.validatePassword = function (password) { // Implement password validation logic here return this.password === password; };`
- [ ] utwórz plik `src/models/productModel.js` `import { DataTypes } from 'sequelize'; import { sequelize } from '../config'; export const Product = sequelize.define('Product', { name: { type: DataTypes.STRING, allowNull: false }, price: { type: DataTypes.FLOAT, allowNull: false }, description: { type: DataTypes.TEXT, allowNull: true }, }, { timestamps: true });`
- [ ] utwórz plik `src/middleware/auth.js` `import jwt from 'jsonwebtoken'; import { jwtConfig } from '../config'; export const authMiddleware = (req, res, next) => { const token = req.headers['authorization']; if (!token) { return res.status(401).json({ message: 'No token provided' }); } jwt.verify(token, jwtConfig.secret, (err, decoded) => { if (err) { return res.status(500).json({ message: 'Failed to authenticate token' }); } req.userId = decoded.id; next(); }); };`
- [ ] utwórz plik `src/middleware/error.js` `export const errorMiddleware = (err, req, res, next) => { console.error(err.stack); res.status(500).json({ message: 'Internal server error' }); };`
- [ ] utwórz plik `src/utils/logger.js` `import morgan from 'morgan'; export const logger = morgan('combined');`
- [ ] utwórz plik `src/utils/response.js` `export const sendResponse = (res, data, status = 200) => { res.status(status).json(data); };`
- [ ] utwórz plik `src/utils/index.js` `export * from './logger'; export * from './response';`
- [ ] utwórz plik `src/index.js` `import express from 'express'; import { config } from './config'; import { routes } from './routes'; import { errorMiddleware } from './middleware/error'; import { logger } from './utils/logger'; const app = express(); app.use(express.json()); app.use(logger); app.use(routes); app.use(errorMiddleware); app.listen(config.port, () => { console.log(`Server is running on port ${config.port}`); });`

## 18. Skonfiguruj procesy CI/CD dla środowiska backendowego

Aby skonfigurować procesy CI/CD dla środowiska backendowego, wykonaj następujące kroki:

1. Wybierz platformę CI/CD (np. GitHub Actions, GitLab CI, CircleCI).
2. Utwórz plik konfiguracyjny (np. `.github/workflows/ci.yml` dla GitHub Actions).
3. Skonfiguruj kroki budowania, testowania i wdrażania aplikacji.
4. Przetestuj konfigurację, wykonując push do repozytorium.
5. Sprawdź logi CI/CD, aby upewnić się, że wszystkie kroki przebiegły pomyślnie.

- [ ] Utwórz plik `.github/workflows/ci.yml` `name: CI\non:\n  push:\n    branches:\n      - main\n  pull_request:\n    branches:\n      - main\njobs:\n  build:\n    runs-on: ubuntu-latest\n    steps:\n      - name: Checkout code\n        uses: actions/checkout@v2\n      - name: Set up Node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: '14'\n      - name: Install dependencies\n        run: npm install\n      - name: Run tests\n        run: npm test\n      - name: Build project\n        run: npm run build`
- [ ] Utwórz plik `.gitlab-ci.yml` `stages:\n  - build\n  - test\n  - deploy\nbuild:\n  stage: build\n  script:\n    - npm install\n    - npm run build\ntest:\n  stage: test\n  script:\n    - npm test\ndeploy:\n  stage: deploy\n  script:\n    - npm run deploy`
- [ ] Utwórz plik `circleci/config.yml` `version: 2.1\njobs:\n  build:\n    docker:\n      - image: circleci/node:14\n    steps:\n      - checkout\n      - run:\n          name: Install dependencies\n          command: npm install\n      - run:\n          name: Run tests\n          command: npm test\n      - run:\n          name: Build project\n          command: npm run build\nworkflows:\n  version: 2\n  build_and_test:\n    jobs:\n      - build`
- [ ] Utwórz plik `src/ci/index.js` `export * from './github'; export * from './gitlab'; export * from './circleci';`
- [ ] Utwórz plik `src/ci/github.js` `export const githubCI = () => { console.log('GitHub CI configuration'); };`
- [ ] Utwórz plik `src/ci/gitlab.js` `export const gitlabCI = () => { console.log('GitLab CI configuration'); };`
- [ ] Utwórz plik `src/ci/circleci.js` `export const circleCI = () => { console.log('CircleCI configuration'); };`
- [ ] Utwórz plik `src/ci/index.js` `export { githubCI } from './github'; export { gitlabCI } from './gitlab'; export { circleCI } from './circleci';`