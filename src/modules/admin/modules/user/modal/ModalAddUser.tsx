import { Form, Input, Modal, Select, Upload } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

const KHOA = ['k10', 'k11', 'k12', 'k13', 'k14', 'k15', 'k16', 'k17'];
interface props {
  isOpen: boolean;
  handleCancel: () => void;
  onSave: (formData: any, form: any) => void;
  listMajors: any;
}

const ModalAddUser = ({ isOpen, handleCancel, onSave, listMajors }: props) => {
  const [form] = Form.useForm();

  return (
    <Modal
      title="Thêm thành viên"
      open={isOpen}
      onOk={() => {
        const formData = new FormData();
        for (const key in form.getFieldsValue()) {
          if (key === 'avatar')
            formData.append(key, form.getFieldsValue()[key]?.fileList[0]?.originFileObj);
          else formData.append(key, form.getFieldsValue()[key]);
        }
        onSave(formData, form);
      }}
      onCancel={handleCancel}
    >
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} labelAlign="left" form={form}>
        <Form.Item
          label="Họ và tên"
          name="fullName"
          rules={[{ required: true, message: 'Không được để trống' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tên tài khoản"
          name="username"
          rules={[{ required: true, message: 'Không được để trống' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Mật khẩu"
          name="password"
          rules={[{ required: true, message: 'Không được để trống' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item label="Số điện thoại" name="phone">
          <Input />
        </Form.Item>
        <Form.Item
          label="Khóa"
          name="age"
          labelAlign="left"
          rules={[{ required: true, message: 'Không được để trống!' }]}
        >
          <Select>
            {KHOA?.map((item: any) => (
              <Select.Option value={item}>{item}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Ngành học" name="major">
          <Select>
            {listMajors.current.map((item: any) => (
              <Select.Option value={item.id}>{item.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label="Vai trò" name="role">
          <Select>
            <Select.Option value="r1">Admin</Select.Option>
            <Select.Option value="r2">Cán bộ</Select.Option>
            <Select.Option value="r3">Sinh viên</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Avatar" name="avatar">
          <Upload listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAddUser;
