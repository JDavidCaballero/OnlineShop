import { useFormik } from "formik";
import * as Yup from "yup";
import { userModel } from "../../api/user/CreateUser";

interface RegistrationFormProps {
  onSubmit: (values: userModel) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      const { name, email, password } = values;
      if (!name || !email || !password) {
        window.alert("Please fill all the inputs.");
        setSubmitting(false); // Stop the submission process
      } else {
        onSubmit(values);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {formik.touched.name && formik.errors.name ? (
        <div style={{ color: "red" }}>{formik.errors.name}</div>
      ) : null}
      <input
        type="text"
        name="name"
        placeholder="Name"
        className="rounded h-[50px] w-full mb-[20px] shadow-md pl-4"
        onChange={formik.handleChange}
        value={formik.values.name}
        pattern="[A-Za-z ]*"
        title="Please enter letters only."
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="" style={{ color: "red" }}>
          {formik.errors.email}
        </div>
      ) : null}
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="rounded h-[50px] w-full mb-[20px] shadow-md pl-4"
        onChange={formik.handleChange}
        value={formik.values.email}
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        title="Please enter a valid email address."
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="" style={{ color: "red" }}>
          {formik.errors.password}
        </div>
      ) : null}
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="rounded h-[50px] w-full  shadow-md pl-4"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <button
        type="submit"
        className="rounded text-yellow-400 w-full h-[70px] mt-[35px]"
      >
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
