/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import { TableWeight } from "../components/TableWeight"
import { FloatingButton } from "../../ui/components/FloatingButton";
import { Modal } from "../components/Modal";
import { NoInformation } from "../../ui/components/NoInformation";

interface DataWeights {
  Id: number;
  Date: string;
  Weight: number;
}[];

export const BabyWeightPage: React.FC = () => {
  const [listWeights, setlistWeights] = useState<DataWeights[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/babyweight');
        if (!response.ok) {
          throw new Error('Error al cargar los registros');
        }
        const data = await response.json();
        const registros = data.body.Registros;
        setlistWeights(registros);
      } catch (error) {
        console.error(error);
        // Manejo de errores: mostrar mensaje al usuario, etc.
      }
    };

    fetchRegistros();
  }, [listWeights]);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/api/babyweight/${id}`, {
        method: 'DELETE',
      });
      const responseData = await response.json();
      
      if (!response.ok || responseData.error) {
        throw new Error(responseData.body.Message || 'Error al eliminar el registro');
      }
  
      const updatedWeights = listWeights.filter(weight => weight.Id !== id);
      setlistWeights(updatedWeights);
  
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

      console.log(formDataToSend)

      const response = await fetch('http://localhost:3001/api/babyweight', {
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

      const updatedList = [...listWeights];
      updatedList.push({ id: responseData.body.Id, ...formDataToSend });

      // Si la inserción es exitosa, actualiza la lista de medidas
      setlistWeights(updatedList);

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
        { listWeights.length > 0
          ? <TableWeight data={ listWeights } handleDelete={handleDelete} /> 
          : <NoInformation />
        }
        <FloatingButton onClick={handleFloatingButtonClick} />
        {showForm && <Modal onSubmit={handleFormSubmit} onCancel={handleFormCancel} />}
      </div>
    </>
  )
}
