import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { useNavigate } from 'react-router-dom';
function MySideNav(){
    const navigate = useNavigate();
    return <SideNav
        onSelect={selected =>{
            console.log(selected);
            navigate('/'+ selected)
        }}
        className=''
        >
            <SideNav.Toggle/>
            <SideNav.Nav defaultSelected='home'>
                <NavItem eventKey="home">
                    <NavIcon><i className='fa fa-fw fa-message' style={{fontSize: '1.5em'}}/></NavIcon>
                    <NavText>Referencias</NavText>
                </NavItem>
                <NavItem eventKey="alumnos">
                    <NavIcon><i className='fa fa-fw fa-home' style={{fontSize: '1.5em'}}/></NavIcon>
                    <NavText>alumnos</NavText>
                </NavItem>
                <NavItem eventKey="documentos">
                    <NavIcon><i className='fa fa-fw fa-home' style={{fontSize: '1.5em'}}/></NavIcon>
                    <NavText>Documentos</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
}
export default MySideNav;