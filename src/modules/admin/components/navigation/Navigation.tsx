import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Icon from '../../../../atoms/icon';

const Navigation = () => {
  const location = useLocation();
  const configNavigation = [
    {
      value: 0,
      label: 'Quản lý user',
      list: [
        {
          value: 0,
          icon: 'user-approve',
          text: 'User đã duyệt',
          link: '/admin/user-approve',
        },
        {
          value: 1,
          icon: 'user-pending',
          text: 'User chưa duyệt',
          link: '/admin/user-pending',
        },
      ],
    },
    {
      value: 2,
      label: 'Quản lý bài viết',
      list: [
        {
          value: 0,
          icon: 'news',
          text: 'Quản lý tin tức',
          link: '/admin/news-manager',
        },
        {
          value: 1,
          icon: 'event',
          text: 'Quản lý sự kiện',
          link: '/admin/event-manager',
        },
      ],
    },
  ];
  return (
    <div className="w-[15vw] h-[calc(100vh-60px)] bg-white border-r-[1px] border-t-0 border-l-0 border-b-0 border-solid border-[#CAD8E6]">
      {configNavigation.map((item) => (
        <div
          className="border-b-[1px] border-solid border-[#CAD8E6]  border-t-0 border-l-0 border-r-0 w-full"
          key={item.value}
        >
          <div className="pt-[32px] mb-[24px] uppercase text-[#2EA2C7] font-[700] text-[16px] leading-[18px] pl-[12px]">
            {item.label}
          </div>
          {item.list.map((i) => (
            <Link
              key={i.value}
              to={i.link}
              className={`group flex items-center hover:bg-[#E5F9FF] py-[12px] pl-[12px] ${
                location.pathname === i.link ? 'bg-[#E5F9FF]' : 'bg-[#ffffff]'
              }`}
            >
              <Icon name={i.icon} className="mr-[11px]" />
              <div
                className={`font-[700] text-[14px] leading-[16px]  group-hover:text-[#2EA2C7] ${
                  location.pathname === i.link ? 'text-[#2EA2C7]' : 'text-[#797979]'
                }`}
              >
                {i.text}
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Navigation;
