import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Navbar />
            <div className="layout__content">
                <Sidebar />
                <main>
                    {children}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;