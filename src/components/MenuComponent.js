import React from 'react';
import './MenuComponent.css';

function MenuComponent() {
    const menuItems = [
        {
            id: 38,
            name: "Casino",
            url: "http://empireonet.com/casino/all/",
            submenu: [
                {
                    id: 83,
                    name: "All",
                    url: "http://empireonet.com/casino/all/"
                }
            ]
        },
        {
            id: 40,
            name: "Bingo",
            url: "http://empireonet.com/bingo/all-shopping/",
            submenu: [
                {
                    id: 84,
                    name: "All",
                    url: "http://empireonet.com/bingo/all-shopping/"
                }
            ]
        },
        {
            id: 39,
            name: "Sport Betting",
            url: "http://empireonet.com/sport-betting/all-game-fantasy/",
            submenu: [
                {
                    id: 85,
                    name: "All",
                    url: "http://empireonet.com/sport-betting/all-game-fantasy/"
                }
            ]
        }
    ];

    return (
        <div className="menu-prime-menu-container">
            <ul id="menu-prime-menu" className="prime-menu">
                {menuItems.map(item => (
                    <li key={item.id} className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children">
                        <a href={item.url}>{item.name}</a>
                        <ul className="sub-menu">
                            {item.submenu.map(subItem => (
                                <li key={subItem.id} className="menu-item menu-item-type-taxonomy menu-item-object-category">
                                    <a href={subItem.url}>{subItem.name}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MenuComponent;
