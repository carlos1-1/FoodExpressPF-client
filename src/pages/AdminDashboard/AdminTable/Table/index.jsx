import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPen, faTrash, faBan } from "@fortawesome/free-solid-svg-icons"

import s from '../adminTable.module.css'

const Table = ({cols, dataToRender, handleDelete, handleEdit, handleBlock }) => {

  const pen = <FontAwesomeIcon icon={faPen} />
  const trash = <FontAwesomeIcon icon={faTrash} />
  const ban = <FontAwesomeIcon icon={faBan} />

  return (
    <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            {cols?.map(col=>
              <th scope="col" key={col}>{col}</th>
              )
            }
          </tr>
        </thead>
        <tbody>
          {dataToRender?.map(row=>
             <tr key={row.id}>
               <th scope="row">{dataToRender.indexOf(row)+1}</th>
               {cols?.map(col=>{
                 if(col==='image') return <td key={`${row.img}${col}`}><img className={s.dataImage} src={row.image} alt={row.name}/></td>
                 else if(col==='dietTypes') return <td>{row[col]?.map(type=>type.name+' ')}</td>
                 else return <td key={`${row.id}${col}`}>{row[col].toString()}</td>
               })
               }
                <td >
                  <div className='d-flex align-items-center gap-1'>
                    <button
                      className='btn btn-danger'
                      onClick={()=>handleDelete(row.id)}
                    >
                      {trash}
                    </button>
                    
                    <button
                      className='btn btn-info '
                      onClick={()=>handleEdit(row)}
                    >
                      {pen}
                    </button>
                  </div>
                </td>
                {cols.includes('banned') && 
                 <td>
                   <button
                      className='btn btn-dark '
                      onClick={()=>handleBlock(row.id,row.banned)}
                    >
                      {ban}
                    </button>
                 </td>
                }
             </tr>
         
          )}
            
      
        </tbody>
      </table>
  );
};

export default Table;