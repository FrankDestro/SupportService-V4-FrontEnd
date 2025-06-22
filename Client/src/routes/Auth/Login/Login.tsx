/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as loginService from "../../../Service/login-service";
import LockIcon from "../../../assets/lock.png";
import InputCustom from "../../../Components/FormComponents/InputCustom/InputCustom";
import { ContextToken } from "../../../utils/context-token";
import * as forms from "../../../utils/forms";
import "./Login.css";
import Button from "../../../Components/Button/Button";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();
  const { setContextTokenPayload } = useContext(ContextToken);
  const [submitResponseFail, setSubmitResponseFail] = useState(false);

  const [formData, setFormData] = useState<any>({
    username: {
      value: "",
      id: "username",
      name: "username",
      type: "text",
      placeholder: "Email",
      validation: function (value: string) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          value.toLowerCase()
        );
      },
      message: "Favor informar um email válido",
    },
    password: {
      value: "",
      id: "password",
      name: "password",
      type: "password",
      placeholder: "Senha",
    },
  });

  const passwordType = mostrarSenha ? "text" : "password";
  function handleSubmit(event: any) {
    event.preventDefault();

    setSubmitResponseFail(false);
    const formDataValidated = forms.dirtyAndValidateAll(formData);
    if (forms.hasAnyInvalid(formDataValidated)) {
      setFormData(formDataValidated);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      loginService
        .LoginRequest(forms.toValues(formData))
        .then((response) => {
          loginService.saveAccessToken(response.data.access_token);
          setContextTokenPayload(loginService.getAccessTokenPayload());
          navigate("/home");
        })
        .catch(() => {
          setSubmitResponseFail(true);
        })
        .finally(() => setIsLoading(false));
    }, 2000);
  }

  function handleInputChange(event: any) {
    const result = forms.updateAndValidate(
      formData,
      event.target.name,
      event.target.value
    );
    setFormData(result);
  }

  function handleTurnDirty(name: string) {
    const newFormData = forms.dirtyAndValidate(formData, name);
    setFormData(newFormData);
  }

  function toggleSenha() {
    setMostrarSenha((prevState) => !prevState);
  }

  return (
    <div className="login-container">
      <div className="login-card container-base">
        <div className="container-title-login">
          <div className="container-iconLock">
            <img src={LockIcon} alt="lockIcon"></img>
          </div>
          <div>
            <p>acesso restrito</p>
          </div>
        </div>

        <div className="support-login-form-container">
          <form className="support-card support-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="support-form-controls-container">
              <div>
                <InputCustom
                  {...formData.username}
                  className="support-form-control"
                  onChange={handleInputChange}
                  onTurnDirty={handleTurnDirty}
                />
                <div className="support-form-error">
                  {formData.username.message}
                </div>
              </div>

              <div className="password-container">
                <InputCustom
                  {...formData.password}
                  className="support-form-control"
                  onChange={handleInputChange}
                  onTurnDirty={handleTurnDirty}
                  type={passwordType}
                />

                <div className="eye-icon" onClick={toggleSenha}>
                  <FontAwesomeIcon
                    icon={mostrarSenha ? faEyeSlash : faEye}
                    size="lg"
                  />
                </div>
              </div>
            </div>
            {submitResponseFail && (
              <div className="support-form-global-error">
                usuário ou senha inválidos
              </div>
            )}

            {isLoading ? (
              <Button
                text="Carregar"
                isLoading={true}
                size="medium"
                background="#11344d"
                hoverColor="#335577"
                borderRadius="5px"
                height="50px"
                width="400px"
              />
            ) : (
              <div className="container-button-login">
                <Button
                  text="Login"
                  size="medium"
                  background="#11344d"
                  hoverColor="#335577"
                  borderRadius="5px"
                  height="50px"
                  width="400px"
                  type="submit"
                />
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
