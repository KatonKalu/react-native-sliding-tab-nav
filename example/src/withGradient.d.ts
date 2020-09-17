import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
declare const withGradient: <P extends Object>(WrappedComponent: React.ComponentType<P>, gradientProps: {
    colors: string[];
    start?: {
        x: number;
        y: number;
    };
    end?: {
        x: number;
        y: number;
    };
    style?: StyleProp<ViewStyle>;
}) => (props: P) => JSX.Element;
export default withGradient;
