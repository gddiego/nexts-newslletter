import React, { useState } from 'react';
import './_app';
function Home() {
  const [campos, setCampos] = useState({
    email: '',
  });
  function handleInputChange(event) {
    if (event.target.name === "anexo")
      campos[event.target.name] = event.target.files[0];
    else
      campos[event.target.name] = event.target.value;
    setCampos(campos);
  }
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(campos);
  }
  return (

    <div class="intro-header">
      <div class="container" align="center">

        <div class="tab-content custom-tab-content" align="center">
          <div class="subscribe-panel">
            <h1>Newsletter!!!</h1>
            <p>Olá pessoal receba conteúdos sobre tecnologia e desenvolvimento de software gratuito!!! </p>

            <form action='' onSubmit={handleFormSubmit} method="post">

              <div class="col-md-4"></div>
              <div class="col-md-4">
                <div class="input-group">
                  <span class="input-group-addon"><i class="glyphicon glyphicon-envelope" aria-hidden="true"></i></span>
                  <input type="text" class="form-control input-lg" name="email" id="email" onChange={handleInputChange} placeholder="Preencha seu email" />
                </div>
              </div>
              <div class="col-md-4"></div>
              <br /><br /><br />
              <button class="btn btn-primary btn-lg">Inscreva-se</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;