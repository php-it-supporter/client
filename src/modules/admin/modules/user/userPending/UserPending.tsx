import { DeleteOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { Button, Input, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { getAllUserPending } from '../../../../../apis/admin';
import avatar from '../../../../../atoms/images/anh nen.png';
import { replace, searchMember } from '../../../../../common/utils';
import LayoutFull from '../../../components/LayoutFull';
import { getMajor } from '../../../constant/majorUser';

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

const UserPending = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  const fetchDataUser = async () => {
    try {
      const res = await getAllUserPending();
      if (res) setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDataUser();
  }, []);

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const returnContentTable = () => {
    const newArray: any = [];
    resultSearchUser().map((item: any) => {
      newArray.push({
        ...item,
        key: item.id,
        name: (
          <div className="flex items-center gap-[12px]">
            <img src={avatar} alt="" className="w-[36px] h-[36px] rounded-full object-cover" />
            <div>{item.fullName}</div>
          </div>
        ),
        username: item.username,
        age: item.age,
        phone: item.phone,
        major: getMajor(item.major),
      });
    });

    return newArray;
  };

  const resultSearchUser = () => {
    return data.filter((item: any) => searchMember(replace(item.fullName), replace(keyword)));
  };
  return (
    <LayoutFull>
      <div className="mx-[16px] my-[8px]">
        <div className="w-full flex justify-between mb-[10px] " style={{ height: '40px' }}>
          <Input
            placeholder="Nhập tên thành viên"
            className="w-[25%] "
            onChange={handleSearchUser}
          />
          ;
        </div>
        <div className="h-[500px]">
          <Table columns={columns} dataSource={returnContentTable()} />
        </div>
      </div>
    </LayoutFull>
  );
};

export default UserPending;
