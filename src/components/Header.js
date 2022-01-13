import logo from '../logo.png'

const Header = () => {
    return (
        <div className="w-full h-16 flex justify-center items-center">
            <a
                href="https://symplicit.com.au/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={logo} alt={'logo'} className="w-40"/>
            </a>
        </div>
    )
}

export default Header
