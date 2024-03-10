import { Dimensions } from 'react-native';

export let field_width = Dimensions.get('window').width;
export let field_height = Dimensions.get('window').height;

// Export image paths
export const IMAGE_PATHS = {
    background_calc: require('./assets/background_calc.jpg'),
    cleaning1: require('./assets/cleaning1.jpg'),
    cleaning2: require('./assets/cleaning2.jpg'),
    cleaning3: require('./assets/cleaning3.jpg'),
    cleaning4: require('./assets/cleaning4.jpg'),
    cleaning5: require('./assets/cleaning5.jpg'),
    cleaning6: require('./assets/cleaning6.jpg'),
    landscape1: require('./assets/landscape1.jpg'),
    landscape2: require('./assets/landscape2.jpg'),
    landscape3: require('./assets/landscape3.jpg'),
    landscape4: require('./assets/landscape4.jpg'),
    landscape5: require('./assets/landscape5.jpg'),
    landscape6: require('./assets/landscape6.jpg'),
    plumbing1: require('./assets/plumbing1.jpg'),
    plumbing2: require('./assets/plumbing2.jpg'),
    plumbing3: require('./assets/plumbing3.jpg'),
    plumbing4: require('./assets/plumbing4.jpg'),
    plumbing5: require('./assets/plumbing5.jpg'),
    plumbing6: require('./assets/plumbing6.jpg'),
    wood1: require('./assets/wood1.jpg'),
    wood2: require('./assets/wood2.jpg'),
    wood3: require('./assets/wood3.jpg'),
    wood4: require('./assets/wood4.jpg'),
    wood5: require('./assets/wood5.jpg'),
    wood6: require('./assets/wood6.jpg')
};

export const LANDING_IMG_PATHS = {
    wood1: require('./assets/wood1.jpg'),
    plumbing1: require('./assets/plumbing1.jpg'),
    landscape1: require('./assets/landscape1.jpg'),
    cleaning1: require('./assets/cleaning1.jpg')
}

export default {field_height, field_width, IMAGE_PATHS, LANDING_IMG_PATHS};