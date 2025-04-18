import { FC } from 'react';
import { useParams } from 'wouter';
import { menus } from '../../data/restaurants';
import MenuFichaComponent from './menuFichaComponent';

const MenuFichaLink: FC = () => {
    const { id } = useParams() as { id: string };

    const menu = menus.find(menu => menu.id === id);

    if (!menu) return;

    return (
        <>
            <MenuFichaComponent menu={menu} />
        </>
    );
}

export default MenuFichaLink;
