# react-native-sliding-tab-nav
An npm package that provides a simple animated bottom tab navigator for React Native. 
## Usage
### Importing needed components
Import the navigator from the main module:

```javascript
import SlidingTabNavigator, { Screen } from 'react-native-sliding-tab-nav';
```

### Rendering Navigator 
You can use the navigator by defining one like the following. SlidingTabNavigator accepts only Screen from this package as childs. To add a screen you can wrap any element into the 'Screen' component.

```javascript
<SlidingTabNavigator tabStyle={{ backgroundColor: '#99f' }} scrollable>
	<Screen name='home' renderIcon={<Text>Ico</Text>}>
		<View style={[styles.screen, { backgroundColor: '#F76' }]} />
	</Screen>
	<Screen name='test' renderIcon={<Text>Ico</Text>}>
		<View style={[styles.screen, { backgroundColor: '#595' }]} />
	</Screen>
</SlidingTabNavigator> 
``` 
### Navigator Props
|  Prop name | Prop type  | required  | description  |
| ------------ | ------------ | ------------ | ------------ |
|  initialRouteName | string  |  no | Name of the initial route. If left empty, the first route is the first child.  |
|  scrollable | boolean  |  no |  Toggle wheter the navigator should respond to swipe by changing screen. Default = false  |
|  tabStyle | StyleProp<ViewStyle>  | no  |  Style to apply to the bottom tab. |
|  withGradient |  boolean | no  |Toggle whether to use or not a gradient background. Default = false   |
|  gradient | string[]  |  no | Array of colors to specify the gradients colors. Useless if withGradient is false |

### Screen Props
|  Prop name | Prop type  | required  | description  |
| ------------ | ------------ | ------------ | ------------ |
|  name | string  |  yes | Route Name. Needs to be unique in containing navigator  |
|  renderIcon | ReactElement  |  yes | Icon to be rendered in the tabBar of the navigator.  |
|  iconContainerStyle | StyleProp<ViewStyle>  |  no |style the container view of the single icon  |
|  iconStyle | StyleProp<any>  |  no |style the icon  |
|  renderHighlighted | ReactElement |  no | Alternative element to display when icon is highlighted. If set, this overrides iconHighlightedStyle. |
|  iconHighlightedStyle | StyleProp<any>  |  no |Style to apply to the icon when state is highlighted. If renderHighlighted is set, this prop has no effect.  |
| label | string | no | label to put under the icon |
| labelStyle | StyleProp<TextStyle> | no | style the label |

## Installation
To install the package run the following inside your project directory:
```javascript
npm install --save react-native-sliding-tab-nav
```

## Examples
You can find an app with usage examples in the 'example' directory in the project
