import {Button, Message, Popconfirm, Space} from "@arco-design/web-react";
import {IconDelete, IconFire, IconThunderbolt} from "@arco-design/web-react/icon";
import React from "react";
import {TabProps} from "./class"

export const TabStart = ({next}: TabProps) => {
  const cleanCache = () => {
    Message.info({
      content: "下载缓存已清理",
    });
  }
  return (
    <div className="burn__tab-inner__container">
      <IconFire className="burn__tab-inner__icon"/>
      <Space direction="vertical">
        <h1>准备好拥有属于自己的 Edgeless 启动盘了吗？</h1>
        <div>
          <p>插入一个 U 盘，Hub 会将其制作为 Edgeless 启动盘</p>
          <p>如果你插入了一个 Ventoy 启动盘，则可无损部署 Edgeless</p>
        </div>
      </Space>

      <Button.Group>
        <Button
          type="primary"
          size="large"
          onClick={() => next()}
        >
          <IconThunderbolt/>
          立即开始
        </Button>
        <Popconfirm
          title="清理缓存后需要重新下载依赖文件。如果你确实遇到了制作错误请点击“确认删除”，然后尝试重新制作。"
          okText="确认删除"
          onOk={cleanCache}
        >
          <Button
            type="primary"
            size="large"
            icon={<IconDelete/>}
          />
        </Popconfirm>
      </Button.Group>
    </div>
  )
}