import React from 'react';
import styled from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from '../../utils/const';

type Props = {
  onClickIcon: () => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        marginLeft: DRAWER_WIDTH,
      },
    },
    // メニュー開閉ボタンはmobileのみ表示
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }),
);

export const TitleBarWithIcon = (props: Props) => {
  const { onClickIcon } = props;
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <SToolBar>
        <IconButton color="inherit" onClick={onClickIcon} className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
      </SToolBar>
    </AppBar>
  );
};

const SToolBar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
`;
