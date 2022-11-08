import LayoutFull from '../../../components/LayoutFull';
import { PlusOutlined } from '@ant-design/icons';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import avatar from '../../../../../atoms/images/anh nen.png';
import ModalAddUser from '../modal/ModalAddUser';
import ModalEditUser from '../modal/ModalEditUser';

interface DataType {
  key: React.Key;
  name: React.ReactNode;
  age: number;
  address: string;
}

const UserApprove = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);

  const showModal = (name: string) => {
    if (name === 'add') setIsOpenModalAdd(true);
    else setIsOpenModalEdit(true);
  };

  const handleOk = (name: string) => {
    if (name === 'add') setIsOpenModalAdd(false);
    else setIsOpenModalEdit(false);
  };

  const handleCancel = (name: string) => {
    if (name === 'add') setIsOpenModalAdd(false);
    else setIsOpenModalEdit(false);
  };

  const edit = (item: any) => {
    console.log('first', item);
  };

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
      render: (item) => (
        <div className="flex gap-[12px]">
          <Tooltip title="Sửa">
            <Button shape="circle" icon={<EditOutlined />} onClick={() => showModal('edit')} />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button danger shape="circle" icon={<DeleteOutlined />} />
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

  return (
    <>
      <LayoutFull>
        <div className="mx-[16px] my-[8px]">
          <div className="w-full flex justify-between mb-[10px]">
            <Input placeholder="Nhập tên thành viên" className="w-[25%]" />;
            <Button
              type="primary"
              icon={<PlusOutlined />}
              size="large"
              onClick={() => showModal('add')}
            >
              Thêm thành viên
            </Button>
          </div>
          <div className="h-[500px]">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </LayoutFull>
      <ModalAddUser
        isOpen={isOpenModalAdd}
        handleOk={() => handleOk('add')}
        handleCancel={() => handleCancel('add')}
      />
      <ModalEditUser
        isOpen={isOpenModalEdit}
        handleOk={() => handleOk('edit')}
        handleCancel={() => handleCancel('edit')}
      />
    </>
  );
};

export default UserApprove;
