/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import { List } from "../components/List"
import { FloatingButton } from "../../ui/components/FloatingButton"
import { Modal } from "../components/Modal";
import { NoInformation } from "../../ui/components/NoInformation";

interface ListMeasures {
  Date: string;
  Measures: {
    Id: number;
    Time: string;
    Measure: number;
    NameMilk: string;
  }[];
}

export const MeasureMilks: React.FC = () => {

  const [listMeasures, setListMeasures] = useState<ListMeasures[] | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/measureMilks');
        if (!response.ok) {
           throw new Error('Error al cargar los registros');
        }
        const data = await response.json();
        if (Array.isArray(data.body.Registros)) {
          setListMeasures(data.body.Registros);
        } else {
          setListMeasures([]);
        }
      } catch (error) {
        console.error(error);
        // Manejo de errores: mostrar mensaje al usuario, etc.
      }
    };

    fetchRegistros();
  }, [listMeasures]);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/api/measureMilks/${id}`, {
        method: 'DELETE',
      });
      const responseData = await response.json();
      
      if (!response.ok || responseData.error) {
        throw new Error(responseData.body.Message || 'Error al eliminar el registro');
      }
  
      // const updateMeasureMilks = listMeasures.map(day => {
      //   return {
      //     ...day,
      //     Measures: day.Measures.filter(measure => measure.Id !== id)
      //   };
      // });

      const updateMeasureMilks = listMeasures?.map(day => {
        return {
          ...day,
          Measures: day.Measures.filter(measure => measure.Id !== id)
        };
      }) || [];

      setListMeasures(updateMeasureMilks);
  
      console.log(responseData.body.Message);
    } catch (error) {
      console.error(error);
      // Manejar errores
    }
  };

  const handleFloatingButtonClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = async (formData: any) => {
    try {
      // Formatear la fecha eliminando los guiones
      const formattedDate = formData.date.replace(/-/g, '');

      // Crear un nuevo objeto formData con la fecha formateada
      const formDataToSend = {
        ...formData,
        date: formattedDate
      };

      const response = await fetch('http://localhost:3001/api/measureMilks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDataToSend)
      });

      const responseData = await response.json();
      
      if (!response.ok || responseData.error) {
        throw new Error(responseData.body.Message || 'Error al insertar el registro');
      }

      // const updatedList = [...listMeasures];
      const updatedList = [...(listMeasures || [])];
      const existingDay = updatedList.find(day => day.Date === responseData.body.Date);

      if (existingDay) {
        existingDay.Measures.push({
          Id: responseData.body.Id,
          Time: responseData.body.Time,
          Measure: responseData.body.Measure,
          NameMilk: responseData.body.NameMilk,
        });
      } else {
        updatedList.push({
          Date: responseData.body.Date,
          Measures: [{
            Id: responseData.body.Id,
            Time: responseData.body.Time,
            Measure: responseData.body.Measure,
            NameMilk: responseData.body.NameMilk,
          }]
        });
      }

      // Si la inserción es exitosa, actualiza la lista de medidas
      setListMeasures(updatedList);

      // Oculta el formulario después de una inserción exitosa
      setShowForm(false);

    } catch (error) {
      console.error(error);
    }
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className="mt-10">
        { (listMeasures !== null && listMeasures.length > 0)
          ? <List data={ listMeasures } handleDelete={handleDelete}/> 
          : <NoInformation />
        }
        <FloatingButton onClick={handleFloatingButtonClick} />
        {showForm && <Modal onSubmit={handleFormSubmit} onCancel={handleFormCancel} />}
      </div>
    </>
  )
}
