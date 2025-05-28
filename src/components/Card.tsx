import React from "react";

type StatItem = {
  label: string;
  value: string | number;
};

type StatCardProps = {
  total: number;
  title: string;
  stats: StatItem[];
};

const StatCard: React.FC<StatCardProps> = ({ total, title, stats }) => {
  return (
    <div className="border-l-[#000000] w-16px border-l-10 rounded-md p-6 bg-[#FFFFFF] ">
      <div className="flex items-center space-x-4">
        <span className="text-[40px] px-4 font-[700]  text-[#656565]">{total}</span>
        <h2 className="px-4 pt-3 text-[25px] font-[500]">{title}</h2>
      </div>

      <div className="mt-6 pl-43 flex justify-center items-center space-x-10">
        {stats.map((item, index) => (
          <div key={index} className="flex  space-x-18  justify-between">
            <div className="text-center">
              <p className="text-sm font-[400] text-[#000000]">{item.label}</p>
              <p className="text-xl font-[700] text-[#000000]">{item.value}</p>
            </div>
            {index !== stats.length - 1 && (
              <div className="h-12 border-r border-[#000000]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCard;
