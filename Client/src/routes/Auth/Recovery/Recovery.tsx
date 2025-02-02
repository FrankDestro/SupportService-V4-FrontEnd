import RecoveryIcon from "../../../assets/recovery.png";
import './Recovery.css';

function Recovery() {
  return (
    <div className="recovery-container">
      <div className="recovery-card">
        <div className="container-title-recovery">
          <div className="container-iconLock">
            <img src={RecoveryIcon} alt="lockIcon"></img>
          </div>
          <div>
            <p>Recuperação de senha</p>
          </div>
        </div>
        <div className="form-container">
          <form></form>
        </div>
      </div>
    </div>
  );
}

export default Recovery;
