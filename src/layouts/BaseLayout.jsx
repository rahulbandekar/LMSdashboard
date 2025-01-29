import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

export default function BaseLayout({ children}) {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-1 flex flex-col ml-64">
                <Header />
                <main className="flex-1 p-6 overflow-auto">
                    {children}
                </main>
            </div>
            
        </div>
    )
}