import React from "react";
import "./itemDetalles.css";
import { useNavigate, useParams } from "react-router-dom";
import ItemList from "../data/products.js";

const ItemDetalles = ({ listaApps }) => {
    const { id: rutaId } = useParams();
  
    const {
        id,
        categoryId,
        description,
        image,
        name,
        price,
        stock,
    } = listaApps.filter((item) => item.id == rutaId)[0];
  
    const navigate = useNavigate();
    return (
      <>
        <div className="vh-total row ms-3 me-2">
          <div className="col-md-4 col-sm-12 backOscuro mt-4">
  
          <div className="h-100 d-flex flex-column justify-content-around align-items-center">
  
            <img src={image} alt="" height={150}  className="rounded"/>
            <div className="text-center">
            <h2>{name}</h2>
            </div>
            <label className="btn btn-light d-block">Agregar al carrito</label>
            <h5 className="categoriaDetalle">{categoryId}</h5>
          </div>
           </div>
          <div className="col-md-8 col-sm-12 mt-4">
            <div className="backOscuro vh-mitad ps-4">
          
            <div className="d-flex align-items-center justify-content-between">
              <h2> Descripción</h2>
            <i class="fa-solid fa-arrow-left Atras" onClick={() => navigate(-1)}></i>
            </div>
              <hr />
              <p>{description}</p>
            </div>
            <div className="backOscuro vh-mitad mt-2 relacionadas">
              
              <ItemList listaApps={listaApps.filter(item => item.categoria == categoryId)} titulo="Relacionadas"></ItemList>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default ItemDetalles;