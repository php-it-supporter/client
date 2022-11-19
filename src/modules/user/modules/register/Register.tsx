import { Button, Form, Input, Select, Upload } from 'antd';
import React, { useRef, useEffect, useState } from 'react';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ImgCrop from 'antd-img-crop';
import { PlusOutlined } from '@ant-design/icons';
import { getAllMajor } from '../../../../apis/admin';
import image from '../../../../atoms/images/background.png';
import logo from '../../../../atoms/images/logo.png';

const Register = () => {
  const listMajors = useRef([]);
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  console.log(fileList);

  const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  // console.log(user);

  const fetchAllMajors = async () => {
    try {
      const res = await getAllMajor();
      if (res) listMajors.current = res.data.data;
    } catch (error) {
      toast.error('Kết nối bị lỗi');
    }
  };

  useEffect(() => {
    fetchAllMajors();
  }, []);

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="flex items-center w-[100vw] h-[100vh] relative">
      <div className="w-[50vw] flex flex-col items-center ">
        <img src={logo} alt="" className="w-[200px] absolute top-[5vh]" />
        <div className="font-[700] text-[32px] text-[#33333] mb-[20px]">Đăng ký</div>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="w-[50%] px-[40px]"
        >
          <Form.Item
            label="Họ và tên"
            name="fullName"
            labelAlign="left"
            rules={[{ required: true, message: 'Họ và tên không được để trống' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tên đăng nhập"
            name="username"
            labelAlign="left"
            rules={[{ required: true, message: 'Tên đăng nhập không được để trống!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="password"
            labelAlign="left"
            rules={[{ required: true, message: 'Mật khẩu không được để trống!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item label="Số điện thoại" name="phone" labelAlign="left">
            <Input />
          </Form.Item>
          <Form.Item label="Tuổi" name="age" labelAlign="left">
            <Input />
          </Form.Item>
          <Form.Item label="Ngành học" name="major" labelAlign="left">
            <Select>
              {listMajors.current.map((item: any) => (
                <Select.Option value={item.id}>{item.name}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item label="Avatar" valuePropName="fileList" labelAlign="left">
            <ImgCrop rotate>
              <Upload
                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                listType="picture-card"
                fileList={fileList}
                onChange={onChange}
                onPreview={onPreview}
              >
                {fileList.length < 1 && '+ Upload'}
              </Upload>
            </ImgCrop>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }} className="text-right">
            <Button htmlType="submit">Đăng ký</Button>
          </Form.Item>
        </Form>
        <div className="flex gap-[12px] items-center">
          <div className="font-[500] text-[16px]">Bạn đã có tài khoản?</div>
          <Link to="/login" className="font-[500] text-[16px]">
            Đăng nhập
          </Link>
        </div>
      </div>
      <div className="flex-1 h-[100vh]">
        <img src={image} alt="" className="flex-1 object-cover w-full h-full " />
      </div>
    </div>
  );
};

export default Register;
