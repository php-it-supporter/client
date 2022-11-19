import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../../../atoms/icon';

const News = () => {
  return (
    <>
      <div className="flex justify-between items-center border-b-[1px] border-t-0 border-l-0 border-r-0 border-solid border-[#CAD8E6]">
        <div className="uppercase font-[400] text-[25px] leading-[52px] text-[#024da1] border-b-[2px] border-t-0 border-l-0 border-r-0 border-solid border-[#024da1] pr-[20px]">
          Tin Tức
        </div>
        <Link to="" className="text-[14px] leading-[16px] text-[#939597]">
          Xem thêm {'>>'}
        </Link>
      </div>
      <div className="rounded-sm overflow-hidden bg-white shadow-sm mt-[20px] ">
        <a href="view.html" className="block rounded-md overflow-hidden">
          <img
            src="https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=680&h=0&q=100&dpr=1&fit=crop&s=HFQLX0zpOynuXvGNOkZ6PQ"
            className="w-full h-96 object-cover transform hover:scale-110 transition duration-500"
          />
        </a>
        <div className="p-4 pb-5">
          <a href="view.html">
            <h2 className="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iddo loremque, totam
              architecto odit pariatur Lorem ips dolor.
            </h2>
          </a>

          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio doloremque
            placeat ipsa! Sequi, recusandae. In numquam similique molestiae error, magni velit
            suscipit repudiandae itaqu....
          </p>
          <div className="mt-3 flex space-x-4">
            <div className="flex text-gray-400 text-sm items-center">
              <span className="mr-2 text-xs">{/* <i className="far fa-user"></i> */}</span>
              Blogging Tips
            </div>
            <div className="flex text-gray-400 text-sm items-center">
              <span className="mr-2 text-xs">
                <i className="far fa-clock"></i>
              </span>
              June 11, 2021
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
            <img
              src="https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=680&h=0&q=100&dpr=1&fit=crop&s=HFQLX0zpOynuXvGNOkZ6PQ"
              className="w-full h-60 object-cover transform hover:scale-110 transition duration-500 rounded-[4px]"
            />
            <div className="mt-3">
              <a href="#">
                <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                  Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                </h2>
              </a>
              <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="user-pending" width={14} />
                  </span>
                  Blogging Tips
                </div>
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="time" width={14} />
                  </span>
                  June 11, 2021
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
            <img
              src="https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=680&h=0&q=100&dpr=1&fit=crop&s=HFQLX0zpOynuXvGNOkZ6PQ"
              className="w-full h-60 object-cover transform hover:scale-110 transition duration-500 rounded-[4px]"
            />
            <div className="mt-3">
              <a href="#">
                <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                  Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                </h2>
              </a>
              <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="user-pending" width={14} />
                  </span>
                  Blogging Tips
                </div>
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="time" width={14} />
                  </span>
                  June 11, 2021
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
            <img
              src="https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=680&h=0&q=100&dpr=1&fit=crop&s=HFQLX0zpOynuXvGNOkZ6PQ"
              className="w-full h-60 object-cover transform hover:scale-110 transition duration-500 rounded-[4px]"
            />
            <div className="mt-3">
              <a href="#">
                <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                  Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                </h2>
              </a>
              <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="user-pending" width={14} />
                  </span>
                  Blogging Tips
                </div>
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="time" width={14} />
                  </span>
                  June 11, 2021
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
            <img
              src="https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=680&h=0&q=100&dpr=1&fit=crop&s=HFQLX0zpOynuXvGNOkZ6PQ"
              className="w-full h-60 object-cover transform hover:scale-110 transition duration-500 rounded-[4px] "
            />
            <div className="mt-3">
              <a href="#">
                <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                  Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                </h2>
              </a>
              <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="user-pending" width={14} />
                  </span>
                  Blogging Tips
                </div>
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="time" width={14} />
                  </span>
                  June 11, 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
