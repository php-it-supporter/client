import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Button, Input, Modal, Table, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState, useRef, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { replace, searchMember, setAvatar } from 'src/common/utils';
import { AuthContext } from 'src/context/authContext/AuthContext';
import {
  addUser,
  editUser,
  getAllMajor,
  getAllUserApprove,
  removeUser,
} from '../../../../../apis/admin';
import LayoutFull from '../../../components/LayoutFull';
import { roleUser, valueRole } from '../../../constant/roleUser';
import ModalAddUser from '../modal/ModalAddUser';
import ModalEditUser from '../modal/ModalEditUser';

interface DataType {
  key: React.Key;
  name: React.ReactNode;
  age: number;
  phone: any;
  valueRole: any;
  formatCreated_at: any;
}

const UserApprove = () => {
  const { user } = useContext(AuthContext);
  const [isOpenModalAdd, setIsOpenModalAdd] = useState<boolean>(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [userEdit, setUserEdit] = useState(null);
  const { confirm } = Modal;
  const listMajors = useRef([]);
  // console.log(user);

  const fetchAllMajors = async () => {
    try {
      const res = await getAllMajor();
      if (res) listMajors.current = res.data.data;
    } catch (error) {
      toast.error('Kết nối bị lỗi');
    }
  };

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

  const fetchDataUser = async () => {
    try {
      const res = await getAllUserApprove();
      if (res) setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllMajors();
    fetchDataUser();
  }, []);

  const isRoleValid = () => user?.role === valueRole.ADMIN || user?.role === valueRole.CADRES;

  const returnContentTable = () => {
    const newArray: any = [];
    resultSearchUser().map((item: any) => {
      const created_at = item?.created_at;
      newArray.push({
        ...item,
        key: item.id,
        name: (
          <div className="flex items-center gap-[12px]">
            <img
              src={setAvatar(item.avatar)}
              alt=""
              className="w-[36px] h-[36px] rounded-full object-cover"
            />
            <div>{item.fullName}</div>
          </div>
        ),
        valueRole: roleUser[item.role],
        majorName: item?.major?.name,
        major: item?.major?.id,
        formatCreated_at: created_at ? new Date(created_at)?.toLocaleDateString('en-US') : '',
      });
    });

    return newArray;
  };

  const handleRemoveMember = async (id: any) => {
    try {
      const res = await removeUser(id);
      if (res) {
        setData(data.filter((item: any) => item.id !== id));
        toast.success('Xóa người dùng thành công');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };
  const destroyAll = () => {
    Modal.destroyAll();
  };

  const resultSearchUser = () => {
    return data.filter((item: any) => searchMember(replace(item.fullName), replace(keyword)));
  };

  const onSave = async (formData: any, form: any) => {
    if (
      !form.getFieldsValue().username ||
      !form.getFieldsValue().password ||
      !form.getFieldsValue().fullName
    )
      toast.error('Không được để trống tên tài khoản hoặc mật khẩu hoặc họ và tên');
    else {
      try {
        const res = await addUser(formData);

        if (res) {
          fetchDataUser();
          handleOk('add');
          toast.success('Thêm người dùng thành công');
          form.setFieldsValue({
            fullName: '',
            password: '',
            username: '',
            phone: '',
            address: '',
            major: '',
            role: '',
            age: '',
          });
        }
      } catch (error) {
        toast.error('Tên tài khoản đã tồn tại');
      }
    }
  };

  const handleEditUser = async (form: any, id: any) => {
    const formSubmit = (form: any) => {
      if (!form.getFieldsValue().password) {
        const newForm = { ...form.getFieldsValue() };
        delete newForm.password;
        return newForm;
      }
      return form.getFieldsValue();
    };
    let newObj = formSubmit(form);
    console.log({ newObj: newObj });
    const formData = new FormData();
    for (const key in newObj) {
      if (key === 'avatar') formData.append(key, newObj[key]?.fileList[0]?.originFileObj);
      else formData.append(key, newObj[key]);
    }
    try {
      const res = await editUser(formData, id);

      if (res) {
        fetchDataUser();
        handleOk('edit');
        toast.success('Sửa người dùng thành công');
        form.setFieldsValue({
          fullName: '',
          password: '',
          username: '',
          phone: '',
          address: '',
          major: '',
          role: '',
          age: '',
        });
      }
    } catch (error) {
      console.log(error);
      toast.error('Sửa người dùng thất bại');
    }
  };

  const columns: ColumnsType<DataType> = [
    {
      title: 'Họ và tên',
      width: 200,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Tên tài khoản',
      width: 100,
      dataIndex: 'username',
      key: 'username',
      fixed: 'left',
    },
    {
      title: 'Khóa',
      dataIndex: 'age',
      key: 'age',
      width: 150,
    },
    {
      title: 'Số điện thoại',
      dataIndex: 'phone',
      key: '2',
      width: 150,
    },
    {
      title: 'Ngày tạo',
      dataIndex: 'formatCreated_at',
      key: '2',
      width: 150,
    },
    {
      title: 'Vai trò',
      dataIndex: 'valueRole',
      key: '2',
      width: 150,
    },
    {
      title: 'Ngành',
      dataIndex: 'majorName',
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
            <Button
              shape="circle"
              icon={<EditOutlined />}
              onClick={() => {
                setUserEdit(item);
                showModal('edit');
              }}
            />
          </Tooltip>
          <Tooltip title="Xóa">
            <Button
              danger
              shape="circle"
              icon={<DeleteOutlined />}
              onClick={() => {
                confirm({
                  icon: <ExclamationCircleOutlined />,
                  content: <Button onClick={destroyAll}>Bạn có muốn xóa người dùng này?</Button>,
                  onOk() {
                    handleRemoveMember(item.id);
                  },
                  onCancel() {
                    console.log('Cancel');
                  },
                });
              }}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return isRoleValid() ? (
    <>
      <LayoutFull>
        <div className="mx-[16px] my-[8px]">
          <div className="w-full flex justify-between mb-[10px]">
            <Input
              placeholder="Nhập tên thành viên"
              className="w-[25%]"
              onChange={handleSearchUser}
            />
            ;
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
            <Table columns={columns} dataSource={returnContentTable()} />
          </div>
        </div>
      </LayoutFull>
      <ModalAddUser
        isOpen={isOpenModalAdd}
        handleCancel={() => handleCancel('add')}
        onSave={onSave}
        listMajors={listMajors}
      />
      <ModalEditUser
        isOpen={isOpenModalEdit}
        handleCancel={() => handleCancel('edit')}
        user={userEdit}
        handleEditUser={handleEditUser}
        listMajors={listMajors}
      />
    </>
  ) : (
    <Navigate replace to="/" />
  );
};

export default UserApprove;
