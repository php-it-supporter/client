import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { postApis } from 'src/apis/admin';
import Icon from 'src/atoms/icon';
import LayoutFullUser from '../../component/layout';

export default function DetailPage() {
  const [mainContent, setMainContent] = useState<any>();

  useEffect(() => {
    (async () => {
      const res = await postApis.findOne(2);
      const data = res.data?.data;

      const content = JSON.parse(data.content);
      setMainContent(content);
    })();
  }, []);

  return (
    <LayoutFullUser>
      <div className="mx-[20%] py-[20px]">
        <div className="rounded-sm overflow-hidden bg-white shadow-sm">
          <div className="">
            <img src="src/images/img-12.jpg" className="w-full h-96 object-cover" />
          </div>
          <div className="p-4 pb-5">
            <h2 className="block text-2xl font-semibold text-gray-700 font-roboto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iddo loremque, totam
              architecto odit pariatur Lorem ips dolor.
            </h2>
            <div className="mt-2 flex space-x-4">
              <div className="flex text-gray-400 text-sm items-center">
                <Icon name="user-pending" width={14} className="mr-[10px]" />
                Blogging Tips
              </div>
              <div className="flex text-gray-400 text-sm items-center">
                <Icon name="time" width={14} className="mr-[10px]" />
                June 11, 2021
              </div>
            </div>

            <p className="text-gray-500 text-sm mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe
              accusamus eum ex sint est neque provident tempore, minus laborum repudiandae vitae
              temporibus nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus
              explicabo itaque iure recusandae
            </p>

            <p className="bg-green-50 border border-green-500 p-3 text-sm  mt-5">
              <span className="text-xl mr-1 text-gray-400">
                <i className="fas fa-quote-left"></i>
              </span>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus blanditiis earum
              nam, quisquam magnam aut odio aliquam inventore quibusdam mollitia! Alias, mollitia
              eveniet iure quidem natus quis assumenda consectetur beatae. Lorem, ipsum dolor
              quibusdam.
              <span className="text-xl ml-1 text-gray-400">
                <i className="fas fa-quote-right"></i>
              </span>
            </p>

            <p className="text-gray-500 text-sm mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe
              accusamus eum ex sint est neque provident tempore, minus laborum repudiandae vitae
              temporibus nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus
              explicabo itaque iure recusandae
            </p>

            <ul className="mt-6 pl-5  space-y-2">
              <li className="text-sm">
                <span className="mr-1">
                  <i className="fas fa-angle-right"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
              </li>
              <li className="text-sm">
                <span className="mr-1">
                  <i className="fas fa-angle-right"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
              </li>
              <li className="text-sm">
                <span className="mr-1">
                  <i className="fas fa-angle-right"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
              </li>
              <li className="text-sm">
                <span className="mr-1">
                  <i className="fas fa-angle-right"></i>
                </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis.
              </li>
            </ul>

            <p className="text-gray-500 text-sm mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe
              accusamus eum ex sint est neque provident tempore, minus laborum repudiandae vitae
              temporibus nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus
              explicabo itaque iure recusandae
            </p>

            <p className="text-gray-500 text-sm mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et sunt saepe
              accusamus eum ex sint est neque provident tempore, minus laborum repudiandae vitae
              temporibus nesciunt, sed enim quo harum a id, alias maiores! Incidunt iusto minus
              explicabo itaque iure recusandae
            </p>

            <div className="mt-5 pt-5 border-t border-gray-200 flex gap-2">
              <Button icon={<FacebookOutlined />} />
              <Button icon={<TwitterOutlined />} />
              <Button icon={<InstagramOutlined />} />
              <Button icon={<LinkedinOutlined />} />
            </div>
          </div>
        </div>
        <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mt-8">
          <h5 className="text-base uppercase font-semibold font-roboto">Related post</h5>
          <a
            href="#"
            className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition"
          >
            see more
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
          <div className="rounded-sm bg-white p-3 pb-5 shadow-sm">
            <a href="#" className="block rounded-md overflow-hidden">
              <img
                src="src/images/img-7.jpg"
                className="w-full h-40 object-cover transform hover:scale-110 transition duration-500"
              />
            </a>
            <div className="mt-3">
              <a href="#">
                <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                  Lorem, ipsum dolor amet sit consec tetur elit.
                </h2>
              </a>
              <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-xs items-center">
                  <span className="mr-1 text-xs">
                    <i className="far fa-user"></i>
                  </span>
                  Blogging Tips
                </div>
                <div className="flex text-gray-400 text-xs items-center">
                  <span className="mr-1 text-xs">
                    <i className="far fa-clock"></i>
                  </span>
                  June 11, 2021
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-sm bg-white p-3 pb-5 shadow-sm">
            <a href="#" className="block rounded-md overflow-hidden">
              <img
                src="src/images/img-5.jpg"
                className="w-full h-40 object-cover transform hover:scale-110 transition duration-500"
              />
            </a>
            <div className="mt-3">
              <a href="#">
                <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                  Lorem, ipsum dolor amet sit consec tetur elit.
                </h2>
              </a>
              <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-xs items-center">
                  <span className="mr-1 text-xs">
                    <i className="far fa-user"></i>
                  </span>
                  Blogging Tips
                </div>
                <div className="flex text-gray-400 text-xs items-center">
                  <span className="mr-1 text-xs">
                    <i className="far fa-clock"></i>
                  </span>
                  June 11, 2021
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-sm bg-white p-3 pb-5 shadow-sm hidden md:block">
            <a href="#" className="block rounded-md overflow-hidden">
              <img
                src="src/images/img-6.jpg"
                className="w-full h-40 object-cover transform hover:scale-110 transition duration-500"
              />
            </a>
            <div className="mt-3">
              <a href="#">
                <h2 className="block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                  Lorem, ipsum dolor amet sit consec tetur elit.
                </h2>
              </a>
              <div className="mt-2 flex space-x-3">
                <div className="flex text-gray-400 text-xs items-center">
                  <Icon name="user-pending" width={14} className="mr-[10px]" />
                  Blogging Tips
                </div>
                <div className="flex text-gray-400 text-xs items-center">
                  <Icon name="time" width={14} className="mr-[10px]" />
                  June 11, 2021
                </div>
              </div>
            </div>
          </div>
        </div>
        {mainContent && (
          <Editor
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            initialContentState={mainContent}
            readOnly
            toolbarHidden
          />
        )}
      </div>
    </LayoutFullUser>
  );
}
