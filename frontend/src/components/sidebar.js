import React from 'react';

import SideBarStyled from './sidebar.styled';
import Peoplelist from '../containers/people_list/people_list';
import Peoplestatus from '../containers/people_status/people_status';

const SideBar = () => {
  return (
    <SideBarStyled>
      <Peoplelist />
      <Peoplestatus />
    </SideBarStyled>
  );
};

export default SideBar;
