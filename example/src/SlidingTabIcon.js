import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, } from 'react-native';
const SlidingTabIcon = (props) => {
    const animScale = useRef(new Animated.Value(1)).current;
    const animYDelta = useRef(new Animated.Value(0)).current;
    const animLabelOpacity = useRef(new Animated.Value(0)).current;
    const animScaleMax = 1.2;
    const animYDeltaMax = -4;
    const animLabelOpacityMax = 1;
    let child = props.item;
    // define animations for focusing
    const highlightAnim = () => {
        Animated.parallel([
            Animated.spring(animScale, {
                toValue: animScaleMax,
                useNativeDriver: true,
            }),
            Animated.spring(animYDelta, {
                toValue: animYDeltaMax,
                useNativeDriver: true,
            }),
            Animated.spring(animLabelOpacity, {
                toValue: animLabelOpacityMax,
                useNativeDriver: true,
            }),
        ]).start();
    };
    // define animation for unfocusing
    const unfocusAnim = () => {
        Animated.parallel([
            Animated.spring(animScale, {
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.spring(animYDelta, {
                toValue: 0,
                useNativeDriver: true,
            }),
            Animated.spring(animLabelOpacity, {
                toValue: 0,
                useNativeDriver: true,
            }),
        ]).start();
    };
    if (props.isHighlighted) {
        if (props.renderHighlighted) {
            // render the highlighted element instead of the default
            child = props.renderHighlighted;
        }
    }
    // clone the child and apply user defined styles
    let toRender = React.cloneElement(child, {
        style: [styles.icon, props.iconStyle],
    });
    // animate the icon when is being highlighted
    useEffect(() => {
        props.isHighlighted ? highlightAnim() : unfocusAnim();
    }, [props.isHighlighted]);
    return (<TouchableWithoutFeedback onPress={() => {
        props.onPress();
    }}>
      <Animated.View style={[
        styles.iconContainerStyle,
        props.iconContainerStyle,
        { transform: [{ scale: animScale }, { translateY: animYDelta }] },
    ]}>
        {toRender}
        {props.label && props.isHighlighted ? (<Animated.Text style={[
        styles.labelStyle,
        props.labelStyle,
        {
            opacity: animLabelOpacity,
        },
    ]}>
            {props.label}
          </Animated.Text>) : null}
      </Animated.View>
    </TouchableWithoutFeedback>);
};
const styles = StyleSheet.create({
    iconContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
    },
    labelStyle: {
        position: 'absolute',
        textAlign: 'center',
        fontSize: 9,
        top: 23,
    },
    icon: {
        flex: 1,
    },
});
export default SlidingTabIcon;
//# sourceMappingURL=SlidingTabIcon.js.map