import React from 'react';
import { Form, Select, Input, Button, Modal } from 'antd';
import $ from 'jquery';
import data from '../../data';
const FormItem = Form.Item;
const Option = Select.Option;

class FormDangky extends React.Component {

  handleSubmit = (e) => {
    const { form, onCheckout } = this.props;
    const _this = this;

    e.preventDefault();

    form.validateFields((err, values) => {
      if (!err) {
        onCheckout(values);
      }
    });
  }

  handleSelectChange = (value) => {
    console.log(value);
  }

  handleCancel = () => {
    this.props.form.resetFields();
  }

  render() {
    const { form, isCheckout, disabledSubmit } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 },
    };
    
    return (
      <Form onSubmit={this.handleSubmit} >
        <FormItem
          label="Họ tên "
          {...formItemLayout}
        >
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Vui lòng điền họ tên !' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Số điện thoại "
          {...formItemLayout}
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Vui lòng điền số điện thoại!' }],
          })(
            <Input />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Email">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Vui lòng điền email!' }],
          })(
            <Input />
          )}
        </FormItem>
        {
          !isCheckout ?
        (<FormItem
          label="Sản phẩm "
          {...formItemLayout}
        >
          {getFieldDecorator('product', {
            rules: [{ required: true, message: 'Vui lòng chọn sản phẩm !' }],
          })(
            <Select
              placeholder="Vui lòng chọn "
              onChange={this.handleSelectChange}
            >
              <Option value="sp1">Dung Dịch Vệ Sinh Phụ Nữ I'm Nature</Option>
              <Option value="sp2">Mặt nạ thải độc Nano Mask I'm Nature</Option>
              <Option value="sp3">Kem làm dịu và phục hồi da Oran Baby</Option>
              <Option value="sp4">Dầu gội thảo mộc Argan 100ml</Option>
              <Option value="sp5">Sữa tắm trẻ em I’m Nature</Option>
              <Option value="sp6">Serum dầu gạo &amp; collagen I’m Nature</Option>
              <Option value="sp7">Sữa rửa mặt I’m Nature</Option>
              <Option value="sp8">Thảo dược ngâm chân I’m Nature</Option>
              <Option value="sp9">Serum làm hồng nhũ hoa và vũng kín</Option>
            </Select>
          )}
        </FormItem>)
        : null
        }
        <FormItem
          label="Địa chỉ "
          {...formItemLayout}
        >
          {getFieldDecorator('address')(
            <Input />
          )}
        </FormItem>
        <FormItem
          label="Ghi chú "
          {...formItemLayout}
        >
          {getFieldDecorator('remarks')(
            <Input />
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 18, offset: 6 }}
        >
          <Button type="primary" htmlType="submit" disabled={disabledSubmit}>
            Gửi 
          </Button>
          <Button onClick={this.handleCancel} style={{ marginLeft: 10 }}>
            Hủy 
          </Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create({})(FormDangky);