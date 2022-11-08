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

const ModalEditUser = ({ isOpen, handleOk, handleCancel }: props) => {
  const { RangePicker } = DatePicker;
  const handleAddMember = () => Function;
  return (
    <Modal title="Sửa thông tin thành viên" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className="flex justify-between bg-white items-center p-[12px] border border-solid border-[#CAD8E6] rounded-[4px] mb-[16px] px-[16px]">
        <div className="flex items-center">
          <img
            src="https://vcdn1-giaitri.vnecdn.net/2022/08/25/Avatar-213-8923-1661403266.png?w=0&h=0&q=100&dpr=2&fit=crop&s=KWo2kCkyQr5Xxia52ObvvA"
            alt=""
            className="h-[60px] w-[60px] rounded-full mr-[12px] object-cover"
          />
          <div>
            <p className="font-[700] font-[16px] leading-[18px] uppercase text-[#333333] mb-0">
              Hồ Minh Hải
            </p>
            <div className="flex font-[400] font-[12px] leading-[14px] text-[#797979] mt-[8px] mb-0">
              <p className="m-[0_5px_0_0]">Ngày tạo</p>
              <p>12/12/2022</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="font-[400] font-[14px] leading-[16px] text-[#797979]">Vai trò</p>
          <p className={`font-[400] font-[14px] leading-[16px] mt-[8px] text-[#208B33]`}>Admin</p>
        </div>
      </div>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        labelAlign="left"
        className="px-[20px]"
      >
        <Form.Item label="Họ và tên">
          <Input disabled />
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

export default ModalEditUser;
