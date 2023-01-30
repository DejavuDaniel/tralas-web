
const Photos = () => {

    return (
        <>
            <div className="container px-3 ">
                <h2 className="pb-2  border-bottom border-secondary">Mūsų atlikti darbai</h2>
            </div>
            <div className="album py-5">
                <div className="container">

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A1.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A2.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A3.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A4.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A5.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A6.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A7.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A8.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" src={require('./Photo/A9.jpg')} height="225" width="100%" alt={''}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Photos;