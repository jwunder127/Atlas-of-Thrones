import './map.scss';
import L from 'leaflet';
import { Component } from '../component';

const template = '<div ref="mapContainer" class="map-container"></div>';

/**
 * Leaflet Map Component
 * Render GoT map items, and provide user interactivity.
 * @extends Component
 */
export class Map extends Component {
  /** Map Component Constructor
   * @param { String } placeholderId Element ID to inflate the map into
   * @param { Object } props.events.click Map item click listener
   */
  constructor (mapPlaceholderId, props) {
    super(mapPlaceholderId, props, template);

    // Initialize Leaflet map
    this.map = L.map(this.refs.mapContainer, {
      center: [ 5, 20 ],
      zoom: 4,
      maxZoom: 8,
      minZoom: 4,
      maxBounds: [ [ 50, -30 ], [ -45, 100 ] ]
    })

    this.map.zoomControl.setPosition('bottomright'); // Position zoom control
    this.layers = {}; // Map layer dict (key/value = title/layer)
    this.selectedRegion = null; // Store currently selected region

    // Render Carto GoT tile baselayer
    L.tileLayer(
      'https://cartocdn-ashbu.global.ssl.fastly.net/ramirocartodb/api/v1/map/named/tpl_756aec63_3adb_48b6_9d14_331c6cbc47cf/all/{z}/{x}/{y}.png',
      { crs: L.CRS.EPSG4326 }).addTo(this.map);
  }
}
