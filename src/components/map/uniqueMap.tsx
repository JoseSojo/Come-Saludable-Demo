import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import createRestaurantIcon from '../icon/restaurant';
import UserLocationMarker from './customLocation';
import { Restaurant } from '../../types/types';

interface Props {
    restaurant: Restaurant
}

const UniqueMap: FC<Props> = ({ restaurant }) => {

    return (
        <MapContainer
            center={restaurant.position}
            zoom={10} // Zoom para ver todo el país
            style={{ height: "600px", width: "100%" }}
        >
            {/* Capa base de OpenStreetMap */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {/* Marcadores de restaurantes */}

            <Marker
                key={restaurant.id}
                position={restaurant.position}
                icon={createRestaurantIcon()}
            >
                <Popup>
                    <strong>{restaurant.name}</strong>
                </Popup>
            </Marker>

            <UserLocationMarker />
        </MapContainer>
    )
};

export default UniqueMap;