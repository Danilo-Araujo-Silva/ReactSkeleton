import React, { PropTypes } from 'react'

const Product = ({ price, quantity, username }) => (
  <div>
    {username} - &#36;{price}{quantity ? ` x ${quantity}` : null}
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product
