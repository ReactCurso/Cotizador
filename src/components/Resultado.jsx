import React from "react";
import styled from "@emotion/styled";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;

const ResultadoCotizacion = styled.div`
  background-color: rgb(127, 224, 237);
  border: 1px solid #26c6da;
  margin-top: 1rem;
  padding: 0.5rem;
  text-align: center;
  position: relative;
`;

const Cotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-trasnform: uppercase;
  font-weight: bold;
  margin: 0;
`;

const Resultado = ({ cotizacion }) =>
  cotizacion === 0 ? (
    <Mensaje>Completar formulario</Mensaje>
  ) : (
    <ResultadoCotizacion>
      <TransitionGroup component="span" className="resultado">
        <CSSTransition
          className="resultado"
          key={cotizacion}
          timeout={{ enter: 500, exit: 500 }}
        >
          <Cotizacion>El total es: $ <span> {cotizacion} </span> </Cotizacion>
        </CSSTransition>
      </TransitionGroup>
    </ResultadoCotizacion>
  );

export default Resultado;
