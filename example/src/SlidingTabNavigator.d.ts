import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ScreenProps } from './SlidingTabScreen';
export declare type State = {
    highlightedIndex: number;
};
export declare type Props = {
    children?: React.ReactElement<ScreenProps> | React.ReactElement<ScreenProps>[];
    initialRouteName?: string;
    scrollable?: boolean;
    tabStyle?: StyleProp<ViewStyle>;
    withGradient?: boolean;
    gradient?: string[];
};
declare const SlidingTabNavigator: {
    (props: Props): JSX.Element;
    defaultProps: {
        scrollable: boolean;
        withGradient: boolean;
    };
};
export default SlidingTabNavigator;
