import React from 'react';
import { ScreenProps } from './SlidingTabScreen';
import { StyleProp, ViewStyle } from 'react-native';
declare type Props = {
    onPressIcon: (screenName: string) => void;
    isHighlightedConstraint: (screenName: string) => boolean;
    screens: React.ReactElement<ScreenProps>[] | React.ReactElement<ScreenProps> | undefined;
    style: StyleProp<ViewStyle>;
};
declare const TabBar: (props: Props) => JSX.Element;
export default TabBar;
