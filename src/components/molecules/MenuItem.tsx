import React, { Dispatch, SetStateAction } from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

type Props = {
  title: string;
  icon?: string;
  path?: string;
  onClose: () => void;
  selected: boolean;
  setSelectedMenuPath: Dispatch<SetStateAction<string>>;
  padded?: boolean;
};

export const MenuItem = (props: Props) => {
  const { title, icon, path, onClose, selected, setSelectedMenuPath, padded } = props;
  const history = useHistory();

  const listStyle = {
    paddingLeft: padded ? '64px' : '16px',
  };

  const onClickMenu = () => {
    if (path) {
      setSelectedMenuPath(path);
      onClose();
      history.push(`${path}`);
    }
  };

  return (
    <ListItem button key={title} onClick={onClickMenu} selected={selected} style={listStyle}>
      {icon && (
        <ListItemIcon>
          <Icon>{icon}</Icon>
        </ListItemIcon>
      )}
      <ListItemText primary={title} />
    </ListItem>
  );
};
