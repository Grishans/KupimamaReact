import React from "react";

import { Table, Space, InputNumber, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Headers, Footer, SectionWrap } from "../components";

const Basket = () => {
  function onChange(value) {
    console.log("changed", value);
  }
  const columns = [
    {
      title: "№",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Фото",
      dataIndex: "photo",
      key: "photo",
    },
    {
      title: "Количество",
      dataIndex: "quantity",
      key: "quantity",
      render: () => (
        <Space>
          <InputNumber
            min={1}
            max={1000}
            defaultValue={1}
            onChange={onChange}
          />
        </Space>
      ),
    },
    {
      title: "Цена за шт.",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Название товара",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Суммарная стоимость",
      dataIndex: "sumPrice",
      key: "sumPrice",
    },
    {
      title: "",
      dataIndex: "btn",
      key: "btn",
      render: () => (
        <Space size="middle">
          <a href="#">Отмена</a>
        </Space>
      ),
    },
  ];

  const data = [
    {
      number: "1",
      photo: "Photo",

      price: "12000 р.",
      name: "Коляска",
      sumPrice: "50000 р.",
    },
    {
      number: "2",
      photo: "Photo",

      price: "12000 р.",
      name: "Коляска",
      sumPrice: "50000 р.",
    },
    {
      number: "3",
      photo: "Photo",

      price: "12000 р.",
      name: "Коляска",
      sumPrice: "50000 р.",
    },
  ];

  const [filtered, setFiltered] = React.useState("");
  const [sorted, setSorted] = React.useState("");

  const filter_out = (e) => {
    setFiltered(e);
  };
  const sorted_out = (e) => {
    setSorted(e);
  };

  const filterSort = (
    <Menu>
      <Menu.Item key="0" onClick={() => sorted_out("Доставка")}>
        Доставка
      </Menu.Item>
      <Menu.Item key="1" onClick={() => sorted_out("Самовывоз")}>
        Самовывоз
      </Menu.Item>
    </Menu>
  );

  return (
    <>
      <Headers />
      <SectionWrap>
        <div className="myPurch_content">
          <p className="title">Корзина</p>
          <Table
            columns={columns}
            dataSource={data}
            bordered={true}
            pagination={false}
          />

          <div className="pc_deliver">
            <div className="pcd_box">
              <div className="pcd_left">
                <p>
                  Доставка по городу - <span>500р.</span>
                </p>
                <p>
                  Бесплатная доставка по городу - при заказе от{" "}
                  <span>10 000р.</span>
                </p>
              </div>

              <div className="pcd_right">
                <p>Способ доставки</p>

                <Dropdown overlay={filterSort} trigger={["click"]}>
                  <button
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {sorted ? sorted : "Доставка"} <DownOutlined />
                  </button>
                </Dropdown>

                <label for="adress">Адресс доставки:</label>
                <input
                  type="text"
                  id="adress"
                  placeholder="Адресс"
                  className="inpAdress"
                />
              </div>
            </div>

            <button type="button">Оплатить</button>

            <div className="pcd_opt">
              <a href="#">Для оптовых закупок</a>
              <a href="#">Позникли вопросы?</a>
            </div>
          </div>
        </div>
      </SectionWrap>
      <Footer />
    </>
  );
};

export default Basket;
