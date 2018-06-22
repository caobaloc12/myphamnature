import React from 'react';
import { Modal, Form, Input, InputNumber, Select, Button } from 'antd';

const {Item: FormItem} = Form;
const {Option} = Select;

class PurchaseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  showModelHandler = e => {
    if (e) e.stopPropagation();
    this.setState({
      visible: true,
    });
  };

  hideModelHandler = () => {
    this.setState({
      visible: false,
    });
  };

  okHandler = (e) => {
    e.preventDefault();
    const { onOk, form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        onOk(values);
        form.resetFields();
        this.hideModelHandler();
      }
    });
  };

  handleCancel = () => {
    this.props.form.resetFields();
  }

  render() {
    const { children, form, productId, quantity } = this.props;
    const { getFieldDecorator } = form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };

    return (
      <span>
        <span onClick={this.showModelHandler}>{children}</span>
        <Modal
          title="Thông tin đặt hàng "
          visible={this.state.visible}
          onOk={this.okHandler}
          onCancel={this.hideModelHandler}
          footer={null}
        >
          <Form layout="horizontal" onSubmit={this.okHandler}>
            <FormItem {...formItemLayout} label="Họ tên">
              {getFieldDecorator('name', {
                rules: [{ required: true, message: 'Vui lòng điền họ tên !' }],
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Số điện thoại">
              {getFieldDecorator('phone', {
                rules: [{ required: true, message: 'Vui lòng điền số điện thoại!' }],
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Email">
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Vui lòng điền email!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Sản phẩm">
              {getFieldDecorator('product', {
                initialValue: productId,
                rules: [{ required: true, message: 'Vui lòng chọn sản phẩm!' }],
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
            <FormItem {...formItemLayout} label="Số lượng">
              {getFieldDecorator('quantity', {
                  initialValue: quantity
              })(
                <InputNumber />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Địa chỉ">
              {getFieldDecorator('address', {})(
                <Input />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="Ghi chú">
              {getFieldDecorator('note', {})(
                <Input />
              )}
            </FormItem>
            <FormItem
                wrapperCol={{ span: 14, offset: 6 }}
                >
                <Button type="primary" htmlType="submit">
                    Gửi 
                </Button>
                <Button onClick={this.handleCancel} style={{ marginLeft: 10 }}>
                    Hủy 
                </Button>
            </FormItem>
          </Form>
        </Modal>
      </span>
    );
  }
}

export default Form.create()(PurchaseModal);