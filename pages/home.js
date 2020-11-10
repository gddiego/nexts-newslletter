import Head from 'next/head';
import { Navbar, NavDropdown } from 'react-bootstrap';

// import { Navbar, Nav, NavDropdown } from 'react-bootstra';

const Home = () => (
    <div style={{
        marginBottom: '5%'
    }}>
        <Head>
            <title>App Next.js</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">SmashLog tecnologia</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                    <NavDropdown title="News" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/business">Negocios</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/technology">Tecnologia</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default Home;