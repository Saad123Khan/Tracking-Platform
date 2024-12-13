import Image from "next/image";
import React from "react";


interface TableRow {
    image_url: string;
    influencer: string;
    dateAndTime: string;
    token: string;
    buyVolume: string;
    marketCap: string;
}

interface TableProps {
  headers: string[];
  data: TableRow[];
  
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
        <div className="relative overflow-x-auto mt-[20px] mb-[20px]" style={{ height: "200px", overflowY: "auto" }}>
        <table className="w-full text-sm text-left text-white border-separate" style={{ borderSpacing: "0 3px" }}>
            <thead className="text-sm bg-medium-purple font-[400] rounded-lg">
            <tr>
                {headers.map((header, index) => (
                <th key={index} className="px-6 py-6 text-center">
                    {header}
                </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {data.map((row, rowIndex) => (
                <tr key={rowIndex} className="bg-medium-purple">
                <td className="px-6 py-3 whitespace-nowrap flex items-center text-center">
                    <Image src={row.image_url} alt={row.influencer} width={35} height={35} className="w-8 h-8 rounded-full mr-2" />
                    {row.influencer}
                </td>
                <td className="px-6 py-3 text-center">{row.dateAndTime}</td>
                <td className="px-6 py-3 text-center">{row.token}</td>
                <td className="px-6 py-3 text-center">{row.buyVolume}</td>
                <td className="px-6 py-3 text-center">{row.marketCap}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
  );
};

export default Table;
