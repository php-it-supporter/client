import React, { useState } from 'react';
import Icon from '../../../../atoms/icon';

interface props {
  isChecked: number;
  onCheck: () => void;
  value: number;
}

const Item = ({ isChecked, onCheck, value }: props) => {
  return (
    <div
      className="flex items-center justify-between px-[16px] bg-white hover:bg-[#E5F9FF] py-[8px] border-b-[1px] border-t-[1px] border-l-0 border-r-0 border-solid border-[#CAD8E6] cursor-pointer"
      onClick={onCheck}
    >
      <div className="flex items-center">
        <div className="mr-[8px] flex items-center">
          {isChecked === value ? <Icon name="checked" /> : <Icon name="unChecked" />}
        </div>
        <img
          src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1"
          alt=""
          className="w-[50px] h-[50px] object-cover m-[0_16px_0_0]"
        />
        <div>
          <div className="text-[16px] font-[700] text-[#333333] ">Hồ minh Hải</div>
          <div className="flex gap-[8px] m-[4px_0_0_0]">
            <p className="m-0 text-[#9F9F9F] text-[12px] font-[400]">Đăng bởi:</p>
            <p className="m-0 text-[#9F9F9F] text-[12px] font-[700]">Hồ Minh Hải</p>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="text-[#00aded] font-[700] text-[16px] leading-[18px]">Thế giới</div>
        <div className="flex gap-[8px] m-[4px_0_0_0]">
          <p className="m-0 text-[#9F9F9F] text-[12px] font-[400]">Đăng lúc:</p>
          <p className="m-0 text-[#9F9F9F] text-[12px] font-[700]">12/02/22022</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
