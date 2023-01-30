
const Contacts = () => {

    return (
        <>
            <div className="container px-3 py-5">
                <h2 className="pb-2 border-bottom border-secondary">Kontaktai</h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Social/facebook.png')} alt='' height="40" width="40" />
                        <div>
                            <a href="http://m.me/">
                                <h3 className="fw-bold mb-0 fs-4">facebook</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Social/gmail.png')} alt='' height="40" width="40" />
                        <div>
                            <a href="mailto:a.vinckus@gmail.com">
                                <h3 className="fw-bold mb-0 fs-4">El paštas</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Social/viber.png')} alt='' height="40" width="40" />
                        <div>
                            <a href="viber://contact?number=%2B37061477770">
                                <h3 className="fw-bold mb-0 fs-4">Viber</h3>
                            </a>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <img className="bi text-muted flex-shrink-0 me-3" src={require('./Social/whatsapp.png')} alt='' height="40" width="40" />
                        <div>
                            <a href="https://api.whatsapp.com/send?phone=37061477770">
                                <h3 className="fw-bold mb-0 fs-4">Whats app</h3>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contacts;