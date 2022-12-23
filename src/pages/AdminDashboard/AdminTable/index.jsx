import React, { useEffect, useState } from 'react';
import Loading from '../../../components/Loading/Loading'

import Paginated from '../../../components/Paginated/Paginated'
import NotFound from '../../../components/404-NotFound/NotFound'

import s from './adminTable.module.css'
import Table from './Table';
import Alert from './Alert';
import BlockAlert from './Alert/BlockAlert';
import Modal from '../../../components/Forms/Modal';

const AdminTable = ({ form,formEdit,name, data, cols, funDelete, funBlock, loading, response, getItems }) => {

  const [activeNew, setActiveNew] = useState(false)
  const [activeEdit, setActiveEdit] = useState(false)
  const [editForm, setEditForm] = useState({...formEdit})
  const [currentPage, setCurrentPage] = useState(1)
  const [notFound, setNotFound] = useState(false)
  const [activeModal,setActiveModal] = useState(false)
  const [deleteItem, setDeleteItem] = useState({
    id:'',
    active:false
  })
  const handleNewProduct = ()=> {setActiveNew(!activeNew)}
  

  const handleDelete = (idItem) => {
    setDeleteItem({
      id:idItem, 
      activeDelete:true})
  }

  const handleBlock = (idItem,banned) => {
    setDeleteItem({
      id:idItem, 
      activeBlock:true,
      banned:banned})
  }

  const handleEdit = (item) => {
  console.log('edit',item)
  setActiveEdit(!activeEdit)
  setEditForm({...editForm, props:{item,getItems}})
  
  }

  const itemsPerPage = 5
    let dataToRender = data.slice(((currentPage*itemsPerPage)-itemsPerPage),(currentPage*itemsPerPage))
    console.log(dataToRender)

    const paginated = (number) =>{
      setCurrentPage(number)
    }

    useEffect(() => {
      if (dataToRender.length>0)setNotFound(false)
      const timeout = setTimeout(() => {
        if (dataToRender.length===0) setNotFound(true);
      }, 5000);
    
      return () => clearTimeout(timeout);
    }, [dataToRender]);
 
  return (
    <div className={s.container}>
    { activeModal
        && 
        <Modal 
          setActiveModal={setActiveModal} 
          loading={loading} 
          response={response} 
        /> 
      }

    {deleteItem.activeDelete && <Alert setActiveModal={setActiveModal} setDeleteItem={setDeleteItem} funDelete={()=>funDelete(deleteItem.id)} />}
    {deleteItem.activeBlock && <BlockAlert setActiveModal={setActiveModal} setDeleteItem={setDeleteItem} funBlock={()=>funBlock(deleteItem.id,deleteItem.banned)} />}
  
    {
      activeNew && 
      <div className={s.modalForm} >
        <div className={s.buttonContainer}>
          <button
            className="btn-close" aria-label="Close"
            onClick={()=>{setActiveNew(false); setActiveEdit(false)}}
          >
          </button>
        </div>
        {form}
      </div>
    }

   {
      activeEdit && 
      <div className={s.modalForm} >
        <div className={s.buttonContainer}>
          <button
            className="btn-close" aria-label="Close"
            onClick={()=>{setActiveNew(false); setActiveEdit(false)}}
          >
          </button>
        </div>
        {editForm}
      </div>
    }

    {
      notFound
      ? <NotFound />
      :
      <>
        <div 
          className={s.tableContainer}  
        >
          <div className ={s.tableHead}>
            <h2>{name}s</h2>
            {!(name =='Order') &&<button 
              className='btn btn-primary' 
              type='button'
              onClick={handleNewProduct}
            >
              New {name} 
            </button>
            }
          </div>

          {data.length === 0? <Loading />
          :<Table 
            cols={cols}
            dataToRender={dataToRender}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            handleBlock={handleBlock}
            />
          }
        
        </div>

        <Paginated 
          itemsPerPage={5} 
          dataLength={data.length} 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          paginated={paginated} 
        />
      </>
    }
    </div>
  );
};

export default AdminTable;