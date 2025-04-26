// src/app/layout.tsx

import '../styles/global.css';


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
       <html><body> <div>
            <header>
                <h1>welcome to celice's poltfolio</h1>
                <nav>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    
                </nav>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; {new Date().getFullYear()} My Portfolio</p>
            </footer>
        </div></body></html>
    );
}
