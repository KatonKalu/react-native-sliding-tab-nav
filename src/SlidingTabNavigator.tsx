import React, {
  MutableRefObject,
  PropsWithChildren,
  ReactElement,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';

import withGradient from './withGradient';
import TabBar from './SlidingTabBar';
import SlidingTabNavigatorPresentation from './SlidingTabNavigatorPresentation';

import { ScreenProps } from './SlidingTabScreen';

export type State = {
  highlightedIndex: number;
};

export type Props = {
  /**
   * Name of the initial route. If left empty, the first route is the first child.
   */
  initialRouteName?: string;
  /**
   * Toggle wheter the navigator should respond to swipe by changing screen.
   */
  scrollable?: boolean;
  /**
   * Style to apply to the bottom tab.
   */
  tabStyle?: StyleProp<ViewStyle>;
  /**
   * Toggle whether to use or not a gradient background
   */
  withGradient?: boolean;
  /**
   * Array of colors to specify the gradients colors.
   */
  gradient?: string[];
};

/**
 * TODO:
 *  Disable native scroll view pan responder and use a pan gesture handler
 *  from gesture-handlers to control the gesture and use reanimated 2 to build
 * a handler.
 */
let highlightSuspended = false;
const suspendTimeout = 300;

const SlidingTabNavigator = (props: PropsWithChildren<Props>) => {
  const scrollView = useRef<ScrollView>(null);
  const screenMap: { name: string; index: number }[] = useRef([]).current;
  const Tab = useRef(
    props.withGradient
      ? withGradient(TabBar, {
          colors: props.gradient || [],
          style: styles.tab,
          start: { x: -0.5, y: -0.5 },
          end: { x: 1.3, y: 1.3 },
        })
      : TabBar
  ).current;

  const [highlightedIndex, setHighlighted] = useState(
    props.initialRouteName ? getIndex(props.initialRouteName) : 0
  );

  function suspendHighlight() {
    highlightSuspended = true;
  }

  function resumeHighlight() {
    highlightSuspended = false;
  }

  function initNameIndexMap() {
    React.Children.forEach(
      props.children,
      (child: React.Component<ScreenProps> | any, index) => {
        if (child) screenMap.push({ name: child.props.name, index });
      }
    );
  }

  function setInitialRoute() {
    // set the initial route name right after component is mounted
    let initialRouteName;
    if (Array.isArray(props.children)) {
      if (props.children[0])
        initialRouteName = props.initialRouteName
          ? props.initialRouteName
          : ((props.children[0] as unknown) as React.Component<ScreenProps>)
              .props.name;
    } else if (props.children) {
      initialRouteName = ((props.children as unknown) as React.Component<
        ScreenProps
      >).props.name;
    }

    if (initialRouteName) setCurrentScreen(initialRouteName);
  }

  function getNearestRouteIndexOnScroll(x: number): string {
    let nearestName = '';
    if (props.children && Array.isArray(props.children))
      if (props.children[0]) {
        let nearestDist = getDistance(
          x,
          getIndex(
            ((props.children[0] as unknown) as React.Component<ScreenProps>)
              .props.name
          )
        );
        React.Children.forEach(
          props.children,
          (child: React.Component<ScreenProps> | any, index) => {
            const dist = getDistance(x, index * Dimensions.get('window').width);
            if (dist <= nearestDist) {
              nearestName = child.props.name;
              nearestDist = dist;
            }
          }
        );
      }
    return nearestName;
  }

  function getDistance(x1: number, x2: number) {
    return Math.abs(x2 - x1);
  }

  function getIndex(name: string): number {
    const res = screenMap.find((s) => s.name === name);
    if (res != null) return res.index;
    return -1;
  }

  function setCurrentScreen(name: string) {
    const index = getIndex(name);
    if (index != null) {
      const toScroll = index * Dimensions.get('window').width;
      scrollView.current?.scrollTo({
        animated: false,
        x: toScroll,
      });
      setHighlighted(index);
    }
  }

  function navigate(name: string) {
    const index = getIndex(name);
    if (index != null) {
      const toScroll = index * Dimensions.get('window').width;
      scrollView.current?.scrollTo({
        animated: true,
        x: toScroll,
      });
      setHighlighted(index);
    }
  }

  useEffect(() => {
    // set screen name-index map
    initNameIndexMap();
    setInitialRoute();
  }, []);

  return (
    <SlidingTabNavigatorPresentation
      onScroll={(event) => {
        if (!highlightSuspended) {
          const nearestName = getNearestRouteIndexOnScroll(
            event.nativeEvent.contentOffset.x
          );
          const nearestIndex = getIndex(nearestName);
          setHighlighted(nearestIndex);
        }
      }}
      renderTab={() => (
        <Tab
          onPressIcon={(screenName) => {
            suspendHighlight();
            navigate(screenName);
            setTimeout(() => resumeHighlight(), suspendTimeout);
          }}
          isHighlightedConstraint={(screenName) => {
            if (highlightedIndex === getIndex(screenName)) {
              return true;
            }
            return false;
          }}
          screens={props.children as any}
          style={[styles.tab, props.tabStyle]}
        />
      )}
      scrollable={props.scrollable}
      scrollViewRef={scrollView as MutableRefObject<ScrollView>}
      children={props.children}
    />
  );
};

SlidingTabNavigator.defaultProps = {
  scrollable: false,
  withGradient: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  tab: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default SlidingTabNavigator;
