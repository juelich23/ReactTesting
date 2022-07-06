import React from "react";

const Product = (props) => {
    return  (
        //<div>
        //    The product of the values are {3*4}
        //</div>
        React.createElement('div',
            {id: 'test'},
            React.createElement('b', null, 
                'The product of the values are now ' + props.value)
        )
    )
}

export default Product;