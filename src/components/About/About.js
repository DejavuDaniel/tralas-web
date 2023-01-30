import Accordion from 'react-bootstrap/Accordion';

const About = () => {
    return (
        <>
            <div className="container px-3 py-5">
                <div className="row featurette">
                    <div className="col-md-7" >
                        <img alt='' className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={require('./img/A1.png')} />
                    </div>
                    <div className="col-md-5">
                        <br />
                        <h6>DAŽNIAUSIAI UŽDUODAMI KLAUSIMAI:</h6>
                        <br />
                        <br />
                        <Accordion>
                            <Accordion.Item eventKey="0" className='boxQ'>
                                <Accordion.Header>Ar dirbate visą parą savaitgaliais ir švenčių dienomis?</Accordion.Header>
                                <Accordion.Body>
                                    Tralas24-7 komanda techninę pagalbą kelyje teikia 24 valandas per parą,
                                    7 dienas į savaitę. Mūsų tralai visada pasirengę jums padėti,
                                    taip pat ir švenčių dienomis.
                                </Accordion.Body>
                            </Accordion.Item>
                            <br />
                            <br />
                            <Accordion.Item eventKey="1" className='boxQ'>
                                <Accordion.Header>Ar teikiate paslaugas visoje Lietuvoje?</Accordion.Header>
                                <Accordion.Body>
                                    Esame įsikūrę Vilniuje,
                                    tačiau teikiame paslaugas visoje
                                    Lietuvoje bei esant poreikiui galime
                                    atvykti ir į užsienio šalis.
                                </Accordion.Body>
                            </Accordion.Item>
                            <br />
                            <br />
                            <Accordion.Item eventKey="2" className='boxQ'>
                                <Accordion.Header>Kokia yra pagalbos kelyje paslaugų kaina?</Accordion.Header>
                                <Accordion.Body>
                                    Esame labai lankstus, tad kiekvieną situaciją vertiname individualiai.
                                    Norėdami sužinoti tikslią
                                    jums reikalingos paslaugos kainą - susisiekite su mumis
                                    nurodytais kontaktais.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;