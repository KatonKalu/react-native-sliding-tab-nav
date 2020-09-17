import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import React, { PropsWithChildren, ReactElement } from 'react';
declare type Props = {
    scrollViewRef?: React.MutableRefObject<ScrollView>;
    scrollable?: boolean;
    onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
    renderTab: () => ReactElement;
};
declare const _default: (props: PropsWithChildren<Props>) => JSX.Element;
export default _default;
