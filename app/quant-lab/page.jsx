export default function QuantLab() {
    const data = [
        { date: "07 April 2026", total: 8, profit: 1, loss: 7 },
        { date: "08 April 2026", total: 50, profit: 18, loss: 32 },
        { date: "09 April 2026", total: 29, profit: 11, loss: 18 },
    ];

    const totals = data.reduce(
        (acc, curr) => ({
            total: acc.total + curr.total,
            profit: acc.profit + curr.profit,
            loss: acc.loss + curr.loss,
        }),
        { total: 0, profit: 0, loss: 0 }
    );

    const winRate = totals.total
        ? ((totals.profit / totals.total) * 100).toFixed(1)
        : 0;

    return (
        <main className="bg-white min-h-screen py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-black mb-1">
                    Quant Lab - Test Result
                </h1>
                <p className="text-sm text-gray-700 mb-2">
                    Version 0.2 • Last updated: -
                </p>
                <p className="text-sm text-gray-700 mb-2">
                    Version 0.1 • Last updated: April 9, 2026
                </p>

                <div className="grid grid-cols-1 gap-6">
                    {data.map((item, index) => {
                        const rate = item.total
                            ? ((item.profit / item.total) * 100).toFixed(1)
                            : 0;

                        return (
                            <div
                                key={index}
                                className="bg-gray-50 p-6 border border-gray-400"
                            >
                                <h2 className="text-lg font-semibold text-black mb-4">
                                    {item.date}
                                </h2>

                                <div className="space-y-1 text-sm text-black">
                                    <p>Total Position: {item.total}</p>
                                    <p className="text-green-600">Profit: {item.profit}</p>
                                    <p className="text-red-600">Loss: {item.loss}</p>
                                    <p className="text-gray-600">Win Rate: {rate}%</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-6 bg-gray-50 p-6 border border-gray-400">
                    <h2 className="text-xl font-semibold text-black mb-4">
                        Overall Summary
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-black">
                        <div>
                            <p className="text-sm">Total</p>
                            <p className="text-lg font-bold">{totals.total}</p>
                        </div>
                        <div>
                            <p className="text-sm">Profit</p>
                            <p className="text-lg font-bold text-green-600">{totals.profit}</p>
                        </div>
                        <div>
                            <p className="text-sm">Loss</p>
                            <p className="text-lg font-bold text-red-600">{totals.loss}</p>
                        </div>
                        <div>
                            <p className="text-sm">Win Rate</p>
                            <p className="text-lg font-bold">{winRate}%</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}