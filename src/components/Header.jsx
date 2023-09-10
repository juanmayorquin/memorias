export function Header() {
    return (
        <header className="bg-white absolute w-full">
            <div>
                <ul className="flex justify-evenly p-5">
                    <li className="py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white transition-all"><a href="">Inicio</a></li>
                    <li className="py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white transition-all"><a href="">Historia</a></li>
                    <li className="py-2 px-4 rounded-md hover:bg-gray-950 hover:text-white transition-all"><a href="">Sobre nosotros</a></li>
                </ul>
            </div>
        </header>
    );
}