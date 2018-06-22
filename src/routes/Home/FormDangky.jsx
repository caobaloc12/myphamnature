import React from 'react';
import { Form, Select, Input, Button, Modal } from 'antd';
import $ from 'jquery';
import data from '../../data';
const FormItem = Form.Item;
const Option = Select.Option;

class FormDangky extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const _this = this;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const url = "https://docs.google.com/forms/d/e/1FAIpQLSeB9fimEskgBHOHa7rB7ci7ePgM-8mHCfl66t5l9N4sLczF4g/formResponse";
        const product = data.filter(item => item.id === values.product);

        const postData = {
            "entry.1545390167": values.name, 
            "entry.1754734183": values.phone,
            "entry.646369243": values.email,
            "entry.1732211460": product[0].tenSp,
            "entry.1832057127": values.address,
            "entry.227536673": values.quantity,
            "entry.1662075176": values.note, 
        }

        $.ajax({
            url: url,
            method: "POST",
            dataType: "xml",
            data: postData,
            statusCode: {
                0: () => {
                  Modal.success({
                    title: 'Gửi liên hệ thành công!',
                    okText: 'OK',
                    content: (
                      <div>
                        <p>Cảm ơn bạn đã liên vệ với chúng tôi. </p>
                        <p>Chúng tôi sẽ gọi điện tư vấn cho bạn trong thời gian sớm nhất! </p>
                      </div>
                    ),
                    onOk() {
                      _this.props.form.resetFields();
                    },
                  });
                },
                200: () => {
                  Modal.success({
                    title: 'Gửi liên hệ thành công!',
                    content: (
                      <div>
                        <p>Cảm ơn bạn đã liên vệ với chúng tôi. </p>
                        <p>Chúng tôi sẽ gọi điện tư vấn cho bạn trong thời gian sớm nhất! </p>
                      </div>
                    ),
                    onOk() {
                      _this.props.form.resetFields();
                    },
                  });
                }
            }
        })
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
    const { getFieldDecorator } = this.props.form;
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
        <FormItem
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
        </FormItem>
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
          {getFieldDecorator('note')(
            <Input />
          )}
        </FormItem>
        <FormItem
          wrapperCol={{ span: 18, offset: 6 }}
        >
          <Button type="primary" htmlType="submit">
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