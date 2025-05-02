import { Pen, Sun, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between border-b">
            {/* Left Section */}
            <div className="flex items-center space-x-6 p-6 border-r-2 border-indigo-950  rounded-md">
                <div className="font-semibold text-xl">
                    Paperio
                </div>
                <div className="flex items-center space-x-2">
                    <Sun className="w-4 h-4 text-gray-600" />
                    <div className="text-sm text-gray-600">
                        <p className="font-medium">24 Dec, 2024</p>
                        <p className="text-xs">08:25 AM</p>
                    </div>
                </div>
            </div>

            {/* Center Section */}
            <div className="flex-1 flex items-center justify-center p-6 border-r-2 border-indigo-950 rounded-md">
                <h1 className="text-6xl font-serif font-bold tracking-wide cursor-pointer"
                    onClick={() => navigate(`/homepage`)}>
                    BREAKING NEWS PORTAL
                </h1>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-6  p-6">
                <button className="px-4 py-2 flex items-center space-x-2 cursor-pointer bg-black text-white rounded-3xl text-sm hover:bg-gray-800 transition-colors"
                    onClick={() => { navigate('/createPost') }}>

                    <Pen className="w-4 h-4" />

                    <span>Write News</span>

                </button>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <User className="w-6 h-6 text-gray-700" />
                </button>
            </div>
        </div>
    );
}