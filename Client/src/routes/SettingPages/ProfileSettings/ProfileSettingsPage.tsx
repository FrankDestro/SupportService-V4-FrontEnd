import { faCheck, faSave } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Button from "../../../Components/Button/Button";
import { UserDTO, UserDTOUpdate } from "../../../models/RequesterDTO";
import * as userService from "../../../Service/user-service";
import './ProfileSettingsPage.css';

function ProfileSettings() {

  const [userDetails, setUserDetails] = useState<UserDTO>();
  const [image, setImage] = useState<string | null>(null);
  const [ButtonPasswordChange, setButtonPasswordChange] = useState<boolean>(false);
  const [passwordUpdated, setPasswordUpdated] = useState("");
  const [passwordError, setPasswordError] = useState<string>("");
  
  useEffect(() => {
    userService.UserProfileDetails().
      then((response) => {
        setUserDetails(response.data)
        if (response.data?.imgProfile && image === null) {
          setImage(response.data.imgProfile);
        }
      })
  }, [])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  function handleButtonPasswordChange() {
    setButtonPasswordChange(true);
  }

  const validatePassword = (password: string): boolean => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':\"\\|,.<>\\/?]).{8,}$/;
    return regex.test(password);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordValue = e.target.value;
    setPasswordUpdated(passwordValue);

    if (validatePassword(passwordValue)) {
      setPasswordError(""); // Senha válida, limpar o erro
    } else {
      setPasswordError("A senha deve ter pelo menos 8 caracteres, incluindo uma letra maiúscula e um caractere especial.");
    }
  };

  const handleIpuntPasswordConfirm = () => {
    const userupdates : UserDTOUpdate = {
      ...userDetails   
    };
    userService.updateUserDetails(userupdates)
  };

  return (
    <div>
      <h2 className='container-title-settings'>Configurações de Perfil</h2>

      <div className="container-user-form-create">
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <div className="profile-photo-container">
              <div className="profile-image-circle">
                {image ? (
                  <img src={image} alt="Profile" className="profile-image" />
                ) : (
                  <span className="profile-image-placeholder">Add Image</span>
                )}
              </div>
              <label htmlFor="imgProfile" className="custom-upload-button">
                Alterar Foto
              </label>
              <input
                type="file"
                id="imgProfile"
                onChange={handleImageChange}
                className="profile-image-input"
              />
            </div>
            <div className="form-fields">
              <div className="form-row">
                <div className="form-item">
                  <label htmlFor="firstName">Nome</label>
                  <input
                    type="text"
                    className="floating-input"
                    value={userDetails?.firstName}
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="lastName">Sobrenome</label>
                  <input
                    type="text"
                    className="floating-input"
                    value={userDetails?.lastName}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-item">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="floating-input"
                    value={userDetails?.email}
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="contactNumber">Número de contato</label>
                  <input
                    type="text"
                    className="floating-input"
                    value={userDetails?.contactNumber}
                  />
                </div>
              </div>

              <div className="form-item">
                <label htmlFor="department">Departamento</label>
                <input
                  type="text"
                  className="floating-input"
                  value={userDetails?.department.description}
                />
              </div>

              <div className="form-item">
                <label htmlFor="solvingArea">Área Solucionadora</label>
                <input
                  type="text"
                  className="floating-input"
                  value={userDetails?.solvingArea.name}
                />

              </div>
              <div className="form-item">
                <label>Permissões</label>
                <select multiple >
                  {userDetails?.roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.authority}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Button
                  text="Salvar Alterações"
                  icon={faSave}
                  background="#11344d"
                  hoverColor="#11344dc7"
                  borderRadius="5px"
                  type="submit"
                  width="200px"
                />
                <div onClick={handleButtonPasswordChange}>
                  <Button
                    text="Alterar Senha"
                    icon={faSave}
                    background="#a73e24"
                    hoverColor="#a73e24dc"
                    borderRadius="5px"
                    type="button"
                    width="200px"
                  />
                </div>

                {ButtonPasswordChange ? (
                  <div className="container-password-changed">
                    <input
                      name="password"
                      type="text"
                      className="floating-input"
                      placeholder="Digite sua nova senha"
                      value={passwordUpdated}
                      onChange={handlePasswordChange}
                    />

                    <div onClick={handleIpuntPasswordConfirm}>
                      <Button
                        text="Confirmar Alteração"
                        icon={faCheck}
                        background="#3a7e24"
                        hoverColor="#70a94a"
                        borderRadius="5px"
                        type="button"
                        width="200px"
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                  </div>
                )}
              </div>
              <div style={{marginTop: "20px"}}>{passwordError && <span className="error-message">{passwordError}</span>}</div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileSettings
