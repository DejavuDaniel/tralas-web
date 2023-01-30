
const Story = () => {
    return (
        < >
            <div style={{ paddingTop:"100px" }} id='home'>
                <div className="container px-3 py-5">
                    <div className="row featurette">
                        <div className="col-md-6">
                            <h2 className="featurette-heading fw-normal lh-1">Techninė pagalba kelyje<span className="text-muted"> 24/7</span></h2>
                            <br/>
                            <p className="lead">Techninė pagalba kelyje visą parą tai kvalifikuota, greitai reaguojanti ir profesionali komanda, kuri pasirūpins Jūsų ir Jūsų transporto priemonės saugumu, nepriklausomai nuo ištikusios situacijos.</p>
                        </div>
                        <div className="col-md-6">
                            <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={require('./Img/car.png')} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Story;