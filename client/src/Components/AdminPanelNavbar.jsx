import { Newspaper, ShieldUser } from "lucide-react";
import { Navigate, useNavigate } from "react-router-dom";


export default function AdminPanelNavbar() {
    const adminNavbar = ["Dashboard", "Users", "News"];
    const navigate = useNavigate()
    const admin = {
        name: "Admin Name",
        email: "admin@admin.com",
    };

    return (
        <>
            {/* Header Section */}
            <div className="m-7">

                <div className="flex space-x-7 justify-between shadow-lg rounded-3xl p-5 my-6">
                    {/* Admin Info */}
                    <div>
                        <ShieldUser />
                        <h1 className="font-bold">{admin.name}</h1>
                        <p className="font-bold">{admin.email}</p>
                    </div>

                    {/* Admin Panel Title */}
                    <div className="flex items-center space-x-7">
                        <h1 className="text-6xl font-bold tracking-widest">ADMIN PANEL</h1>
                        <Newspaper className="size-[54px]" />
                    </div>

                    {/* Navbar */}
                    <ul className="flex space-x-7 items-center">
                        {adminNavbar.map((item, index) => (
                            <button className=" hover:bg-amber-50 transition-all rounded-3xl px-4" onClick={() => {
                                navigate(`/adminpanel/${item.toLowerCase()}`)
                            }}>
                                <li className="font-bold cursor-pointer hover:text-neutral-600" key={index}>
                                    {item}
                                </li>
                            </button>
                        ))}
                    </ul>
                </div>

            </div>
        </>


    )
}