import React from 'react';
import { FoodTypes } from '../../../components/Graphics/FoodsTypes';
import { UserOrder } from '../../../components/Graphics/User-Order';

import s from './stats.module.css'

const Stats = () => {
  return (
    <section className={s.containerStats}>
    <FoodTypes />
    <UserOrder />
   </section>
  );
};

export default Stats;