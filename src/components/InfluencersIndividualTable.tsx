import React from 'react'
const tableHeaders: string[] = [
    "S/N",
    "Token",
    "Buy Volume",
    " Price Change from Time of Call",
];
const tableData: { [key: string]: string }[] = [
    {
        id: "1",
        token: "$TRAC",
        buyVolume: "$55,270",
        priceChange: "-15%"
    },
    {
        id: "2",
        token: "$M87",
        buyVolume: "$48,335",
        priceChange: "+39%"
    },
    {
        id: "3",
        token: "$CPAL",
        buyVolume: "$51,878",
        priceChange: "+118%"
    },
    {
        id: "4",
        token: "$TRACK",
        buyVolume: "$51,878",
        priceChange: "+290%"
    },
    {
        id: "5",
        token: "$TRAC",
        buyVolume: "$49,550",
        priceChange: "-43%"
    },  {
        id: "6",
        token: "$TRAC",
        buyVolume: "$49,550",
        priceChange: "-43%"
    },
    {
        id: "7",
        token: "$TRAC",
        buyVolume: "$49,550",
        priceChange: "-43%"
    },
    {
        id: "8",
        token: "$TRAC",
        buyVolume: "$49,550",
        priceChange: "-43%"
    },
    {
        id: "9",
        token: "$TRAC",
        buyVolume: "$49,550",
        priceChange: "-43%"
    },
    {
        id: "10",
        token: "$TRAC",
        buyVolume: "$49,550",
        priceChange: "-43%"
    },
];
const InfluencersIndividualTable = () => {
    return (
        <div
            className="relative overflow-x-auto mt-[20px] mb-[20px]"
            style={{ height: "300px", overflowY: "auto" }}
        >
            <table
                className="w-full text-xs text-left text-white border-separate"
                style={{ borderSpacing: "0 3px" }}
            >
                <thead className="text-xs bg-medium-purple font-[400] rounded-lg " >
                    <tr >
                        {tableHeaders.map((header, index) => (
                            <th key={index} className="xs:px-3 sx:px-6 py-6 text-center text-xs font-[600] ">
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-medium-purple">
                            <td className="xs:px-3sx:px-6 py-3 text-center text-xs">{row.id}</td>


                            <td className="xs:px-3 sx:px-6py-3 text-center font-[400] text-xs">{row.token}</td>
                            <td className="xs:px-3 sx:px-6 py-3 text-center font-[400] text-xs">{row.buyVolume}</td>
                            <td 
                            className={`xs:px-3 sx:px-6 py-3 text-center font-[400] text-xs ${
                                row.priceChange.startsWith("+")
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >{row.priceChange}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InfluencersIndividualTable
