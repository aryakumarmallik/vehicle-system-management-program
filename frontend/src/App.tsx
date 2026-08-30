
import AuthSlider from './components/AuthSlider';
import VehicleManagement from './components/vehicle-management';

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return (
            <AuthSlider onLoginSuccess={() => setIsAuthenticated(true)} />
        );
    }

    return (
        <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-blue-500/30">

            <nav className="bg-gray-900 border-b border-gray-800 p-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-sm">
                <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 p-2 rounded-lg shadow-lg shadow-blue-500/20">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                        </svg>
                    </div>
                    <h1 className="text-xl font-bold tracking-wide text-gray-100">Vehicle Management</h1>
                </div>

                <button
                    onClick={() => setIsAuthenticated(false)}
                    className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-5 py-2 rounded-lg font-medium transition-all duration-200 border border-gray-700 hover:border-gray-600 text-sm"
                >
                    Logout
                </button>
            </nav>

            <main className="p-6 md:p-8 max-w-7xl mx-auto">
                <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-2xl overflow-hidden min-h-[70vh]">
                    <VehicleManagement />
                </div>
            </main>

        </div>
    );
}
