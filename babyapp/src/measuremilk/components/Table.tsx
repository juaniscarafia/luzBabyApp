import React from "react"

interface TableProps {
  data: {
    Id: number;
    Time: string;
    Measure: number;
    NameMilk: string;
  }[];
  handleDelete: (id: number) => void;
}

export const Table: React.FC<TableProps> = ({ data, handleDelete }) => {
  const totalMeasure = data.reduce((acc, item) => acc + item.Measure, 0);
  
  return (
    <div className="container has-text-centered">
      <table className="table is-bordered is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Time</th>
            <th>Measure</th>
            <th>Name Milk</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <th className="thTotal">Total:</th>
            <th className="thMl">{totalMeasure} ml</th>
            <th className="thEmpty"></th>
            <th className="thEmpty"></th>
          </tr>
        </tfoot>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>⏰{item.Time}</td>
              <td>📏{item.Measure} ml</td>
              <td>🏷️{item.NameMilk}</td>
              <td>
                <button className="btn">✏️</button>
                <button className="btn" onClick={() => handleDelete(item.Id)}>🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
