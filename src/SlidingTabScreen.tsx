import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, { PropsWithChildren } from 'react';
import { Props } from './SlidingTabNavigator';
import { ReactElement } from 'react';

export type ScreenProps = {
  /**
   * Name of the screen. This MUST be unique.
   */
  name: string;
  /**
   * Icon to be rendered in the tabBar of the navigator.
   */
  renderIcon: ReactElement;
  /**
   * style the container view of the single icon
   */
  iconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * style the icon
   */
  iconStyle?: StyleProp<any>;
  /**
   * Alternative element to display when icon is highlighted.
   * If set, this overrides iconHighlightedStyle.
   */
  renderHighlighted?: ReactElement;
  /**
   * Style to apply to the icon when state is highlighted.
   * If renderHighlighted is set, this prop has no effect.
   */
  iconHighlightedStyle?: StyleProp<any>;
  /**
   * Label to put under the icon
   */
  label?: string;
  /**
   * style the label
   */
  labelStyle?: StyleProp<TextStyle>;
};

/**
 * Screen to use into the SlidingTabNavigator.
 */
class Screen extends React.Component<PropsWithChildren<ScreenProps>> {
  static defaultProps: Partial<Props> = {
    gradient: ['#FFF', '#aaa'],
  };

  constructor(props: ScreenProps) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.screen, { width: Dimensions.get('window').width }]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default Screen;
