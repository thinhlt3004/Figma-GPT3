import React from 'react'
import './brand.css';
const Brand = () => {
    const brands = ['google','atlassian', 'dropbox', 'shopify', 'slack'];
    const PF = process.env.REACT_APP_PUBLIC_URL;
    return (
        <div className='gt3__brand-container'>
            {brands.map((i, index) => (
                <img src={`${PF}/asset/brands/${i}.png`} alt={`${i}.png`} key={index} />
            ))}
        </div>
    )
}

export default Brand
