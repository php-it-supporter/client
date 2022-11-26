import React, { useEffect, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { Link } from 'react-router-dom';
import { postApis } from 'src/apis/admin';
import Icon from '../../../../../atoms/icon';

const News = () => {
  const [reload, setReload] = useState(true);
  const [posts, setPosts] = useState<any[]>([]);
  const [mainContentPostInit, setMainContentPostInit] = useState<any>();

  useEffect(() => {
    if (reload) {
      (async () => {
        const postRes = await postApis.findAll();
        setPosts(postRes.data?.data || []);
        const content = JSON.parse(postRes.data?.data[0].content);
        setMainContentPostInit(content);
      })();

      setReload(false);
    }
  }, [reload]);
  return (
    <>
      <div className="flex justify-between items-center border-b-[1px] border-t-0 border-l-0 border-r-0 border-solid border-[#CAD8E6]">
        <div className="uppercase font-[400] text-[25px] leading-[52px] text-[#024da1] border-b-[2px] border-t-0 border-l-0 border-r-0 border-solid border-[#024da1] pr-[20px]">
          Tin Tức
        </div>
        <Link to="/news" className="text-[14px] leading-[16px] text-[#939597]">
          Xem thêm {'>>'}
        </Link>
      </div>
      <div className="rounded-sm overflow-hidden bg-white shadow-sm mt-[20px] ">
        <Link to={`/news/${posts[0]?.id}`} className="block rounded-md overflow-hidden">
          <img
            src={`${process.env.REACT_APP_DOMAIN}/${posts[0]?.image}`}
            className="w-full h-96 object-cover transform hover:scale-110 transition duration-500"
          />
        </Link>
        <div className="p-4 pb-5">
          <a href="view.html">
            <h2 className="block text-2xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
              {posts[0]?.title}
            </h2>
          </a>

          <p className="text-gray-500 text-sm mt-2">
            {mainContentPostInit && (
              <Editor
                wrapperClassName="demo-wrapper"
                editorClassName="demo-editor"
                initialContentState={mainContentPostInit}
                readOnly
                toolbarHidden
              />
            )}
          </p>
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
      <div>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {posts.map((item, index) => {
            if (index > 0 && index < 4)
              return (
                <div className="rounded-sm bg-white p-4 pb-5 shadow-sm">
                  <img
                    src={`${process.env.REACT_APP_DOMAIN}/${item?.image}`}
                    className="w-full h-60 object-cover transform hover:scale-110 transition duration-500 rounded-[4px]"
                  />
                  <div className="mt-3">
                    <a href="#">
                      <h2 className="block text-xl font-semibold text-gray-700 hover:text-blue-500 transition font-roboto">
                        {item?.title}
                      </h2>
                    </a>
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
              );
          })}
        </div>
      </div>
    </>
  );
};

export default News;
