import React, { useState } from 'react';
import logo from '../../../../atoms/images/logo.png';
import Icon from '../../../../atoms/icon';
import avatar from '../../../../atoms/images/anh nen.png';

const Header = () => {
  const [openDropDown, setOpenDropdown] = useState<boolean>(false);
  const handleOpenDroDown = () => setOpenDropdown(!openDropDown);
  const configDropDown = [
    {
      value: 0,
      icon: 'log-out',
      label: 'Thoát',
      onClick: () => {},
    },
  ];
  return (
    <div className="flex justify-between items-center bg-[#ffffff] pl-[12px] pr-[24px] shadow-lg relative z-10">
      <img src={logo} alt="" className="h-[60px] " />
      <div
        className="group flex items-center gap-[14px] cursor-pointer relative hover:bg-[#ecebeb] py-[4px] px-[8px] rounded-[8px]"
        onClick={handleOpenDroDown}
      >
        <img src={avatar} alt="" className="w-[36px] h-[36px] rounded-full object-cover " />
        <div className="font-[700] text-[16px] leading-[18px] text-[#333333]">Hồ Minh Hải</div>
        <Icon name="arrow-drop-down" width={12} />
        {openDropDown && (
          <div className="absolute -bottom-[0px] left-0 translate-y-[100%] z-20 bg-[#ffffff] w-full shadow-xl rounded-[8px] overflow-hidden ">
            {configDropDown.map((item) => (
              <div
                className="group flex items-center gap-[8px] hover:bg-[#E5F9FF] w-full py-[8px] px-[12px]"
                onClick={item.onClick}
                key={item.value}
              >
                <Icon name={item.icon} width={12} />
                <div className="text-[#616161] text-[16px] leading-[20px] font-[400] group-hover:text-[#2EA2C7]">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
