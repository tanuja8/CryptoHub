import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useParams} from 'react-router-dom/cjs/react-router-dom.min';
import millify from 'millify';
import { Col,Row,Typography,Select } from 'antd';
import { MoneyCollectOutlined, DollarCircleOutlined, FundOutlined, ExclamationCircleOutlined, StopOutlined, TrophyOutlined, CheckOutlined, NumberOutlined, ThunderboltOutlined } from '@ant-design/icons';


const {Title,Text}=Typography;
const{Option}=Select;
const CryptoDetail = () => {
  const {coinId}=useParams()
  const[timePeriod,setTimePeriod]=useState('7d')
  return (
    <div>
      cryptoDetails{coinId}
    </div>
  )
}

export default CryptoDetail
