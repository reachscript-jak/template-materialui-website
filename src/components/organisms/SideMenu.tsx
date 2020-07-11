import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useLocation } from 'react-router-dom';

import { MENU } from '../../utils/const';
import { MenuItem } from '../molecules/MenuItem';
import { ExpandMenuItems } from './ExpandMenuItems';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickMenu?: (value: string) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // toolbarの高さ分をメニュー上部に確保
    toolbar: theme.mixins.toolbar,
  }),
);

export const SideMenu = (props: Props) => {
  const { isOpen, onClose } = props;
  const bodyContainer = window !== undefined ? () => window.document.body : undefined;
  const classes = useStyles();
  const location = useLocation();

  // URLから選択マークつけるサイドメニューを判定
  const getSelectedMenu = (nowPath: string) => {
    const splitWords = nowPath.split('/');
    // /menu or /menu/[各メニュー]
    return splitWords.length > 2 ? `/${splitWords[1]}/${splitWords[2]}` : `/${splitWords[1]}`;
  };

  const [selectedMenuPath, setSelectedMenuPath] = useState(getSelectedMenu(location.pathname));

  // URLが変更する度選択マークをつけるサイドメニューを指定
  useEffect(() => {
    setSelectedMenuPath(getSelectedMenu(location.pathname));
  }, [location.pathname]);

  const drawer = (
    <div>
      <SLogo className={classes.toolbar}>Web</SLogo>
      <Divider />
      <List>
        {MENU.map((obj) => {
          if (obj.menuItems.length === 0) {
            return (
              <MenuItem
                title={obj.title}
                icon={obj.icon}
                path={obj.path}
                onClose={onClose}
                selected={selectedMenuPath === obj.path}
                setSelectedMenuPath={setSelectedMenuPath}
              />
            );
          } else {
            return (
              <ExpandMenuItems
                title={obj.title}
                icon={obj.icon}
                menuItems={obj.menuItems}
                onClose={onClose}
                selectedMenuPath={selectedMenuPath}
                setSelectedMenuPath={setSelectedMenuPath}
              />
            );
          }
        })}
      </List>
    </div>
  );

  return (
    <nav>
      <Hidden smUp>
        <Drawer
          container={bodyContainer}
          variant="temporary"
          open={isOpen}
          onClose={onClose}
          ModalProps={{ keepMounted: true }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer variant="permanent" open>
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

const SLogo = styled.div`
  background-color: #3f51b5;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 24px;
  font-size: 20px;
  font-weight: bold;
`;
