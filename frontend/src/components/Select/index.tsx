import React from 'react';

import { SelectCustom } from './styles'

//Interfaces
import { SelectPropsInterface } from './interfaces';

const Select = (props: SelectPropsInterface) => {
    return(
        <SelectCustom 
            defaultValue={props.defaultValue} 
            value={props.value} 
            onChange={props.onChange} 
            style={props.style} 
            id={props.id} 
            name={props.name}
        >
                {props.children}
        </SelectCustom>
    )
}

export default Select;