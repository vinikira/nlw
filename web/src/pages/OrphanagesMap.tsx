import React from 'react';
import { FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';
import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map-marker.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img alt="Happy" src={mapMarkerImg} />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>São Paulo</strong>
          <span>Santo André</span>
        </footer>
      </aside>

      <Map
        center={[-23.6589939, -46.4873986]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}>

        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
