import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

// const Price = ({ image, price, title, featureList, varient }) => {
//   return (
//     <div className={`st-pricing-table st-style1 ${varient ? varient : ""}`}>
//       <div className="st-pricing-img">
//         <img src={image} alt={title} />
//       </div>
//       <div className="st-pricing-head">
//         <h2 className="st-price">${price}</h2>
//         <img src="/shape/price-shape.svg" alt="shape" className="st-pricing-head-shape" />
//       </div>
//       <div className="st-pricing-feature">
//         <h2 className="st-pricing-feature-title">{title}</h2>
//         <ul className="st-pricing-feature-list st-mp0">
//           {featureList.map((element, index) => (
//             <li key={index}>
//               {element.status === 1 ? (
//                 <Icon style={{ color: "#37af47" }} icon="fa6-solid:check" />
//               ) : (
//                 <Icon style={{ color: "#e6492d" }} icon="fa-solid:times" />
//               )}
//               {element.title}
//             </li>
//           ))}
//         </ul>
//         <div className="st-pricing-btn">
//           <Link to="" className="st-btn st-style2 st-color1 st-size-medium">
//             Contact Now
//           </Link>
//         </div>
//         <div className="st-height-b30 st-height-lg-b30" />
//       </div>
//     </div>
//   );
// };
const Price = ({ image, title, price, featureList }) => {
  return (
    <div className="st-pricing-table st-style1">
      <div className="st-pricing-img">
        <img src={image} alt={title} />
      </div>

      {/* <div className="st-pricing-content">  */}
      {/* Added to wrap price, title, and features */}
      {/* <div className="st-pricing-price">{price}</div> */}
      {/* <h2 className="st-pricing-title">{title}</h2> */}
      {/* <ul className="st-pricing-features">
          {featureList.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul> */}
      {/* You can add a button or link here if needed */}
      {/* </div> */}
    </div>
  );
};
export default Price;
