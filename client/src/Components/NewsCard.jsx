import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/image.png";

export default function NewsCard() {
    const navigate = useNavigate();

    const newsData = {
        mainArticle: {
            id: 1,
            title: "Record-Breaking Sale: Rare Picasso Painting Fetches $150 Million at Auction",
            content: "A never-before-seen Pablo Picasso painting has shattered records, selling for an astonishing $150 million at a Sotheby's auction in New York. The sale marks one of the highest prices ever paid for a work of art. The newly discovered masterpiece, believed to have been created during Picasso's early career, was unveiled just weeks before the auction, causing a frenzy among collectors and art historians. Sotheby's described the painting as a \"once-in-a-lifetime find that reflects the genius of Picasso's evolving style. The identity of the buyer has not yet been disclosed, but experts are already calling this sale a monumental moment in art history. The auction house confirmed that the bidding war for the piece was highly competitive, involving collectors from across the globe. This record-breaking sale highlights Picasso's.",
            image: img1
        },
        secondaryArticle: {
            id: 2,
            title: "Catastrophic Volcanic Eruption in Indonesia Forces Mass Evacuations",
            content: "A massive volcanic eruption has struck Indonesia's Mount Merapi, one of the most active volcanoes in the world, sending towering ash clouds 20,000 feet into the sky and triggering widespread evacuations. Authorities have issued the highest-level alert as lava flows rapidly down the mountainside, threatening nearby villages. Thousands of residents are fleeing their homes, while emergency services are mobilizing to respond to the disaster. Air traffic has been disrupted, with flights grounded across the region due to ash in the atmosphere, posing a significant hazard to aviation. Seismologists have warned that further eruptions are possible, as the volcano continues to rumble and emit gases. Rescue teams are on high alert, as officials prepare for potential pyroclastic flows and landslides. Residents are being urged to stay in safe zones as efforts to assess the full scale of the damage are underway. This eruption comes after weeks of increased seismic activity, making it one of the most severe volc events in recent history for Indonesia, a country located along the Pacific \"Ring of Fire.\"",
            image: img2
        },
        popularArticles: [
            { id: 1, title: "Massive Wildfire Sweeps Across Northern California", date: "24 Dec, 2024" },
            { id: 2, title: "Global Tech Summit Announces Breakthrough in Quantum Computing", date: "23 Dec, 2024" },
            { id: 3, title: "New Climate Agreement Reached at International Conference", date: "23 Dec, 2024" },
            { id: 4, title: "Revolutionary Cancer Treatment Shows Promising Results", date: "22 Dec, 2024" },
            { id: 5, title: "Space Tourism Company Announces First Commercial Flight", date: "22 Dec, 2024" }
        ],
        composerRequirements: [
            { id: 1, title: "For male/female that between 23-50 YO" },
            { id: 2, title: "Have a good and crazy taste of music" },
            { id: 3, title: "Can play a lot of music instrument" },
            { id: 4, title: "Have 2 years of experience in music" },
            { id: 5, title: "Can play a lot of music instrument" }
        ],
        bottomArticles: {
            blackFox: {
                title: "Conservationist Discovered Black Fox Species Thought to Have Vanished 1,000 Years Ago",
                content: "In a stunning discovery, a rarest black foxes species, that long believed to have gone extinct over 1,000 years ago, has been found alive in a remote region of northern of Scotland. The elusive big animal, known only through about ancient records and folklore, was spotted by several team of conservationists during a wildlife survey. The team responsible for the discovery is right now working with several local authorities and big wildlife experts to get protect the fragile population, which is estimated to be extremely small. Efforts to preserve the fox habitat and ensure theirs survival are already underway, with calls for increased the funding and conservation measures.",
                image: img5
            },
            egyptTomb: {
                title: "Archaeologists Discover World's Largest and Oldest Tomb in Egypt",
                content: "A groundbreaking discovery has been made in Egypt, where archaeologists have uncovered the world's largest and oldest known tomb, dating back over 5,000 years. The massive burial complex, located near the ancient city of Saqqara, is believed to belong to a previously unknown pharaoh from the early dynastic period. The tomb spans several acres and contains intricate carvings, hieroglyphs, and over 100 burial chambers, some holding well-preserved mummies. Inside, researchers found a treasure trove of artifacts, including gold jewelry, ceremonial weapons, and pottery, offering new insights into early Egyptian civilization. Excavation teams are calling this discovery one of the most significant finds in decades, as it could rewrite parts of Egypt's history. Experts believe the sheer size and grandeur of the tomb suggest the buried ruler held immense power and influence.",
                image: img3
            }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className="container mt-4 mb-4 border-t-4 border-b-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex">
                {/* Main Article */}
                <motion.div
                    className="w-[34rem] space-y-2 border-0 p-8 rounded-md border-r-2 border-indigo-950"
                    variants={itemVariants}
                >
                    <h1
                        onClick={() => navigate("/news/1")}
                        className="text-2xl font-semibold cursor-pointer hover:text-gray-600 transition-colors"
                    >
                        {newsData.mainArticle.title}
                    </h1>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Share2 className="cursor-pointer" />
                    </motion.div>
                    <hr className="my-4" />
                    <motion.img
                        className="object-cover w-2xl"
                        src={newsData.mainArticle.image}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <p className="text-gray-600 leading-relaxed">{newsData.mainArticle.content}</p>
                </motion.div>

                {/* Secondary Article */}
                <motion.div
                    className="p-8 space-y-2 grow basis-6xl rounded-md border-r-2 border-indigo-950"
                    variants={itemVariants}
                >
                    <h1 className="border-2 text-5xl font-bold p-2">{newsData.secondaryArticle.title}</h1>
                    <motion.img
                        className="w-4xl"
                        src={newsData.secondaryArticle.image}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    />
                    <p className="text-gray-600 leading-relaxed">{newsData.secondaryArticle.content}</p>
                </motion.div>

                {/* Popular Articles */}
                <motion.div
                    className="w-80 p-6 rounded-lg shadow-sm"
                    variants={itemVariants}
                >
                    <h2 className="text-xl font-semibold mb-6">Popular Articles Now</h2>
                    <hr />
                    <div className="divide-y">
                        {newsData.popularArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                className="py-4 first:pt-0 last:pb-0"
                                whileHover={{ x: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-start space-x-4">
                                    <span className="text-2xl font-bold">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <div>
                                        <h3 className="font-medium text-gray-900 leading-snug hover:text-gray-600 cursor-pointer">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">{article.date}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Bottom News Section */}
            <motion.div
                className="container mx-auto px-4 border-t-2"
                variants={containerVariants}
            >
                <div className="flex gap-8">
                    {/* Left Column */}
                    <motion.div
                        className="flex-1 p-6 rounded-lg border-r-2"
                        variants={itemVariants}
                    >
                        <div className="space-y-6">
                            <h2 className="text-2xl font-serif font-bold leading-tight">
                                {newsData.bottomArticles.blackFox.title}
                            </h2>
                            <div className="flex gap-6">
                                <motion.img
                                    src={newsData.bottomArticles.blackFox.image}
                                    className="w-1/2 h-64 object-cover rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <p className="text-gray-600 leading-relaxed">
                                    {newsData.bottomArticles.blackFox.content}
                                </p>
                            </div>

                            <div className="border-t pt-6">
                                <div className="flex gap-6">
                                    <motion.img
                                        src={img4}
                                        className="w-1/3 h-48 object-cover rounded-lg"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div>
                                        <h2 className="text-xl font-semibold mb-4">
                                            Composer Needed Now!
                                        </h2>
                                        <ul className="space-y-2">
                                            {newsData.composerRequirements.map((item) => (
                                                <motion.li
                                                    key={item.id}
                                                    className="text-gray-600 hover:text-gray-900 cursor-pointer"
                                                    whileHover={{ x: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {item.title}
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="flex-1 p-6 rounded-lg"
                        variants={itemVariants}
                    >
                        <div className="space-y-6">
                            <h1 className="text-4xl font-serif font-bold leading-tight">
                                {newsData.bottomArticles.egyptTomb.title}
                            </h1>
                            <div className="flex gap-6">
                                <motion.img
                                    src={newsData.bottomArticles.egyptTomb.image}
                                    className="w-1/2 h-96 object-cover rounded-lg"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <p className="text-gray-600 leading-relaxed">
                                    {newsData.bottomArticles.egyptTomb.content}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    );
}