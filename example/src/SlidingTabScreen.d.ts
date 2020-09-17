import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
import { Props } from './SlidingTabNavigator';
import { ReactElement, ReactChildren } from 'react';
export declare type ScreenProps = {
    name: string;
    renderIcon: ReactElement;
    iconContainerStyle?: StyleProp<ViewStyle>;
    iconStyle?: StyleProp<any>;
    renderHighlighted?: ReactElement;
    iconHighlightedStyle?: StyleProp<any>;
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    children?: ReactChildren;
};
/**
 * Screen to use into the navigator.
 * Props are:
 *  name
 *  renderIcon = the element to be displayed or the icon in the bar
 *  renderHighlighted = the element to render when the button is highlighted
 *  styleHighlighted = the style to apply when the button is highlighted !
 * OVERRIDDEN BY renderHighlighted
 *
 */
declare class Screen extends React.Component<ScreenProps> {
    static defaultProps: Partial<Props>;
    constructor(props: ScreenProps);
    render(): JSX.Element;
}
export default Screen;
