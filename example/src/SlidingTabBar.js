import React from 'react';
import SlidingTabIcon from './SlidingTabIcon';
import { View } from 'react-native';
const TabBar = (props) => {
    return (<View style={props.style}>
      {props.screens ? (Array.isArray(props.screens) ? (props.screens.map((child) => (<SlidingTabIcon key={child.props.name} item={child.props.renderIcon} iconStyle={child.props.iconStyle} iconContainerStyle={child.props.iconContainerStyle} iconHighlightedStyle={child.props.iconHighlightedStyle} onPress={() => props.onPressIcon(child.props.name)} isHighlighted={props.isHighlightedConstraint(child.props.name)} renderHighlighted={child.props.renderHighlighted} label={child.props.label} labelStyle={child.props.labelStyle}/>))) : (<SlidingTabIcon item={props.screens.props
        .renderIcon} iconStyle={props.screens.props.iconStyle} iconContainerStyle={props.screens.props
        .iconContainerStyle} iconHighlightedStyle={props.screens.props
        .iconHighlightedStyle} onPress={() => props.onPressIcon(props.screens.props.name)} isHighlighted={props.isHighlightedConstraint(props.screens.props.name)} label={props.screens.props.label} labelStyle={props.screens.props
        .labelStyle} renderHighlighted={props.screens.props
        .renderHighlighted}/>)) : null}
    </View>);
};
export default TabBar;
//# sourceMappingURL=SlidingTabBar.js.map