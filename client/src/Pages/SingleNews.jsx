import Header from "../Components/Header";
import RelatableNews from "../Components/ReletableNews";
import img2 from "../assets/img2.png";
import SubHeader from "../Components/Sub_header";
import Footer from "../Components/Foter";
import Commentsection from "../Components/Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function SingleNews() {
    const [News, setNews] = useState(null);  // null at start
    const { newsID } = useParams();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch(`http://localhost:4040/api/news/single/${newsID}`);
                const data = await res.json();
                console.log(data.news);
                setNews(data.news);
            } catch (err) {
                console.error("Failed to fetch news:", err);
            }
        };

        fetchNews();
    }, [newsID]);

    return (
        <>
            <Header />
            <SubHeader />

            <div className="flex border-t-6 mt-4 border-b-2">
                <div className="p-8 space-y-2 grow basis-6xl rounded-md border-r-2 border-indigo-950">
                    {News ? (
                        <div>
                            <h1 className="border-2 text-5xl font-bold p-2">
                                {News.title}
                            </h1>

                            {News.image && News.image.length > 0 ? (
                                <img className="w-6xl my-4" src={News.image[0].path} alt="news" />
                            ) : (
                                <img className="w-6xl" src={img2} alt="default" />
                            )}

                            <p className="text-gray-600 leading-relaxed">
                                {News.description}
                            </p>
                        </div>
                    ) : (
                        <div className="text-gray-400 italic">Fetching news...</div>
                    )}
                </div>

                <RelatableNews />
            </div>

            <div className="mb-6 border-b-6">
                <Commentsection />
            </div>

            <Footer />
        </>
    );
}
