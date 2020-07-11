import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import { DRAWER_WIDTH } from '../utils/const';
import { TitleBar } from '../components/molecules/TitleBar';
import { TitleBarWithIcon } from '../components/molecules/TitleBarWithIcon';
import { SideMenu } from '../components/organisms/SideMenu';
import { Login } from '../components/pages/login/Login';
import { Top } from '../components/pages/menu/Top';
import { Page1 } from '../components/pages/menu/Page1';
import { Page2 } from '../components/pages/menu/Page2';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    // menu以下画面の共通レイアウト
    menuContainer: {
      paddingTop: '32px',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${DRAWER_WIDTH + 50}px)`,
        marginLeft: DRAWER_WIDTH,
        paddingLeft: '24px',
        paddingRight: '24px',
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '12px',
        paddingRight: '12px',
      },
    },
  }),
);

export const Router = () => {
  const classes = useStyles();

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() => (
            <>
              <TitleBar />
              <Login />
            </>
          )}
        />
        <Route
          path="/menu"
          render={({ match: { url } }) => (
            <>
              <TitleBarWithIcon onClickIcon={toggleMenu} />
              <SideMenu isOpen={isOpenMenu} onClose={toggleMenu} />
              <div className={classes.menuContainer}>
                <Switch>
                  <Route path={url} exact children={<Top />} />
                  <Route path={`${url}/page1`} children={<Page1 />} />
                  <Route path={`${url}/page2`} children={<Page2 />} />
                </Switch>
              </div>
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};
