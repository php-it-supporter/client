import LayoutFullUser from '../../component/layout';
import image1 from '../../../../atoms/images/312221646_771694890930297_6215795452150606467_n.png';
import image2 from '../../../../atoms/images/309911559_766777848088668_7456215299439506121_n.png';
import image3 from '../../../../atoms/images/292355658_1935330136857061_8603834351602225961_n.png';
import { useEffect, useState } from 'react';
import { postApis } from 'src/apis/admin';
import Icon from 'src/atoms/icon';
import { Link } from 'react-router-dom';
// import process from 'process';
import { categoryApis } from 'src/apis/admin';

const NewPage = () => {
  const [reload, setReload] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (reload) {
      (async () => {
        const postRes = await postApis.findAll();
        setPosts(postRes.data?.data || []);
      })();

      setReload(false);
    }
  }, [reload]);

  useEffect(() => {
    if (reload) {
      (async () => {
        const postRes = await categoryApis.findAll();
        setCategories(postRes.data?.data || []);
      })();
    }
  }, [reload]);
  return (
    <LayoutFullUser>
      <div className="flex">
        <div className="w-[calc(20%-100px)] sticky top-[10px] ml-[50px] mr-[20px] my-[20px] bg-white shadow-sm rounded-sm p-4 h-[500px]">
          <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Thể loại</h3>
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
        <div className="my-[20px] flex-1">
          <div className="rounded-sm overflow-hidden bg-white shadow-sm">
            <Link to={`/news/${posts[0]?.id}`} className="block rounded-md overflow-hidden">
              <img
                src={`${process.env.REACT_APP_DOMAIN}/${posts[0]?.image}`}
                className="w-full h-96 object-cover transform hover:scale-110 transition duration-500"
              />
            </Link>
            <div className="p-4 pb-5">
              <Link to={`/news/${posts[0]?.id}`}>
                <h2 className="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                  {posts[0]?.title}
                </h2>
              </Link>

              <p className="text-gray-500 text-sm mt-2">{posts[0]?.content}</p>
              <div className="mt-3 flex space-x-4">
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="user-pending" width={14} />
                  </span>
                  {posts[0]?.author?.username}
                </div>
                <div className="flex text-gray-400 text-sm items-center">
                  <span className="mr-2 text-xs">
                    <Icon name="time" width={14} />
                  </span>
                  {new Date(posts[0]?.created_at)?.toLocaleDateString('en-US')}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {posts.map(
              (item, index) =>
                index !== 0 && (
                  <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                    <Link to={`/news/${item.id}`} className="block rounded-md overflow-hidden">
                      <img
                        src={`${process.env.REACT_APP_DOMAIN}/${item?.image}`}
                        className="w-full h-[30vh] object-cover transform hover:scale-110 transition duration-500"
                      />
                    </Link>
                    <div className="mt-3">
                      <Link to={`/news/${item.id}`}>
                        <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto ">
                          {item?.title}
                        </h2>
                      </Link>
                      <div className="mt-2 flex space-x-3">
                        <div className="flex text-gray-400 text-sm items-center">
                          <span className="mr-2 text-xs">
                            <Icon name="user-pending" width={14} />
                          </span>
                          {item.author?.username}
                        </div>
                        <div className="flex text-gray-400 text-sm items-center">
                          <span className="mr-2 text-xs">
                            <Icon name="time" width={14} />
                          </span>
                          {new Date(item?.created_at)?.toLocaleDateString('en-US')}
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div className=" w-[calc(20%-100px)] sticky top-[10px] mr-[50px] ml-[20px] my-[20px] shadow-sm rounded-sm p-4 h-[550px]">
          <img src={image1} alt="" className="w-full object-cover" />
          <img src={image2} alt="" className="w-full object-cover mt-[12px]" />
          <img src={image3} alt="" className="w-full object-cover mt-[12px]" />
        </div>
      </div>
    </LayoutFullUser>
  );
};

export default NewPage;
