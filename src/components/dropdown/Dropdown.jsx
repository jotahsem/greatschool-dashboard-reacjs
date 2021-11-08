import React from 'react'

const Dropdown = props => {
    return (
        <div className="dropdown">
            <button className="dropdown__toggle">
                {
                    props.icon ? <i className={props.icon}></i> : ''
                }
                {
                    props.badge ? <span className="dropdown__toggle-badge">{props.badge}</span>:
                    ''
                }
                {
                    props.CustomToggle ? props.CustomToggle() : ''
                }
            </button>
            <div className="dropdown__content">
                {
                    props.contentData && props.renderItems ? props.contentData.map((item, index) => props.renderItems(item, index)) : ''
                }
                {
                    <props className="renderFooter">
                    </props>
                }
            </div>
        </div>
    )
}

export default Dropdown
