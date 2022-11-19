import { Avatar, Button } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import logo from '../../../../atoms/images/bg-header.png';
import Icon from '../../../../atoms/icon';

const Header = () => {
  const listMenu = [
    {
      value: 0,
      text: 'Giới thiệu',
      link: '',
    },
    {
      value: 1,
      text: 'Tin tức',
      link: '/news',
    },
    {
      value: 2,
      text: 'Sự kiện',
      link: '',
    },
    {
      value: 3,
      text: 'Thành viên',
      link: '',
    },
  ];
  return (
    <div className="relative">
      <img src={logo} alt="" className="w-[100%]" />
      <div className="absolute top-0 right-[20%] flex gap-[10px] items-center mt-[5px] ">
        <Avatar size="large" icon={<UserOutlined />} />
        <Link to="/login" className="font-[700] text-[16px] text-[#663399]">
          Đăng nhập
        </Link>
        <span className="font-[700] text-[18px]">/</span>
        <Link to="/register" className="font-[700] text-[16px] text-[#663399]">
          Đăng ký
        </Link>
      </div>
      <div className="bg-[#0c4ca3]">
        <div className="flex ml-[18%]">
          <Link
            to="/"
            className="h-[50px] flex items-center border-r border-t-[0] border-b-0 border-l-0 border-solid border-[#ffffff] last:border-r-0 pr-[20px]"
          >
            <Button shape="circle" icon={<HomeOutlined />} />
          </Link>
          {listMenu.map((item) => (
            <Link
              to={item.link}
              className="h-[50px] flex items-center px-[20px] text-[#ffffff] uppercase font-[500] text-[16px] cursor-pointer hover:bg-[#0b4492] border-r border-t-[0] border-b-0 border-l-0 border-solid border-[#ffffff] last:border-r-0"
            >
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
