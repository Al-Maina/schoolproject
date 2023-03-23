import React from 'react';
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputCustom = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password);

  return (
    <SafeAreaView>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.label}>{label}</Text>

        <View
          style={[
            styles.inputContainer,
            {
              borderColor: error ? 'red' : isFocused ? 'gold' : 'black',
            },
          ]}
        >
          <Icon
            name={iconName}
            style={{ fontSize: 15, color: 'black', marginRight: 10 }}
          />
          <TextInput
            secureTextEntry={hidePassword}
            autoCorrect={false}
            onFocus={() => {
              onFocus();
              setIsFocused(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            style={{ color: 'black', flex: 1 }}
            {...props}
          />
          {password && (
            <Icon
              onPress={() => setHidePassword(!hidePassword)}
              style={{ fontSize: 22, color: 'darkblue' }}
              name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            />
          )}
        </View>
        {error && (
          <Text style={{ color: 'red', fontSize: 20 }}>{error}</Text>
        )}
        <View></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});

export default InputCustom;
