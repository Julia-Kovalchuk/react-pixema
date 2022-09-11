import React, { useState } from "react";
import "antd/dist/antd.css";
// import "./index.css";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { StyledLoading } from "./styles";

export const Loading = () => {
  return <StyledLoading type="primary" loading />;
};
