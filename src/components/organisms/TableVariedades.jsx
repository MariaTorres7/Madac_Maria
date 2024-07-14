// src/components/organisms/TableVariedades.jsx
import React from 'react';
import { Button, Switch } from '@nextui-org/react';
import { useModal } from '../../context/ModalContext';
import PaginatedTable from './PaginatedTable';
import VariedadForm from '../molecules/VariedadForm';
import VariedadFormUpdate from '../molecules/VariedadFormUpdate';
import { useToggleVariedad } from '../../hooks/useToggleVariedad';
import { useTable } from '../../context/TableContext';

const TableVariedades = ({ data }) => {
  const { openModal } = useModal();
  const { refreshVariedades } = useTable();
  const { activateVariedad, deactivateVariedad } = useToggleVariedad();

  const handleOpenModal = () => {
    openModal(<VariedadForm />);
  };

  const handleOpenUpdateModal = (row) => {
    openModal(<VariedadFormUpdate row={row} />);
  };

  const handleToggle = async (id, currentStatus) => {
    if (currentStatus === 'activo') {
      await deactivateVariedad(id);
    } else {
      await activateVariedad(id);
    }
    await refreshVariedades();
  };

  const columns = ["CODIGO", "NOMBRE", "ESTADO", "ACCIONES"];

  return (
    <>
      <div className='my-2'>
        <Button onPress={handleOpenModal}>Registrar Variedad</Button>
      </div>
      <PaginatedTable
        columns={columns}
        data={data.map(row => ({
          ...row,
          acciones: (
            <div className="flex gap-2">
              <Switch
              size='sm'
              defaultSelected={row.estado === 'activo'}
                onChange={() => handleToggle(row.codigo, row.estado)}
              />
              <Button size="sm" onPress={() => handleOpenUpdateModal(row)}>
                Editar
              </Button>
            </div>
          )
        }))}
        searchProperty="nombre"
      />
    </>
  );
};

export default TableVariedades;
