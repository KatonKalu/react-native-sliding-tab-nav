import { Dimensions, StyleSheet, View, } from 'react-native';
import React from 'react';
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
class Screen extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<View style={[styles.screen, { width: Dimensions.get('window').width }]}>
        {this.props.children}
      </View>);
    }
}
Screen.defaultProps = {
    gradient: ['#FFF', '#aaa'],
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
});
export default Screen;
//# sourceMappingURL=SlidingTabScreen.js.map