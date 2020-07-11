import React from 'react';
import { useHistory } from 'react-router-dom';

export const Page1 = () => {
  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h2>ページ１です</h2>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
