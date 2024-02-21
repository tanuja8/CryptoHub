import React from "react";
import { Select, Typography, Row, Col, Avatar, Card } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { SmileFilled } from "@ant-design/icons";

const { Text, Title } = Typography;
const { Option } = Select;
const News = ({ Smiplified}) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: Smiplified ? 10 : 100,
  });
  console.log(cryptoNews);
  return <div>News</div>;
};

export default News;
