import React from 'react';
import { useHistory, Link } from 'react-router-dom';

export const Top = () => {
  const history = useHistory();

  const onClickToPage2 = () => history.push('/menu/page2');

  return (
    <div>
      <h2>TOPページです</h2>
      <Link to="/menu/page1">ページ１</Link>
      <br />
      <br />
      <button onClick={onClickToPage2}>ページ２</button>
    </div>
  );
};
