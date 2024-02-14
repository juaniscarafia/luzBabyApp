/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react"
import { TableHeight } from "../components/TableHeight"
import { FloatingButton } from "../../ui/components/FloatingButton";
import { Modal } from "../components/Modal";
import { NoInformation } from "../../ui/components/NoInformation";

interface DataHeight {
  Id: number;
  Date: string;
  Height: number;
}[];

export const BabyHeightPage: React.FC = () => {

  const [listHeights, setlistHeights] = useState<DataHeight[]>([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchRegistros = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/babyheight');
        if (!response.ok) {
          throw new Error('Error al cargar los registros');
        }
        const data = await response.json();
        const registros = data.body.Registros;
        setlistHeights(registros);
      } catch (error) {
        console.error(error);
        // Manejo de errores: mostrar mensaje al usuario, etc.
      }
    };

    fetchRegistros();
  }, [listHeights]);

  const handleDelete = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/api/babyheight/${id}`, {
        method: 'DELETE',
      });
      const responseData = await response.json();
      
      if (!response.ok || responseData.error) {
        throw new Error(responseData.body.Message || 'Error al eliminar el registro');
      }
  
      const updatedHeights = listHeights.filter(height => height.Id !== id);
      setlistHeights(updatedHeights);
  
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

      const response = await fetch('http://localhost:3001/api/babyheight', {
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

      const updatedList = [...listHeights];
      updatedList.push({ id: responseData.body.Id, ...formDataToSend });

      // Si la inserción es exitosa, actualiza la lista de medidas
      setlistHeights(updatedList);

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
        { listHeights.length > 0
          ? <TableHeight data={ listHeights } handleDelete={handleDelete} />
          : <NoInformation />
        }
        <FloatingButton onClick={handleFloatingButtonClick} />
        {showForm && <Modal onSubmit={handleFormSubmit} onCancel={handleFormCancel} />}
      </div>
    </>
  )
}
