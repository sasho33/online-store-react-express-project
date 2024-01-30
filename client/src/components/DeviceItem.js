import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { DEVICE_ROUTE } from '../utils/const';

const DeviceItem = ({ device }) => {
  const history = useHistory();

  return (
    <Col
      md={3}
      xs={6}
      className="d-flex justify-content-around mt-3"
      onClick={() => {
        history.push(DEVICE_ROUTE + '/' + device.id);
      }}
    >
      <Card style={{ width: 150, cursor: 'pointer' }} border={'light'}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + '/' + device.img} />
        <div className="d-flex mt-1 justify-content-between align-items-center text-black-50">
          <div>Samsung s24...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image height={18} width={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
