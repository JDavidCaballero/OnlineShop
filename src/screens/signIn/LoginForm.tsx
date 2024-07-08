import { useFormik } from "formik";
import * as Yup from "yup";
import { loginUserModel } from "../../api/user/LoginUser";

interface LoginFormProps {
  onSubmit: (values: loginUserModel) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      const { email, password } = values;
      if (!email || !password) {
        window.alert("Please fill all the inputs.");
        setSubmitting(false); // Stop the submission process
      } else {
        onSubmit(values);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: "red" }}>{formik.errors.email}</div>
        ) : null}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="rounded h-[50px] w-full mb-[40px] shadow-md pl-4"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          title="Please enter a valid email address."
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: "red" }}>{formik.errors.password}</div>
        ) : null}
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="rounded h-[50px] w-full  shadow-md pl-4"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <p className="underline text-right mt-[40px]">Forgot password?</p>
        <button
          type="submit"
          className="rounded text-yellow-400 w-full h-[70px] mt-[30px]"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
