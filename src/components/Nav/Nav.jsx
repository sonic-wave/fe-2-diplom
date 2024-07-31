import './Nav.css';

export const Nav = () => {
    return (
        <nav className='nav'>
            <ul className='nav-ul'>
                <li className='nav-li nav-about'>О нас</li>
                <li className='nav-li nav-description'>Как это работает</li>
                <li className='nav-li nav-reviews'>Отзывы</li>
                <li className='nav-li nav-contacts'>Контакты</li>
            </ul>
        </nav>
    )
}
