import React, {forwardRef} from 'react';
import BaseOptionsSelector from './BaseOptionsSelector';
import {propTypes, defaultProps} from './optionsSelectorPropTypes';
import withLocalize from '../withLocalize';

const OptionsSelector = forwardRef((props, ref) => (
    <BaseOptionsSelector
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
        ref={ref}
    />
));

OptionsSelector.displayName = 'OptionsSelector';

export default OptionsSelector;
