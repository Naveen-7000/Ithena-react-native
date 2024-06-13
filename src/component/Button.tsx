import React, {useState} from 'react';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {ButtonProps} from '../types';

const Button: React.FC<ButtonProps> = ({
  title,
  color,
  disabled = false,
  onClick,
}) => {
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    if (disabled || loading) return;
    setLoading(true);
    try {
      await onClick();
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {borderColor: color, opacity: disabled || loading ? 0.6 : 1},
        disabled || loading ? styles.buttonDisabled : null,
      ]}
      disabled={disabled || loading}
      onPress={handlePress}>
      {loading ? (
        <ActivityIndicator size="small" color={color} />
      ) : (
        <Text style={[styles.buttonText, {color: disabled ? '#999' : color}]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 30,
    textAlign: 'center',
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  buttonDisabled: {
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default Button;
