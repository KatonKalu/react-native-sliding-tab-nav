import {
  Dimensions,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
  ReactChildren,
} from 'react-native';
import React from 'react';
import { Props } from './SlidingTabNavigator';

export type ScreenProps = {
  name: string;
  renderIcon: Element;
  iconContainerStyle?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<any>;
  renderHighlighted?: Element;
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
class Screen extends React.Component<ScreenProps> {
  static defaultProps: Partial<Props> = {
    gradient: ['#FFF', '#aaa'],
  };

  props: ScreenProps;

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
