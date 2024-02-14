import React from "react"

interface TableProps {
  data: {
    Id: number;
    Date: string;
    Height: number;
  }[];
  handleDelete: (id: number) => void;
}

export const TableHeight: React.FC<TableProps> = ({ data, handleDelete }) => {
  return (
    <div className="container text-center">
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-md-6">
          <table className="table is-bordered is-striped is-fullwidth">
            <thead>
              <tr>
                <th>⏰ Date</th>
                <th>📐 Height</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody className="table-group-divider text-center">
              {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.Date ? item.Date.split('T')[0] : ''}</td>
                  <td>{item.Height} cm</td>
                  <td>
                    <button className="btn">✏️</button>
                    <button className="btn" onClick={() => handleDelete(item.Id)}>🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
