import { toast } from "react-toastify";
import ApiConnector from "./ApiConnector";

const handleAddNoteToBackend = async (formData) => {

    try {
        console.log(formData)
      const response = await ApiConnector.post("/api/v1/validate-dob", formData);

      
    } catch (err) {
      console.log(err.response?.data?.error || "Something went wrong");
      toast.error(err.response?.data?.error || "Something went wrong");
      return false;
    }
    return true;
  };

  export default handleAddNoteToBackend;
