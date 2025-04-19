import Header from "../Components/Header";
import RelatableNews from "../Components/ReletableNews";
import img2 from "../assets/img2.png"
import SubHeader from "../Components/Sub_header";
import Footer from "../Components/Foter";
import Commentsection from "../Components/Comments";

export default function SingleNews() {

    const news = [
        {
            title: "Catastrophic Volcanic Eruption in Indonesia Forces Mass Evacuations",
            img: "",
            content: "A massive volcanic eruption has struck Indonesia's Mount Merapi, one of the most active volcanoes in the world, sending towering ash clouds 20,000 feet into the sky and triggering widespread evacuations. Authorities have issued the highest-level alert as lava flows rapidly down the mountainside, threatening nearby villages.   Thousands of residents are fleeing their homes, while emergency services are mobilizing to respond to the disaster.Air traffic has been disrupted, with flights grounded across the region due to ash in the atmosphere, posing a significant hazard to aviation.Seismologists have warned that further eruptions are possible, as the volcano continues to rumble and emit gases.Rescue teams are on high alert, as officials prepare for potential pyroclastic flows and landslides.Residents are being urged to stay in safe zones as efforts to assess the full scale of the damage are underway.  This eruption comes after weeks of increased seismic activity, making it one of the most severe volc events in recent history for Indonesia, a country located along the Pacific Ring of Fire."
        }
    ]
    return (
        <>
            <Header />
            <SubHeader />
            <div className="flex border-t-6 mt-4  border-b-2">

                <div className="p-8 space-y-2 grow basis-6xl rounded-md border-r-2 border-indigo-950">

                    {
                        news.map((news) => (
                            <div>

                                <h1 className="border-2 text-5xl font-bold p-2">
                                    {news.title}
                                </h1>

                                <img className="w-6xl" src={img2} />

                                <p className=" text-gray-600 leading-relaxed">
                                    {news.content}</p>
                            </div>
                        ))
                    }

                </div>
                <RelatableNews />

            </div>
            <div className="mb-6 border-b-6">
                <Commentsection />
            </div>


            <Footer />

        </>
    )
}