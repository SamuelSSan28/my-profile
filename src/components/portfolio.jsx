import React from "react";

//import stock
import stock from "../img/image1.jpg";


class Portfolio extends React.Component {
  constructor() {
    super();
    this.state = {
      post:[
        {
          id:"1A",
          tecnologias:"React Native, NodeJS, MongoDB, SQLite",
          title: 'Guula-App',
          summary:'Guula is an application developed with the purpose of suggesting wonderful recipes according to the ingredients that the user has.',
          image: 'https://i.imgur.com/1878WmO.png',
          href:"https://play.google.com/store/apps/details?id=com.fourDevs.guula&hl=pt_BR"
        },
        {
          id:"2A",
          tecnologias:"ReactJS, MYSQL, Flask(Python), Beatiful Soup(Python)",
          title: 'Custo Piauí Processos',
          summary: 'Process Monitoring System for the whole of Piauí society to follow complaints from Custo Piauí in an agile and centralized way.',
          image: 'https://i.imgur.com/kRV4C1R.png',
          href:"http://sistemas.custopiaui.org/processos"
        },
      
      ]
    }
  }

  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Portfolio</h3>
                <p className="subtitle-a">
                  Projects I've developed so far
                </p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          {
            this.state.post.map(post => (
               
                <div className="col-md-4">
                  <div className="work-box">
                    <a   href=""  target="_blank" >
                      <div className="work-img">
                        <img src={post.image} alt="" className="img-fluid" style={{width:350,height:200}} />
                      </div>
                      <div className="work-content">
                        <div className="row">
                          <div className="col-xs-10" style={{textAlign:"justify",padding:15}} >
                            <h2 className="w-title">{post.title}</h2>
                            <div className="w-more" style={{marginBottom:5}}>
                              <span >
                              {post.summary}
                              </span>
                            </div>
                            <div className="w-more">
                              <span className="w-ctegory">
                              {post.tecnologias}
                              </span>
                            </div>
                          </div>
                         
                        </div>
                      </div>
                    </a>                 
                  </div>
                </div>           
              
            ))
          }
          </div>
         

        </div>
      </section>
    );
  }
}

export default Portfolio;
