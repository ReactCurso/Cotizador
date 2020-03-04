import React from "react";
import styled from "@emotion/styled";
import { normalizar } from "../helper";
const ContResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const Resumen = ({ datos }) => {
  const { marca, year, plan } = datos;

  if (marca === "" || year === "" || plan === "") return null;

  return (
    <ContResumen>
      <h2>Resumen</h2>
      <ul>
        <li>Marca: {normalizar(marca)}</li>
        <li>Año: {year}</li>
        <li>Plan: {normalizar(plan)}</li>
      </ul>
    </ContResumen>
  );
};

export default Resumen;
