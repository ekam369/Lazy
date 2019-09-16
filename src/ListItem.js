import React from 'react';

const ListItem = (props) => {
    return (
        <li className={props.klass}>{props.name}</li>
    );
}

export default ListItem;