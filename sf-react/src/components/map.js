import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmZjYW50dSIsImEiOiJja2tyaHltZjgwY25jMnFsajVxZ3hwNXc1In0.a-889nq5imuxYZ-ZFRH0cA";

const Header = (props) => <h5>{props.text}</h5>;

const Map = () => {
  const mapContainerRef = useRef(null);
  const [lng, setLng] = useState(-122.414);
  const [lat, setLat] = useState(37.78);
  const [zoom, setZoom] = useState(11);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/rfcantu/cko0fqd3w02lf17pfhcj2o7ou",
      center: [lng, lat],
      zoom: zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    return () => map.remove();
  });

  return (
    <div>
      <Jumbotron>
        <div className="sidebarStyle">
          <div>
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
          </div>
        </div>
        <div className="map-container" ref={mapContainerRef} />
      </Jumbotron>
      <Row>
        <Col>
          <Header text="Venue Information" />
          <div className="venue-info"></div>
        </Col>
      </Row>
    </div>
  );
};

const SanFranciscoMap = () => {
  return (
    <Container>
      <Map />
    </Container>
  );
};

export default SanFranciscoMap;
