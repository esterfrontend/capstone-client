import { useLocation } from 'react-router-dom'
import NavigationLink from "../NavigationLink/NavigationLink"

const MainNavigation = ( classname, {...props}) => {
    const location = useLocation()

    const NAVIGATION = [
        {
            text: 'Yo actúo',
            link: '/nuevo-caso'
        },
        {
            text: 'Colegios',
            link: '/colegios'
        },
        {
            text: 'Psicólogos',
            link: '/psicologos'
        }
    ]

    return (
        NAVIGATION.map(({ link, text }) => {
            const isActiveLink = location.pathname === link
            
            return (
                <NavigationLink
                    className={classname}
                    {...props}
                    to={link}
                    key={text}
                    color={isActiveLink ? "brand.primary" : "brand.black"}
                    display={'block'}
                    padding={'20px 0'}
                >
                    {text}
                </NavigationLink>
            )
        })
    )
}

export default MainNavigation