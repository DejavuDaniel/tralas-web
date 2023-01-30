
const Reviews = () => {
  return (
    <>
      <div style={{ paddingTop: "100px" }}>
        <div className="container px-3 py-5">
          <div className="row text-center">
            <div className="col-md-3 mb-4 mb-md-0" style={{ padding: "20px" }}>
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img src={require("./Pics/r.png")}
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt=""/>
                  </div>
                  <h5 className="font-weight-bold">Robertas Stankevičius</h5>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    Musu imone jau daug metu naudojasi sio musu partnerio paslaugomis. Visada viskas laiku, paprasta ir kokybiska.
                  </p>
                  <br />
                  <img src={require("./Pics/google.png")} width="20px" alt=""/><span className="text-muted" style={{ fontSize: "12px" }}> 3 weeks ago</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0" style={{ padding: "20px" }}>
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img src={require("./Pics/s5.png")}
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt=""/>
                  </div>
                  <h5 className="font-weight-bold">Sveta Trukaniene</h5>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    Rekomenduoju, nepriekaištingai ir atsakingai atlieka savo darbą. Kreipėmės kelis kartus ir visada viskas sklandžiai, kainos taip pat labai adekvačios.
                  </p>
                  <br />
                  <img src={require("./Pics/google.png")} width="20px" alt=""/><span className="text-muted" style={{ fontSize: "12px" }}> 1 week ago</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-0" style={{ padding: "20px" }}>
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img src={require("./Pics/s.png")}
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt=""/>
                  </div>
                  <h5 className="font-weight-bold">Saulius Ciesiunas</h5>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    Maloni patirtis - greitai, saugiai, patogiai. Protinga kaina. Kultūringas aptarnavimas. Ačiū.
                  </p>
                  <br />
                  <img src={require("./Pics/google.png")} width="20px" alt="" /><span className="text-muted" style={{ fontSize: "12px" }}> 5 days ago</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-0" style={{ padding: "20px" }}>
              <div className="card">
                <div className="card-body py-4 mt-2">
                  <div className="d-flex justify-content-center mb-4">
                    <img src={require("./Pics/a.png")}
                      className="rounded-circle shadow-1-strong" width="100" height="100" alt=""/>
                  </div>
                  <h5 className="font-weight-bold">arturas voroneckis</h5>
                  <ul className="list-unstyled d-flex justify-content-center">
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                    <li>
                      <i className="fas fa-star fa-sm text-warning"></i>
                    </li>
                  </ul>
                  <p className="mb-2">
                    Pastoviai bendraujame, ir pasitikime. Viskas laiku, tvarkinga, ir be rupesčiu.
                  </p>
                  <br />
                  <img src={require("./Pics/google.png")} width="20px" alt=""/><span className="text-muted" style={{ fontSize: "12px" }}> 3 weeks ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;