import React from "react";
import { Card } from "./Card"

interface DataHome {
  id: string;
  title: string;
  image: string;
  link: string;
}

const data: DataHome[] = [
  {
    id: 'babymilk',
    title: 'Measure Milks',
    image: `/assets/images/babymilk.png`,
    link: 'measuremilks'
  },
  {
    id: 'babyweight',
    title: 'Baby Weight',
    image: `/assets/images/babyweight.png`,
    link: 'babyweight'
  },
  {
    id: 'babyheight',
    title: 'Baby Height',
    image: `/assets/images/babyheight.png`,
    link: 'babyheight'
  }
]

export const ListGrid: React.FC = () => {
  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3 mt-10">
      {
        data.map(d =>(
          <Card
            key={d.id}
            {...d}
          />
        ))
      }
    </div>
  )
}
