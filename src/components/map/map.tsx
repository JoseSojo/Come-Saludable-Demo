import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { FC } from 'react';
import createRestaurantIcon from '../icon/restaurant';
import UserLocationMarker from './customLocation';
import { Link } from 'wouter';
import { Restaurant } from '../../types/types';



const venezuelaCenter = [8.0815, -66.1621] as [number, number];

interface Props {
    restaurants: Restaurant[]
}

const Map: FC<Props> = ({ restaurants }) => {

    return (
        <MapContainer
            center={venezuelaCenter}
            zoom={7} // Zoom para ver todo el país
            style={{ height: "600px", width: "100%" }}
        >
            {/* Capa base de OpenStreetMap */}
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />

            {/* Marcadores de restaurantes */}
            {restaurants.map((restaurant, index) => (
                <Marker
                    key={index}
                    position={restaurant.position}
                    icon={createRestaurantIcon()}
                >
                    <Popup>
                        <strong>{restaurant.name}</strong>
                        <br />
                        <Link href={`/restaurant/${restaurant.id}`}>ver</Link>
                    </Popup>
                </Marker>
            ))}
            <UserLocationMarker />
        </MapContainer>
    )
};

export default Map;