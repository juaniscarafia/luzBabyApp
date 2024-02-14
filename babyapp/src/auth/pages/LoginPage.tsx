import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const onLogin = () => {
    navigate("/", {
      replace: true
    })
  }

  return (
    <>
      <div className="vh-100 background-login ml-0 mr-0">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="form-container">
              <h2 className="text-center mb-4">Ingresar</h2>
              <form>
                <div className="form-group mt-3">
                  <label>Nombre:</label>
                  <input type="text" className="form-control" id="nombre" placeholder="Ingrese su nombre" />
                </div>
                <div className="form-group mt-3">
                  <label>Email:</label>
                  <input type="email" className="form-control" id="email" placeholder="Ingrese su email" />
                </div>
                <button
                  className="btn btn-login mt-3"
                  onClick={onLogin}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>    
    </>
  )
}