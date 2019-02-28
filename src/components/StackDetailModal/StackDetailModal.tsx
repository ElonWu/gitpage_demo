import * as React from "react";
import { IStack } from "models/stack";
import { Modal } from "antd";

interface Props {
  stack: IStack;
  onClose: () => void;
}
export class StackDetailModal extends React.Component<Props> {
  render() {
    const { stack = {} as IStack, onClose } = this.props;
    const { title = "", icon = "", desc = "" } = stack;
    return (
      <Modal
        visible={true}
        title={title}
        onOk={onClose}
        onCancel={onClose}
        okText=""
        cancelText=""
        className="stack-detail-modal"
      >
        <h3>{title}</h3>
        <p>{desc}</p>

        <i className="close" onClick={onClose}>
          close
        </i>
      </Modal>
    );
  }
}
