import React from 'react';

const CheckBox = props => {
    return (
        <div>
            <label for={props.name}>
                {props.title}
            </label>
            <div>
                {props.options.map(option => {
                    return (
                        <label key={option}>
                            <input 
                                id={props.name}
                                name={props.name}
                                onChange={props.handleChange}
                                value={option}
                                checked={props.selectedOptions.indexOf(option) > -1}
                                type="checkbox"
                            />
                            {option}
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default CheckBox;