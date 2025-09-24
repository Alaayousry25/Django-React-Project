import Form from "../components/Form";

function Register({ onRegisterSuccess }) {
  return (
    <Form
      route="/api/user/register/"
      method="register"
      onRegisterSuccess={onRegisterSuccess}
    />
  );
}

export default Register;
