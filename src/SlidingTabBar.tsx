import React, {ReactElement} from 'react';
import {ScreenProps} from './SlidingTabScreen';
import SlidingTabIcon from './SlidingTabIcon';
import {StyleProp, View, ViewStyle} from 'react-native';

type Props = {
	onPressIcon: (screenName: string) => void;
	isHighlightedConstraint: (screenName: string) => boolean;
	screens: ReactElement<ScreenProps>[] | ReactElement<ScreenProps> | undefined;
	style: StyleProp<ViewStyle>;
};

const TabBar = (props: Props) => {
	return (
		<View style={props.style}>
			{props.screens ? (
				Array.isArray(props.screens) ? (
					props.screens.map((child: ReactElement<ScreenProps>) => (
						<SlidingTabIcon
							key={child.props.name}
							item={child.props.renderIcon}
							iconStyle={child.props.iconStyle}
							iconContainerStyle={child.props.iconContainerStyle}
							iconHighlightedStyle={child.props.iconHighlightedStyle}
							onPress={() => props.onPressIcon(child.props.name)}
							isHighlighted={
								props.isHighlightedConstraint(child.props.name)
							}
							renderHighlighted={child.props.renderHighlighted}
							label={child.props.label}
							labelStyle={child.props.labelStyle}
						/>
					))
				) : (
					<SlidingTabIcon
						item={(props.screens as ReactElement<ScreenProps>).props.renderIcon}
						iconStyle={
							(props.screens as ReactElement<ScreenProps>).props.iconStyle
						}
						iconContainerStyle={
							(props.screens as ReactElement<ScreenProps>).props
								.iconContainerStyle
						}
						iconHighlightedStyle={
							(props.screens as ReactElement<ScreenProps>).props
								.iconHighlightedStyle
						}
						onPress={
							() =>
								props.onPressIcon(
									(props.screens as ReactElement<ScreenProps>).props.name
								)
							// this.navigate(
							//   (this.props.children as
							// React.Component<ScreenProps>).props.name )
						}
						isHighlighted={
							props.isHighlightedConstraint(
								(props.screens as ReactElement<ScreenProps>).props.name
							)
							// this.state.highlightedIndex ===
							// this.getIndex(
							//   (this.props.children as
							// React.Component<ScreenProps>).props.name )
						}
						label={(props.screens as ReactElement<ScreenProps>).props.label}
						labelStyle={
							(props.screens as ReactElement<ScreenProps>).props.labelStyle
						}
						renderHighlighted={
							(props.screens as ReactElement<ScreenProps>).props
								.renderHighlighted
						}
					/>
				)
			) : null}
		</View>
	);
};

export default TabBar;
