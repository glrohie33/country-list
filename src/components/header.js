import React from 'react';

function Header({colorMode,colorSettings,changeMode}) {


    return (
        <header>
            <div className={'container flex space-between'}>
                <h3 className={'title'}>Where in the world?</h3>
                <a href={'/'} className={'color-mode flex align-center'} onClick={changeMode}>
                    {
                        colorSettings[colorMode].icon
                    }
                    {
                        colorSettings[colorMode].text
                    }
                </a>
            </div>
        </header>
    );
}

export default Header;