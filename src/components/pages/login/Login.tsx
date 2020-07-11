import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

export const Login = () => {
  const history = useHistory();

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLogin = () => history.push('/menu');

  return (
    <SContainer>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={9} sm={6} md={3}>
          <SPaper elevation={4}>
            <SLogin>ログイン</SLogin>
            <SDivider />
            <SForm autoComplete="off">
              <STextField
                label="ユーザーID"
                defaultValue={userId}
                variant="outlined"
                size="small"
                onChange={(e) => setUserId(e.target.value)}
              />
              <STextField
                label="パスワード"
                defaultValue={password}
                variant="outlined"
                size="small"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <SButtonArea>
                <Button type="submit" color="primary" variant="contained" fullWidth onClick={onSubmitLogin}>
                  ログイン
                </Button>
              </SButtonArea>
            </SForm>
          </SPaper>
        </Grid>
      </Grid>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;
const SPaper = styled(Paper)`
  padding: 42px 36px 12px 36px;
  text-align: center;
`;
const SLogin = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;
const SDivider = styled(Divider)`
  &&& {
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;
const SForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`;
const STextField = styled(TextField)`
  &&& {
    margin: 6px 0;
  }
`;
const SButtonArea = styled.div`
  padding-top: 18px;
`;
