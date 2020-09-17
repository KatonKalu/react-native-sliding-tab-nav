import { ScrollView, StyleSheet, View, } from 'react-native';
import React from 'react';
export default (props) => (<View style={styles.container}>
    <View style={styles.screenZone}>
      <ScrollView horizontal style={{ height: '100%' }} showsHorizontalScrollIndicator={false} pagingEnabled ref={props.scrollViewRef} scrollEnabled={props.scrollable} scrollEventThrottle={100} overScrollMode={'never'} bounces={false} onScroll={props.onScroll}>
        {props.children}
      </ScrollView>
    </View>
    {props.renderTab()}
  </View>);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    screenZone: {
        flex: 1,
        flexDirection: 'column',
    },
    tab: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    screen: {
        flex: 1,
    },
    iconContainerStyle: {
        flex: 1,
        alignItems: 'stretch',
    },
});
//# sourceMappingURL=SlidingTabNavigatorPresentation.js.map