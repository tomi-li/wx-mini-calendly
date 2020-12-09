import React, { useEffect } from 'react';
import { View } from 'remax/wechat';
import styles from './index.css';

export default () => {

  useEffect(() => {
    load()
  }, []);

  return (
    <View className={styles.app}>
      <View className={styles.header}>
        this is wechat version of remax
      </View>
    </View>
  );
};

const load = () => {
  wx.getUserInfo({
    success: result => {
      console.log(result.userInfo);
    }
  })

  console.log(wx.getAccountInfoSync());
  return wx.request({
    url: 'http://localhost:8080/v1/user/'
  })
};
