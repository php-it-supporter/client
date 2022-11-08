import { DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import avatar from '../../../../../atoms/images/anh nen.png';
import LayoutFull from '../../../components/LayoutFull';

interface DataType {
  key: React.Key;
  name: React.ReactNode;
  age: number;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Họ và tên',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Tên tài khoản',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
  },
  {
    title: 'Tuổi',
    dataIndex: 'address',
    key: '1',
    width: 150,
  },
  {
    title: 'Số điện thoại',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Ngành',
    dataIndex: 'address',
    key: '2',
    width: 150,
  },
  {
    title: 'Hành động',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => (
      <div className="flex gap-[12px]">
        <Tooltip title="Duyệt">
          <Button shape="circle" icon={<CheckCircleOutlined />} />
        </Tooltip>
      </div>
    ),
  },
];

const data: DataType[] = [];
for (let i = 0; i < 20; i++) {
  data.push({
    key: i,
    name: (
      <div className="flex items-center gap-[12px]">
        <img src={avatar} alt="" className="w-[36px] h-[36px] rounded-full object-cover" />
        <div>{`Edrward ${i}`},</div>
      </div>
    ),
    age: 32,
    address: `London Park no. ${i}`,
  });
}

const UserPending = () => {
  return (
    <LayoutFull>
      <div className="mx-[16px] my-[8px]">
        <div className="w-full flex justify-between mb-[10px] " style={{ height: '40px' }}>
          <Input placeholder="Nhập tên thành viên" className="w-[25%] " />;
        </div>
        <div className="h-[500px]">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </LayoutFull>
  );
};

export default UserPending;
