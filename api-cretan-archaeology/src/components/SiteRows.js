import React from 'react';

const SiteRows = (props) => {
    return (
        props.displayedSiteList.map(site => {
            return(
                <div className="site-display-container">
                <div className="site-name">
                    {site.name}
                </div>
                <div className="site-periods">
                    {site.periods.map(period => <div>{period}{"\n"}</div>)}
                </div>
                <div className="site-periods">
                    {site.type.map(type => <div>{type}{"\n"}</div>)}
                </div>
                </div>
            )
        })
    )
}

export default SiteRows;