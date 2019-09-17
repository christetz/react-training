import React from 'react';

import { CenterLayout, MenuLayout, Menu } from '@advanced-react/components';

export default {
  title: '4-Templates',
};

export const centerLayout = () => <CenterLayout renderContent={() => <h1>Center</h1>} />;

export const menuLayout = () => <MenuLayout renderContent={() => <h1>Content</h1>} renderMenu={() => <Menu />} />;
