import axios from "axios";
import Formulario from "./FormComponent";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UpdateProduct = () => {
    const { id } = useParams();
    const [initialValues, setInitialValues] = useState({
        title: "",
        price: 0,
        description: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const getdDetail = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8000/api/products/${id}`
                );
                if (response.status === 200) {
                    setInitialValues(response.data);
                }
            } catch (error) {
                console.log('error al obtener el producto',error);
            }
        }
        getdDetail();
    }, [id]);
    const onsubmit = async (values, { resetForm }) => {
        try {
            const response = await axios.put(
                `http://localhost:8000/api/products/${id}`,
                values
            );
            if (response.status === 200) {
                Swal.fire({     
                    title: "Exito",
                    text: "Usuario actualizado correctamente",
                    icon: "success"
                })
                resetForm();
                navigate("/");
            } 
        } catch (error) {
            console.log(error);
        }
    };
    
    return (
        <div>
            <h3 className="text-center mt-5">Update Product</h3>
            <Formulario
                onsubmit={onsubmit}
                initialValues={initialValues}
                
            />
            
        </div>
    );
};
export default UpdateProduct

