export default function RelatableNews() {
    const articles = [
        { id: 1, title: "Massive Wildfire Sweeps Across Northern California", date: "24 Dec, 2024" },
        { id: 2, title: "Global Tech Summit Announces Breakthrough in Quantum Computing", date: "23 Dec, 2024" },
        { id: 3, title: "New Climate Agreement Reached at International Conference", date: "23 Dec, 2024" },
        { id: 4, title: "Revolutionary Cancer Treatment Shows Promising Results", date: "22 Dec, 2024" },
        { id: 5, title: "Space Tourism Company Announces First Commercial Flight", date: "22 Dec, 2024" },
    ];
    return (
        
        <>
            <div className="w-80 p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Relatable News</h2>
                <hr></hr>
                <div className="divide-y">
                    {articles.map((article, index) => (
                        <div key={article.id} className="py-4 first:pt-0 last:pb-0">
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
                        </div>
                    ))}
                </div>
            </div>
        </>
)
}