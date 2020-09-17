import { ReactElement } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
declare type Props = {
    iconContainerStyle?: StyleProp<ViewStyle>;
    onPress: () => void;
    item: ReactElement;
    iconStyle?: StyleProp<any>;
    renderHighlighted?: ReactElement;
    isHighlighted?: boolean;
    iconHighlightedStyle?: StyleProp<any>;
    label?: string;
    labelStyle?: StyleProp<TextStyle>;
    key?: any;
};
declare const SlidingTabIcon: (props: Props) => JSX.Element;
export default SlidingTabIcon;
