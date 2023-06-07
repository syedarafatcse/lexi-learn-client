import React from 'react';

const InstructorCard = ({ item }) => {

   const { instructorImage, instructorName } = item;
   console.log(item);
   return (
      <div className="card w-96 bg-base-100 shadow-xl">
         <figure className="px-10 pt-10">
            <img src={instructorImage} alt="Shoes" className="rounded-xl" />
         </figure>
         <div className="card-body items-center text-center">
            <h2 className="card-title">{instructorName}</h2>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            {/* <div className="card-actions">
                  <button className="btn btn-primary">Buy Now</button>
               </div> */}
         </div>
      </div>
   );
};

export default InstructorCard;