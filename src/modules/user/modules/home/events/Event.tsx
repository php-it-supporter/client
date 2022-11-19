import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../../../atoms/icon';

const Event = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b-[1px] border-t-0 border-l-0 border-r-0 border-solid border-[#CAD8E6]">
        <div className="uppercase font-[400] text-[25px] leading-[52px] text-[#024da1] border-b-[2px] border-t-0 border-l-0 border-r-0 border-solid border-[#024da1] pr-[20px]">
          Sự kiện
        </div>
        <Link to="" className="text-[14px] leading-[16px] text-[#939597]">
          Xem thêm {'>>'}
        </Link>
      </div>
      <div className="pt-[20px] bg-white">
        <a
          href="#"
          className="flex group p-[10px] hover:bg-[#E5F9FF] border-t-0 border-l-0 border-r-0 border-solid border-[#CAD8E6] border-b-[1px]"
        >
          <div className="flex-shrink-0">
            <img
              src="https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=680&h=0&q=100&dpr=1&fit=crop&s=HFQLX0zpOynuXvGNOkZ6PQ"
              className="h-[80px] w-[80px] rounded object-cover"
            />
          </div>
          <div className="flex-grow pl-3">
            <h5 className="text-[18px] pt-[10px] leading-5 block font-roboto font-semibold transition group-hover:text-[#2EA2C7]">
              Team Bitbose geared up to attend Blockchain
            </h5>
            <div className="flex text-gray-400 text-sm items-center">
              <span className="mr-1 text-xs">
                <Icon name="time" width={14} />
              </span>
              June 11, 2021
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Event;
