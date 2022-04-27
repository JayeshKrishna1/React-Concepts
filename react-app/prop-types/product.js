import React from 'react';
import PropTypes from 'prop-types';

const Product = ({id,name,price,image})=>{
const images = image && image.url;
const defaultUrl = 'https://media.discordapp.net/attachments/938396146546655262/947686184199524392/PicsArt_10-02-07.46.26.jpg?width=291&height=406';
    return (
        <div key={id}>
            <img src={images || defaultUrl} alt={name}></img> {/*it will show error coz in last object of url we dont have image and whole app messes out. we can check the prop and display accordingly using prop types */}
            {/* the above image we cant add || like others coz url has the address and react will check on image */}
            <h2>{name || "defaultName"}</h2>
        <h5>{price || 1}</h5>
        </div>
    )
}

Product.propTypes={ // we can make them as required field
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.number.isRequired,
}

// Product.defaultProps={
//     name:'default name',
//     id:0,
//     price:1,
//     image:'https://media.discordapp.net/attachments/938396146546655262/947686184199524392/PicsArt_10-02-07.46.26.jpg?width=291&height=406'
//     //the above image wont work coz we have image as an object and url is the property which holds the address
//     //we cant set default props for image and alternative is by using short circuit operators
// }

export default Product;