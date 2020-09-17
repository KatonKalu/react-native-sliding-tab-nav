import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
// HOC function: a function that takes in a component<P> where P is the
// propType of it and then return a component with out given functionalities
const withGradient = (WrappedComponent, gradientProps) => {
    if (!gradientProps.style) {
        gradientProps.style = {
            flex: 1,
            flexDirection: 'row',
        };
    }
    // The ACTUAL Element that will be displayed is WithMainGradient.
    // It will return our wrapper and inside of it the wrapped element, passing
    // him all his props.
    return (props) => (<LinearGradient colors={gradientProps.colors} start={gradientProps.start} end={gradientProps.end} style={gradientProps.style}>
			<WrappedComponent {...props}/>
		</LinearGradient>);
};
export default withGradient;
//# sourceMappingURL=withGradient.js.map