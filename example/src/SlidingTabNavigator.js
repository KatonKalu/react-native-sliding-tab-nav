import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, } from 'react-native';
import withGradient from './withGradient';
import TabBar from './SlidingTabBar';
import SlidingTabNavigatorPresentation from './SlidingTabNavigatorPresentation';
/**
 * TODO:
 *  Disable native scroll view pan responder and use a pan gesture handler
 *  from gesture-handlers to control the gesture and use reanimated 2 to build
 * a handler.
 */
let highlightSuspended = false;
const suspendTimeout = 300;
const SlidingTabNavigator = (props) => {
    const scrollView = useRef(null);
    const screenMap = useRef([]).current;
    const Tab = useRef(props.withGradient
        ? withGradient(TabBar, {
            colors: props.gradient || [],
            style: styles.tab,
            start: { x: -0.5, y: -0.5 },
            end: { x: 1.3, y: 1.3 },
        })
        : TabBar).current;
    const [highlightedIndex, setHighlighted] = useState(props.initialRouteName ? getIndex(props.initialRouteName) : 0);
    function suspendHighlight() {
        highlightSuspended = true;
    }
    function resumeHighlight() {
        highlightSuspended = false;
    }
    function initNameIndexMap(props) {
        React.Children.forEach(props.children, (child, index) => {
            if (child)
                screenMap.push({ name: child.props.name, index });
        });
    }
    function setInitialRoute() {
        // set the initial route name right after component is mounted
        let initialRouteName;
        if (Array.isArray(props.children)) {
            if (props.children[0])
                initialRouteName = props.initialRouteName
                    ? props.initialRouteName
                    : props.children[0]
                        .props.name;
        }
        else if (props.children) {
            initialRouteName = props.children.props.name;
        }
        if (initialRouteName)
            setCurrentScreen(initialRouteName);
    }
    function getNearestRouteIndexOnScroll(x) {
        let nearestName = '';
        if (props.children && Array.isArray(props.children))
            if (props.children[0]) {
                let nearestDist = getDistance(x, getIndex(props.children[0]
                    .props.name));
                React.Children.forEach(props.children, (child, index) => {
                    const dist = getDistance(x, index * Dimensions.get('window').width);
                    if (dist <= nearestDist) {
                        nearestName = child.props.name;
                        nearestDist = dist;
                    }
                });
            }
        return nearestName;
    }
    function getDistance(x1, x2) {
        return Math.abs(x2 - x1);
    }
    function getIndex(name) {
        const res = screenMap.find((s) => s.name === name);
        if (res != null)
            return res.index;
        return -1;
    }
    function setCurrentScreen(name) {
        var _a;
        const index = getIndex(name);
        if (index != null) {
            const toScroll = index * Dimensions.get('window').width;
            (_a = scrollView.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                animated: false,
                x: toScroll,
            });
            setHighlighted(index);
        }
    }
    function navigate(name) {
        var _a;
        const index = getIndex(name);
        if (index != null) {
            const toScroll = index * Dimensions.get('window').width;
            (_a = scrollView.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                animated: true,
                x: toScroll,
            });
            setHighlighted(index);
        }
    }
    useEffect(() => {
        // set screen name-index map
        initNameIndexMap(props);
        setInitialRoute();
    }, []);
    return (<SlidingTabNavigatorPresentation onScroll={(event) => {
        if (!highlightSuspended) {
            const nearestName = getNearestRouteIndexOnScroll(event.nativeEvent.contentOffset.x);
            const nearestIndex = getIndex(nearestName);
            setHighlighted(nearestIndex);
        }
    }} renderTab={() => (<Tab onPressIcon={(screenName) => {
        suspendHighlight();
        navigate(screenName);
        setTimeout(() => resumeHighlight(), suspendTimeout);
    }} isHighlightedConstraint={(screenName) => {
        if (highlightedIndex === getIndex(screenName)) {
            return true;
        }
        return false;
    }} screens={props.children} style={[styles.tab, props.tabStyle]}/>)} scrollable={props.scrollable} scrollViewRef={scrollView} children={props.children}/>);
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
//# sourceMappingURL=SlidingTabNavigator.js.map