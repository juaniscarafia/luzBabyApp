import React from 'react';
import { Table } from './Table';

interface ListProps {
   data: {
      Date: string;
      Measures: {
         Id: number;
         Time: string;
         Measure: number;
         NameMilk: string;
      }[];
   }[];
   handleDelete: (id: number) => void;
}

export const List: React.FC<ListProps> = ({ data, handleDelete }) => {

   const totalMeasure = data.reduce((acc, item) => {
      return acc + item.Measures.reduce((sum, measure) => sum + measure.Measure, 0);
   }, 0);

   return (
      <>
         {data.map((item, index) => (
            <div key={index} className="row justify-content-center mt-3">
               <div className="col-12 col-md-8">
                  <div className="card text-center">
                     <div className="card-header">
                     🗓️{item.Date.split('T')[0]}
                     </div>
                     <div className="card-body">
                        <Table key={index} data={item.Measures} handleDelete={handleDelete} />
                     </div>
                     <div className="card-footer">
                        Total: {totalMeasure} ml
                     </div>
                  </div>
               </div>
            </div>
         ))}
      </>
   )
}
