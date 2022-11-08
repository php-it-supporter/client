import { DeleteOutlined, EditOutlined, EyeOutlined, PlusOutlined } from '@ant-design/icons';
import { Radio, RadioChangeEvent, Space } from 'antd';
import { Button, Input, Tooltip } from 'antd';
import { useState } from 'react';
import LayoutFull from '../../../components/LayoutFull';
import Item from '../Item';

const NewManager = () => {
  const [value, setValue] = useState<number>(0);
  const data = [1, 2, 3, 4];

  const onChange = (e: number) => {
    setValue(e);
  };
  return (
    <LayoutFull>
      <div className="mx-[16px] mt-[10px]">
        <div className="w-full flex justify-between mb-[10px]">
          <Input placeholder="Nhập tên bài tin tức" className="w-[25%]" />;
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            //   onClick={() => showModal('add')}
          >
            Tạo bài tin tức
          </Button>
        </div>
      </div>
      {value !== 0 && (
        <div className="flex gap-[12px] items-center mx-[16px] my-[12px]">
          <Button icon={<EyeOutlined />}>Xem</Button>
          <Button icon={<EditOutlined />}>Sửa</Button>
          <Button icon={<DeleteOutlined />}>Gỡ xuất bản</Button>
        </div>
      )}
      {data.map((item, index) => (
        <Item isChecked={value} onCheck={() => onChange(index + 1)} value={index + 1} />
      ))}
    </LayoutFull>
  );
};

export default NewManager;
