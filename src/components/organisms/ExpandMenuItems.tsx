import React, { Dispatch, SetStateAction, useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';

import { MenuItem } from '../molecules/MenuItem';

type Props = {
  title: string;
  icon: string;
  menuItems: Array<{ title: string; path: string }>;
  onClose: () => void;
  selectedMenuPath: string;
  setSelectedMenuPath: Dispatch<SetStateAction<string>>;
};

export const ExpandMenuItems = (props: Props) => {
  const { title, icon, menuItems, onClose, selectedMenuPath, setSelectedMenuPath } = props;

  const [isOpen, setIsOpen] = useState(false);

  const onClickExpand = () => setIsOpen(!isOpen);

  return (
    <>
      <ListItem button onClick={onClickExpand}>
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={title} />
        {isOpen ? <Icon>expand_more</Icon> : <Icon>chevron_right</Icon>}
      </ListItem>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {menuItems.map((obj) => (
            <MenuItem
              title={obj.title}
              path={obj.path}
              onClose={onClose}
              selected={selectedMenuPath === obj.path}
              setSelectedMenuPath={setSelectedMenuPath}
              padded
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};
