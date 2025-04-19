import { useEffect, useState } from "react";
import Footer from "../Components/Foter";
import Header from "../Components/Header";
import NewsCard from "../Components/NewsCard";
import SubHeader from "../Components/Sub_header";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function HomePage() {

    const navigate = useNavigate();

    function decodeToken(token) {
        try {
            const payload = token.split('.')[1];
            return JSON.parse(atob(payload));
        } catch (err) {
            console.error("Invalid token:", err);
            return null;
        }
    }

    const [decoded, setDecoded] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const decodedToken = decodeToken(token);
            setDecoded(decodedToken);
            console.log(decoded);

            // Access userRole from the decoded token
            const userRole = decodedToken?.user?.role;  

            if (userRole === 'admin') {
                navigate('/AdminPanel');
            }
            console.log(userRole);
        } else {
            console.log('Token not received. Logging out...');
            toast.error('No token found, logging out...');
            setTimeout(() => {
                navigate('/');
            }, 2000);
        }
    }, [navigate]);

    useEffect(() => {
        if (decoded) {
            console.log("Decoded state updated:", decoded);
        }
    }, [decoded]);

    return (
        <>
            <Header />
            <SubHeader />
            <NewsCard />
            <Footer />
        </>
    );
}
