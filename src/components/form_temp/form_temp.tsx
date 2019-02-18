import React from "react";
import "./form_temp.scss";
import { Input, Form } from "antd";
import { FormComponentProps } from "antd/lib/form";

interface Props extends FormComponentProps {}

class Haha extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className="App">
        {/* <Header /> */}

        <Form>
          {getFieldDecorator("keyword", {})(
            <Input placeholder="input keyword" />
          )}
        </Form>
      </div>
    );
  }
}
export const FormTemp = Form.create()(Haha);
