import {
  Dimensions, NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import React, {PropsWithChildren, ReactElement} from "react";

type Props = {
  scrollViewRef? : React.MutableRefObject<ScrollView>,
  scrollable? : boolean,
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  renderTab: () => ReactElement;
}

export default (props: PropsWithChildren<Props>) => <View style={styles.container}>
    <View style={styles.screenZone}>
      <ScrollView
        horizontal
        style={{height: "100%"}}
        showsHorizontalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").width}
        ref={props.scrollViewRef}
        scrollEnabled={props.scrollable}
        scrollEventThrottle={100}
        decelerationRate={"fast"}
        overScrollMode={"never"}
        bounces={false}
        onScroll={props.onScroll}
      >
        {props.children}
      </ScrollView>
    </View>
  {props.renderTab()}
  </View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
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
