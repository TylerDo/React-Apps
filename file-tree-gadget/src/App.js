import React, { useState } from 'react';

function App() {
    return <div>
        <Folder name="Desktop">
            <Folder name="Music">
                <File name="all_star.mp4"/>
                <File name="express_file.mp4"/>
            </Folder>
            <File name="dogs.jpeg"/>
            <File name="cats.png"/>
        </Folder>
        <Folder name="Applications">
            <Folder name="C++">
                <File name="hello_world.cpp"/>
            </Folder>
            <Folder name="JavaScript">
                <File name="scripts.js"/>
            </Folder>
            <Folder name="Python">
                <File name="py_scripts.py"/>
            </Folder>
        </Folder>
    </div>
}

const Folder = (props) => {
    const [ isOpen, setIsOpen ] = useState(false);
    const { name, children } = props;
    const direction = isOpen ? 'down' : 'right';
    const fold = isOpen ? 'open' : null;

    const handleClick = () => setIsOpen(!isOpen);

    return <div>
        <span onClick={handleClick}>
            <i className={`green folder ${fold} outline icon`}></i>
            <i className={`caret ${direction} icon`}></i>
        </span>
        {name}
        <div style={{ marginLeft: '17px' }}>
            {isOpen ? children : null}
         </div>
    </div>
};

const File = (props) => {
    const { name } = props;
    const fileExtension = name.split('.')[1];
    const fileIcons = {
        mp4: 'music icon',
        jpeg: 'image outline icon',
        png: 'image icon',
        cpp: 'plus icon',
        js: 'coffee icon',
        py: 'python icon',
    };

    return <div>
        <i className={`${fileIcons[fileExtension]} icon`}></i>
        {name}
    </div>
};

export default App;
