import React from "react";

import { Headers, Footer, SectionWrap, FeedBackForm } from "../components";

import { Form, Input, Select, Button, AutoComplete } from "antd";

const FeedbackForm = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not validate email!",
      number: "${label} is not a validate number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Headers />
      <SectionWrap>
        <p className="title">Форма обратной связи</p>
        <FeedBackForm />
      </SectionWrap>
      <Footer />
    </>
  );
};

export default FeedbackForm;
