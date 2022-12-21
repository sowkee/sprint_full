import React, { useState } from 'react';

function TabList({ children }) {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    return (
       
        
        <div className='container'>
            
            <div>
                {children.map(child => {
                    const { label } = child.props;
                    return (
                        <button
                            type="button"
                            onClick={() => setActiveTab(label)}
                            style={{
                                backgroundColor: label === activeTab ? '#ccc' : '',
                            }}
                        >
                            {label}
                        </button>
                        
                        
                    );
                    
                })}

            </div>
            <div>
                {children.map(child => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );
}



export default TabList;
