import { Newspaper, ShieldUser } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AdminPanel() {
    const adminNavbar = ["Dashboard", "Users", "News"];
    const [users, setUsers] = useState([]);


    const admin = {
        name: "Admin Name",
        email: "admin@admin.com",
    };

    //fetch users
    useEffect(() => {

        fetch("http://localhost:4040/api/admin/Users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((response) => response.json())
            .then((Users) => {
                console.log(Users)

                setUsers(Users)
                if (Users.success === true) {
                    toast.success(Users.message)
                    return
                }
                else {
                    toast.error(Users.message)
                }
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    return (
        <div className="m-7">
            {/* Header Section */}
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
                        <li className="font-bold cursor-pointer hover:text-neutral-600" key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Users Table */}
            <div className="shadow-lg rounded-3xl ">
                <h1 className="text-3xl font-semibold text-center mb-4">Users</h1>
                <div >
                    <table className="w-full border-collapse  border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className=" p-3 text-left">NAME</th>
                                <th className=" p-3 text-left">EMAIL</th>
                                <th className=" p-3 text-left">ROLE</th>
                                <th className=" p-3 text-left">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users && users.length > 0 ? (
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td className="p-3">{user.name}</td>
                                        <td className="p-3">{user.email}</td>
                                        <td className="p-3">{user.role}</td>
                                        <td className="p-3">
                                            <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="p-3 text-center text-gray-500">
                                        No users found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
