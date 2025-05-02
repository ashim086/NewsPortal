import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export default function SubHeader() {

    const [category, setCategory] = useState([])
    useEffect(() => {

        const fetchCateopry = async () => {
            const data = await fetch("http://localhost:4040/api/category/all")
            const categories = await data.json()
            console.log(categories)
            setCategory(categories.data)
        }

        fetchCateopry()
    }, [])


    return (
        <div className="flex justify-between items-center border-b-2 ">
            {/* Left - Newspaper Section */}
            <div className="border-r-2 py-3 px-6">
                <button className="flex items-center space-x-2 hover:text-gray-600 transition-colors">
                    <span className="font-medium">Newspaper</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                    </svg>
                </button>
            </div>

            {/* Center - Navigation */}
            <nav className="flex px-6">
                <ul className="flex items-center space-x-8">
                    {category.map((item,index) => (
                        <li key={index}>
                            <button className="py-3 text-sm hover:text-gray-600 transition-colors relative group cursor-pointer">
                                {item.categoryName}
                                <p className="absolute inset-x-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform" />
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Right - Search */}
            <div className="border-l-2 py-3 px-6">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Search className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}