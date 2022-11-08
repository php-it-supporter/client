import {
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Select,
  TreeSelect,
  Upload,
} from 'antd';

import { PlusOutlined } from '@ant-design/icons';

interface props {
  isOpen: boolean;
  handleCancel: () => void;
  handleOk: () => void;
}

const ModalAddUser = ({ isOpen, handleOk, handleCancel }: props) => {
  const { RangePicker } = DatePicker;
  const handleAddMember = () => Function;
  return (
    <Modal title="Thêm thành viên" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 14 }} labelAlign="left">
        <Form.Item label="Họ và tên">
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
        <Form.Item label="Số điện thoại">
          <Input />
        </Form.Item>
        <Form.Item label="Địa chỉ">
          <Input />
        </Form.Item>
        <Form.Item label="Ngành học">
          <Select>
            <Select.Option value="0">Khoa học máy tính</Select.Option>
            <Select.Option value="1">Kỹ thuật phần mềm</Select.Option>
            <Select.Option value="2">Hệ thống thông tin</Select.Option>
            <Select.Option value="3">Công nghệ thông tin</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Vai trò">
          <Select>
            <Select.Option value="0">Admin</Select.Option>
            <Select.Option value="1">Cán bộ</Select.Option>
            <Select.Option value="2">Sinh viên</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Upload" valuePropName="fileList">
          <Upload action="/upload.do" listType="picture-card">
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
