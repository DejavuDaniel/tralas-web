

const Services = () => {

    return (
        <>
            <div className="container px-3 py-5">
                <h2 className="pb-2 border-bottom border-secondary">Mūsų teikiamos paslaugos</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    <div className="col d-flex align-items-start" style={{paddingTop:"20px"}}>
                    <img className="bi text-muted flex-shrink-0 me-3" src={require('./Icons/car-crash.png')} alt='' height="50" width="50"/>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Automobilių pervežimas</h3>
                            <p>Transportuojame sugedusius automobilius visoje Lietuvoje.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" style={{paddingTop:"20px"}}>
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Icons/battery.png')} alt='' height="50" width="50"/>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Automobilio užvedimas</h3>
                            <p>išsikrovusio automobilio akumuliatoriaus užvedimas</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" style={{paddingTop:"20px"}}>
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Icons/fuel.png')} alt='' height="50" width="50"/>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Kuro pristatymas</h3>
                            <p>Pristatome kurą.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" style={{paddingTop:"20px"}}>
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Icons/tire.png')} alt='' height="50" width="50"/>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Ratų keitimas</h3>
                            <p>Ratų keitimas kelyje.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" style={{paddingTop:"40px"}}>
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Icons/truck.png')} alt='' height="60" width="60"/>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Pervežame žemės ūkio bei smulkią techniką</h3>
                            <p>Transportuojame žemės ūkio techniką.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" style={{paddingTop:"40px"}}>
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Icons/map.png')} alt='' height="50" width="50"/>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Pagalba užsienyje</h3>
                            <p>Paragraph of text beneath the heading to explain the heading.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" style={{paddingTop:"40px"}}>
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Icons/part.png')} alt='' height="50" width="50"/>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Pažeista važiuoklė</h3>
                            <p>Transportuojame automobilius su pažeista važiuokle, užsiblokavus vairui arba rankiniam stabdžiui.</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start" style={{paddingTop:"40px"}}>
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Icons/house.png')} alt='' height="50" width="50"/>
                        <div>
                            <h3 className="fw-bold mb-0 fs-4">Konstrukcijų pervežimas</h3>
                            <p>Transportuojame modulinius namukus bei konstrukcijas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;