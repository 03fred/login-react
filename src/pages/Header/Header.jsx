import React from 'react';

import Sidebar from '../../components/Sidebar/Sidebar';

const items = [
  { name: 'home', label: 'Home' },
  {
    name: 'billing',
    label: 'Billing',
    items: [
      { name: 'statements', label: 'Statements' },
      { name: 'reports', label: 'Reports' },
    ],
  },
  {
    name: 'settings',
    label: 'Settings',
    items: [{ name: 'profile', label: 'Profile' }],
  },
]

class Header extends React.Component
{
  render()
  {
    return (
        <Sidebar items={items} />
    )
  }
}
export default Header;
