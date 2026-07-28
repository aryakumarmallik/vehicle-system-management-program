import React, { useState } from 'react';
import { User, Lock, Mail } from 'lucide-react';

interface AuthSliderProps {
    onLoginSuccess: () => void;
}

export default function AuthSlider({ onLoginSuccess }: AuthSliderProps) {
    const [isLogin, setIsLogin] = useState(true);

    const [loginUsername, setLoginUsername] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const [regUsername, setRegUsername] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regMessage, setRegMessage] = useState('');

    // log in
    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoginMessage('');

        try {
            const response = await fetch('http://localhost:8080/api/users/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username: loginUsername, password: loginPassword }),
            });

            if (response.ok) {
                onLoginSuccess();
            } else {
                const errorText = await response.text();
                setLoginMessage(errorText || "Invalid username or password");
            }
        } catch (error) {
            setLoginMessage("Could not connect to the server.");
        }
    };

    // registration
    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setRegMessage('');

        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: regUsername,
                    email: regEmail,
                    password: regPassword
                }),
            });

            const textResponse = await response.text();

            if (response.ok) {
                setRegMessage("Registration successful! You can now login.");
                setRegUsername('');
                setRegEmail('');
                setRegPassword('');
                setTimeout(() => setIsLogin(true), 2000);
            } else {
                setRegMessage(textResponse || "Registration failed");
            }
        } catch (error) {
            setRegMessage("Could not connect to the server.");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-950 font-sans p-4">
            <div className="relative w-full max-w-4xl h-[550px] bg-[#1a1a20] rounded-3xl shadow-[0_0_40px_rgba(37,99,235,0.15)] overflow-hidden border border-gray-800">

                {/* login form */}
                <div className={`absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center px-12 transition-all duration-700 ease-in-out z-10 ${isLogin ? 'opacity-100 translate-x-0 pointer-events-auto delay-100' : 'opacity-0 -translate-x-20 pointer-events-none'}`}>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Login</h2>

                    <form onSubmit={handleLoginSubmit} className="space-y-5">
                        <div className="relative">
                            <input type="text" placeholder="Username" value={loginUsername} onChange={(e) => setLoginUsername(e.target.value)} className="w-full bg-[#25252c] text-white rounded-full py-3.5 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500" required/>
                            <User className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        </div>

                        <div className="relative">
                            <input type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} className="w-full bg-[#25252c] text-white rounded-full py-3.5 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500" required/>
                            <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        </div>

                        {loginMessage && <p className="text-red-500 text-sm text-center">{loginMessage}</p>}

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full py-3.5 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)] mt-2">
                            Login
                        </button>

                        <p className="text-gray-400 text-sm text-center mt-6">
                            Don't have an account?{' '}
                            <button type="button" onClick={() => { setIsLogin(false); setLoginMessage(''); }} className="text-blue-500 font-semibold hover:underline">Signup</button>
                        </p>
                    </form>
                </div>

                {/* registration form */}
                <div className={`absolute top-0 right-0 w-1/2 h-full flex flex-col justify-center px-12 transition-all duration-700 ease-in-out z-10 ${!isLogin ? 'opacity-100 translate-x-0 pointer-events-auto delay-100' : 'opacity-0 translate-x-20 pointer-events-none'}`}>
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Register</h2>

                    <form onSubmit={handleRegisterSubmit} className="space-y-5">
                        <div className="relative">
                            <input type="text" placeholder="Username" value={regUsername} onChange={(e) => setRegUsername(e.target.value)} className="w-full bg-[#25252c] text-white rounded-full py-3.5 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500" required/>
                            <User className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        </div>

                        <div className="relative">
                            <input type="email" placeholder="Email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} className="w-full bg-[#25252c] text-white rounded-full py-3.5 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500" required/>
                            <Mail className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        </div>

                        <div className="relative">
                            <input type="password" placeholder="Password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} className="w-full bg-[#25252c] text-white rounded-full py-3.5 px-6 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500" required/>
                            <Lock className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        </div>

                        {regMessage && <p className={regMessage.includes("successful") ? "text-green-500 text-sm text-center" : "text-red-500 text-sm text-center"}>{regMessage}</p>}

                        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-full py-3.5 transition-colors shadow-[0_0_15px_rgba(37,99,235,0.4)] mt-2">
                            Register
                        </button>

                        <p className="text-gray-400 text-sm text-center mt-6">
                            Already have an account?{' '}
                            <button type="button" onClick={() => { setIsLogin(true); setRegMessage(''); }} className="text-blue-500 font-semibold hover:underline">Login</button>
                        </p>
                    </form>
                </div>

                {/* slide animation */}
                <div className={`absolute top-0 left-0 w-1/2 h-full z-20 transition-transform duration-700 ease-in-out`} style={{ transform: isLogin ? 'translateX(100%)' : 'translateX(0%)' }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 shadow-2xl transition-all duration-700 ease-in-out flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center px-12 text-center">
                            <div className={`absolute transition-all duration-700 ease-in-out flex flex-col items-center ${isLogin ? 'opacity-100 translate-x-0 delay-100' : 'opacity-0 -translate-x-12'}`}>
                                <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">WELCOME<br/>BACK !</h2>
                                <p className="text-blue-100 text-sm leading-relaxed">Enter your credentials to<br/>access your account</p>
                            </div>
                            <div className={`absolute transition-all duration-700 ease-in-out flex flex-col items-center ${!isLogin ? 'opacity-100 translate-x-0 delay-100' : 'opacity-0 translate-x-12'}`}>
                                <h2 className="text-4xl font-bold text-white mb-4 tracking-wide">WELCOME</h2>
                                <p className="text-blue-100 text-sm leading-relaxed">Register your self<br/>to access<br/>vehicle management dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
