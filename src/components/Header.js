
import React from 'react';
import { MoreOutlined } from '@ant-design/icons';
import { Dropdown, Button, Space, Tooltip } from 'antd';

function filterResults(event, props) {
  let filteredPins = props.pinsToFilter.filter((pin) => {
    let tags = JSON.stringify(pin.props.pinDetails.tags);
    return tags.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1;
  });
  props.filterPins(filteredPins);
}

function Header(props) {
  //todo: extract Dropdown definitions to separate file
  const items = [
    {
      label: <span>Profile</span>,
      key: '0',
    },
    {
      label: <span>Settings</span>,
      key: '1',
    },
    {
      label: <span>Contact</span>,
      key: '2',
    },
  ];
  return (
    <div className='pinterest'>
      <div className='left'>
        <Tooltip title='Homepage'>
          <a href='/' className='logo'>
            <img src='./images/logo.png' alt='logo' className='logo' />
          </a>
        </Tooltip>
      </div>
      <div className='search'>
        <img src='./images/loupe.png' alt='loupe' style={{ maxHeight: '50%', paddingLeft: '15px', paddingRight: '10px', opacity: '0.5' }} />
        <input onChange={(event) => filterResults(event, props)} type='search' name='' placeholder='Search by keywords, f.ex. Nature or NYC' id='' />
      </div>
      <div className='right'>
        <div className='items'>
          <Dropdown menu={{ items }} trigger={['click']}>
            <Space direction='vertical'>
              <Space wrap>
                <Tooltip title='More'>
                  <Button type='default' shape='circle' icon={<MoreOutlined />} />
                </Tooltip>
              </Space>
            </Space>
          </Dropdown>
        </div>
        <Tooltip title='Profile'>
          <a href='/' className='avatar'>
            <div className='img'>
              <img src='https://avatars.githubusercontent.com/u/45184925?v=4' alt='' />
            </div>
          </a>
        </Tooltip>
      </div>
    </div>
  );
}

export default Header;