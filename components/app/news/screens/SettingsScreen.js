import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import styles from '../../../../assets/styles/SettingsScreenStyle';
import color from '../../../../assets/color';
import { UserContext } from '../../user/utilities/UserContext';

const SettingsScreen = ({navigation}) => {

  const {logout} = useContext(UserContext);

  const handleLogout = async () => {
    const result = await logout();
  }

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <View style={styles.navigate_view}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            style={styles.ic_back}
            source={require('../../../../assets/images/ic_back.png')}
          />
        </TouchableOpacity>

        <Text style={styles.title}>Settings</Text>
        <Text></Text>
      </View>

      <View style={styles.settings}>
        <View style={styles.setting_item}>
          <TouchableOpacity activeOpacity={0.4} style={styles.setting_custom}>
            <View style={styles.setting_custom_left}>
              <Image
                source={require('../../../../assets/images/ic_notifycation_16.png')}
              />
              <Text style={styles.setting_item_text}>Notification</Text>
            </View>
            <Image source={require('../../../../assets/images/ic_right.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.setting_item}>
          <TouchableOpacity activeOpacity={0.4} style={styles.setting_custom}>
            <View style={styles.setting_custom_left}>
              <Image
                source={require('../../../../assets/images/ic_secure.png')}
              />
              <Text style={styles.setting_item_text}>Security</Text>
            </View>
            <Image source={require('../../../../assets/images/ic_right.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.setting_item}>
          <TouchableOpacity activeOpacity={0.4} style={styles.setting_custom}>
            <View style={styles.setting_custom_left}>
              <Image
                source={require('../../../../assets/images/ic_help.png')}
              />
              <Text style={styles.setting_item_text}>Help</Text>
            </View>
            <Image source={require('../../../../assets/images/ic_right.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.setting_item}>
          <TouchableOpacity activeOpacity={0.6} style={styles.setting_custom}>
            <View style={styles.setting_custom_left}>
              <Image
                source={require('../../../../assets/images/ic_dark_mode.png')}
              />
              <Text style={styles.setting_item_text}>Dark Mode</Text>
            </View>
            <Switch
              trackColor={{false: '#767577', true: color.blue}}
              thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.setting_item}>
          <View style={styles.setting_custom}>
            <TouchableOpacity style={styles.setting_custom_left} onPress={handleLogout}>
              <Image
                source={require('../../../../assets/images/ic_logout.png')}
              />
              <Text style={styles.setting_item_text}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
