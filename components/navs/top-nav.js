import { useRouter } from 'next/router';

export default function TopNav(props) {
    const router = useRouter()
    function toggle() {
        props.setToggleSideNav(!props.toggleSideNav)
    }

    function gotoHome() {
        router.push('/')
    }

    return <nav className="navbar navbar-default fixed-top pt-0">
        <div className="container-fluid app-nav-bar rounded pt-2 pb-2">
            <div className="navbar-header">
                <span className="d-lg-none d-md-none nav-menu text-white mr-2" onClick={toggle}>☰</span>
                <a className="navbar-brand text-white cursor-pointer" onClick={x => gotoHome()}>
                    PAKMOBILEZONE
                </a>
                {/* <ReactSearchAutocomplete
                    placeholder="What are you looking for?"
                    items={devices}
                    //onSearch={handleOnSearch}
                    //onSelect={handleOnSelect}
                    styling={{
                        height: '35px',
                        zIndex: 10000
                    }}
                    //onFocus={handleOnFocus}
                    autoFocus
                /> */}
            </div>
        </div>
    </nav>
}