import LayoutFullUser from '../../component/layout';
import image1 from '../../../../atoms/images/312221646_771694890930297_6215795452150606467_n.png';
import image2 from '../../../../atoms/images/309911559_766777848088668_7456215299439506121_n.png';
import image3 from '../../../../atoms/images/292355658_1935330136857061_8603834351602225961_n.png';
import { categoryApis } from 'src/apis/admin';
import { useEffect, useState } from 'react';

const NewPage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await categoryApis.findAll();
      setCategories(data.data);
    })();
  }, []);

  return (
    <LayoutFullUser>
      <div className="flex">
        <div className="w-[calc(20%-100px)] sticky top-[10px] ml-[50px] mr-[20px] my-[20px] bg-white shadow-sm rounded-sm p-4 h-[500px]">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Categories</h3>
          <div className="space-y-2">
            {categories.map((item: any) => (
              <a
                href="#"
                className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
              >
                <span className="mr-2">
                  <i className="far fa-folder-open"></i>
                </span>
                <span>{item.name}</span>
                <p className="ml-auto font-normal">{item.posts.length}</p>
              </a>
            ))}
            {/* <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>Business</span>
              <p className="ml-auto font-normal">(15)</p>
            </a>
            <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>Fashion</span>
              <p className="ml-auto font-normal">(5)</p>
            </a>
            <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>Food</span>
              <p className="ml-auto font-normal">(10)</p>
            </a>
            <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>Learn</span>
              <p className="ml-auto font-normal">(3)</p>
            </a>
            <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>Music</span>
              <p className="ml-auto font-normal">(7)</p>
            </a>
            <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>Nature</span>
              <p className="ml-auto font-normal">(0)</p>
            </a>
            <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>People</span>
              <p className="ml-auto font-normal">(13)</p>
            </a>
            <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>Sports</span>
              <p className="ml-auto font-normal">(7)</p>
            </a>
            <a
              href="#"
              className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500"
            >
              <span className="mr-2">
                <i className="far fa-folder-open"></i>
              </span>
              <span>Technology</span>
              <p className="ml-auto font-normal">(17)</p>
            </a> */}
          </div>
        </div>
        <div className="my-[20px] ">
          <div className="rounded-sm overflow-hidden bg-white shadow-sm">
            <a href="view.html" className="block rounded-md overflow-hidden">
              <img
                src="src/images/img-12.jpg"
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem distinctio
                doloremque placeat ipsa! Sequi, recusandae. In numquam similique molestiae error,
                magni velit suscipit repudiandae itaqu....
              </p>
              <div className="mt-3 flex space-x-4">
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <i className="far fa-user"></i>
                  </span>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
              <a href="#" className="block rounded-md overflow-hidden">
                <img
                  src="src/images/img-7.jpg"
                  className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                />
              </a>
              <div className="mt-3">
                <a href="#">
                  <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                  </h2>
                </a>
                <div className="mt-2 flex space-x-3">
                  <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-2 text-xs">
                      <i className="far fa-user"></i>
                    </span>
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
            <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
              <a href="#" className="block rounded-md overflow-hidden">
                <img
                  src="src/images/img-6.jpg"
                  className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                />
              </a>
              <div className="mt-3">
                <a href="#">
                  <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                  </h2>
                </a>
                <div className="mt-2 flex space-x-3">
                  <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-2 text-xs">
                      <i className="far fa-user"></i>
                    </span>
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
            <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
              <a href="#" className="block rounded-md overflow-hidden">
                <img
                  src="src/images/img-5.jpg"
                  className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                />
              </a>
              <div className="mt-3">
                <a href="#">
                  <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                  </h2>
                </a>
                <div className="mt-2 flex space-x-3">
                  <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-2 text-xs">
                      <i className="far fa-user"></i>
                    </span>
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
            <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
              <a href="#" className="block rounded-md overflow-hidden">
                <img
                  src="src/images/img-11.jpg"
                  className="w-full h-60 object-cover transform hover:scale-110 transition duration-500"
                />
              </a>
              <div className="mt-3">
                <a href="#">
                  <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                    Lorem, ipsum dolor sit amet consec tetur adipisicing elit.
                  </h2>
                </a>
                <div className="mt-2 flex space-x-3">
                  <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-2 text-xs">
                      <i className="far fa-user"></i>
                    </span>
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
          </div>
        </div>
        <div className=" w-[calc(20%-100px)] sticky top-[10px] mr-[50px] ml-[20px] my-[20px] bg-white shadow-sm rounded-sm p-4 h-[550px]">
          <img src={image1} alt="" className="w-full object-cover" />
          <img src={image2} alt="" className="w-full object-cover mt-[12px]" />
          <img src={image3} alt="" className="w-full object-cover mt-[12px]" />
        </div>
      </div>
    </LayoutFullUser>
  );
};

export default NewPage;
