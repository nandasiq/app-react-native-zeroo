import React, {useState, useEffect} from 'react';
import {TouchableOpacity, StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import MyPlacesIcon from '../MyPlaces/index';

import styles from './styles';

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  myPlace?: boolean;
  size?: number;
};

const CheckBox: React.FC<Props> = ({
  checked,
  onChange,
  style,
  myPlace,
  size,
}): JSX.Element => {
  const [isChecked, setChecked] = useState<boolean>(checked);

  useEffect(() => {
    setChecked(checked);
  }, [checked]);

  const handleCheck = () => {
    const newState = !isChecked;
    onChange(newState);
    setChecked(newState);
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        isChecked ? styles.checked : styles.unchecked,
        myPlace ? styles.myPlaceContainer : null,
      ]}
      onPress={handleCheck}>
      {myPlace ? (
        <MyPlacesIcon
          height={size || 15}
          width={size || 15}
          color={isChecked ? 'purple' : 'transparent'}
        />
      ) : (
        <Icon size={size || 15} name="check" color="purple" />
      )}
    </TouchableOpacity>
  );
};

export default React.memo(CheckBox);
