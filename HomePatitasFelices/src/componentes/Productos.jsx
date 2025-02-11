import React, { useState, useEffect } from "react";
import { db } from "../servicios/firebase"; // Asegúrate de importar correctamente la configuración de Firebase
import { collection, addDoc, getDocs } from "firebase/firestore";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [imagen, setImagen] = useState("");

  // Función para obtener productos desde Firebase
  const fetchProductos = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "proyecto"));
      const productosData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductos(productosData.slice(0, 3)); // Solo mostrar 3 productos
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
  };

  // Función para agregar un nuevo producto
  const addProducto = async () => {
    if (nombre.trim() === "" || cantidad.trim() === "" || imagen.trim() === "") {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      await addDoc(collection(db, "proyecto"), {
        nombre,
        cantidad: parseInt(cantidad),
        imagen,
      });
      alert("Producto agregado correctamente.");
      setNombre("");
      setCantidad("");
      setImagen("");
      fetchProductos(); // Actualizar la lista de productos
    } catch (error) {
      console.error("Error al agregar producto:", error);
    }
  };

  // Cargar los productos cuando el componente se monte
  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div>
      <h2>Productos para Mascotas</h2>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <img
              src={`/imagenes/${producto.imagen}`}
              alt={producto.nombre}
              style={{ width: "100px", height: "100px" }}
            />
            <p>🛍️ {producto.nombre}</p>
            <p>📦 Cantidad: {producto.cantidad}</p>
          </li>
        ))}
      </ul>

      {/* Formulario para agregar producto */}
      <h3>Agregar Nuevo Producto</h3>
      <input
        type="text"
        placeholder="Nombre del producto"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <input
        type="text"
        placeholder="./imagenes/correa.jpg"
        value={imagen}
        onChange={(e) => setImagen(e.target.value)}
      />
      <button onClick={addProducto}>Agregar</button>
    </div>
  );
};

export default Productos;