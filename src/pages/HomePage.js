import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Pizza from "../Components/Pizza";
import { getAllPizzas } from "../actions/pizzaAction";
import Loader from "../Components/Loader";
import Error from "../Components/Error";

import '../CSS/Pizza.css';

function HomePage() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { loading, pizzas, error } = pizzastate;
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  return (
    <>
      <Container className="mt-4" xs={12} sm={12} md={6}>
        <h1 className="text-center" style={{color: 'white'}}>Welcome to Pizza world</h1>
        {loading ? (
          <span className="d-flex align-items-center justify-content-center"><Loader/></span>
        ) : error ? (
          <Error>Error while fetching pizza datas{error}</Error>
        ) : (
          <Row classname="homepage">
            {pizzas.map((pizza) => (
              <Col md={4} key={pizza.name}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}

export default HomePage;
