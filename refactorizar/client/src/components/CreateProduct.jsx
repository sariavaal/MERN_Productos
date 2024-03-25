import axios from "axios";
import Formulario from "./FormComponent";
import Swal from "sweetalert2";

const CreateComponent = () => {
    const initialValues = {
        title: "",
        price: 0,
        description: "",
    };
    const onsubmit = async (values, { resetForm }) => {
        try {
          const response = await axios.post(
            "http://localhost:8000/api/products",
            values
          );
    
          if (response.status === 200) {
            //alert("Product created successfully");
            Swal.fire({
              title: "Exito",
              text: "Usuario creado correctamente",
              icon: "success"
            })
            resetForm();
          } else {
            console.log("Failed to create product");
          }
        } catch (error) {
          console.log(error);
        }
      };
      return (
        <div>
          <h3 className="text-center mt-5">Create Product</h3>
          <Formulario onsubmit={onsubmit} initialValues={initialValues} />
        </div>
      );
    };
export default CreateComponent