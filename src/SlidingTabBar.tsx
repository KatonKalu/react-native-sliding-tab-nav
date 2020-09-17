import React from 'react';
import { ScreenProps } from './SlidingTabScreen';
import SlidingTabIcon from './SlidingTabIcon';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
  /**
   * action to perform when pressing on an icon
   * @param screenName is the name of the screen corresponding to the icon pressed
   */
  onPressIcon: (screenName: string) => void;
  /**
   * A funtion that verify if the icon is highlighted
   * @param screenName is the name of the screen corresponding to the icon in exam
   */
  isHighlightedConstraint: (screenName: string) => boolean;
  /**
   * Screens whom you want to display the icons
   */
  screens:
    | React.ReactElement<ScreenProps>[]
    | React.ReactElement<ScreenProps>
    | undefined;
  style: StyleProp<ViewStyle>;
};

const TabBar = (props: Props) => {
  return (
    <View style={props.style}>
      {props.screens ? (
        Array.isArray(props.screens) ? (
          props.screens.map((child: React.ReactElement<ScreenProps>) => (
            <SlidingTabIcon
              key={child.props.name}
              item={child.props.renderIcon}
              iconStyle={child.props.iconStyle}
              iconContainerStyle={child.props.iconContainerStyle}
              iconHighlightedStyle={child.props.iconHighlightedStyle}
              onPress={() => props.onPressIcon(child.props.name)}
              isHighlighted={props.isHighlightedConstraint(child.props.name)}
              renderHighlighted={child.props.renderHighlighted}
              label={child.props.label}
              labelStyle={child.props.labelStyle}
            />
          ))
        ) : (
          <SlidingTabIcon
            item={
              (props.screens as React.ReactElement<ScreenProps>).props
                .renderIcon
            }
            iconStyle={
              (props.screens as React.ReactElement<ScreenProps>).props.iconStyle
            }
            iconContainerStyle={
              (props.screens as React.ReactElement<ScreenProps>).props
                .iconContainerStyle
            }
            iconHighlightedStyle={
              (props.screens as React.ReactElement<ScreenProps>).props
                .iconHighlightedStyle
            }
            onPress={
              () =>
                props.onPressIcon(
                  (props.screens as React.ReactElement<ScreenProps>).props.name
                )
              // this.navigate(
              //   (this.props.children as
              // React.Component<ScreenProps>).props.name )
            }
            isHighlighted={
              props.isHighlightedConstraint(
                (props.screens as React.ReactElement<ScreenProps>).props.name
              )
              // this.state.highlightedIndex ===
              // this.getIndex(
              //   (this.props.children as
              // React.Component<ScreenProps>).props.name )
            }
            label={
              (props.screens as React.ReactElement<ScreenProps>).props.label
            }
            labelStyle={
              (props.screens as React.ReactElement<ScreenProps>).props
                .labelStyle
            }
            renderHighlighted={
              (props.screens as React.ReactElement<ScreenProps>).props
                .renderHighlighted
            }
          />
        )
      ) : null}
    </View>
  );
};

export default TabBar;
