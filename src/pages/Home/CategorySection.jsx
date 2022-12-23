import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card/Card';
import s from './categorySection.module.css'


const CategorySection = ({name, addHandler}) => {
  const allPlate = useSelector((state) => state.plates);
  const filterPlates = allPlate.filter(plate=>plate.category === name)
 
  const nameId =name.replace(/ /g, "")

  if(!filterPlates.length) return <></>;

  return (
    <section id={`${nameId}`}>
      <h3 className={s.sectionTitle}>{name}s</h3>
      <div>
        {filterPlates?.map((c) => {
          return (
            <Card
              key={c.id}
              id={c.id}
              name={c.name}
              rating={c.rating}
              price={c.price}
              image={c.image}
              onStock={c.onStock}
              addHandler={(id, name, price, image)=>addHandler(id, name, price, image)}
              lisOfTypes={c.dietTypes}
            />
          )
        })}
     </div> 
    </section>
  );
};

export default CategorySection;