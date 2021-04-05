import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
     
      about_me: [
        {
          id: "first-p-about",
          content:
          'Dev who loves to turn ideas into reality using code. I am studying the 5th / 6th period of Computer Science at the Federal University of Piauí.'},
        {
          id: "second-p-about",
          content:
          'I have experience in developing web applications with ReactJS for the Front-end and Node.JS for the Back-end. I developed some mobile apps with reac Native.',
        },
        {
          id: "third-p-about",
          content:
          'I am currently studying (slowly) on Blockchain and IoT to develop distributed, secure and intelligent systems.',
        }
      ],
      aboucodeEtols:[
        {
          id: "first-p-about",
          title:"Languages",
          content:
          'JavaScript, Python, ...'},
        {
          id: "second-p-about",
          title:"Frameworks",
          content:
          'React, TypeScript, Flask, Beautiful Soup, Selenium, ...',
        },
        {
          id: "third-p-about",
          title:"Data Storage",
          content:
          'MYSQL, Postegree. MongoDB, ...',
        },
        {
          id: "third-p-about",
          title:"Utilities",
          content:
          'Git, npm/yarn, ...',
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  
                  <div className="col-md-6">

                    <div className="about-me pt-4 pt-md-0">
                      <div className="imagem-perfil-container">
                            <img src={"https://i.imgur.com/CZdMQNH.png"} style={{borderRadius:"50%",margin:5,marginBottom:25,maxWidth:200,maxHeight:200,marginLeft:95,borderStyle:"solid",borderColor:"#007bff"}} />
                        </div>
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>

                  <div className="col-md-6">
                    
                    <div className="skills pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">Skills</h5>
                      </div>
                      {this.state.aboucodeEtols.map(content => {
                        return (
                          <>
                          <h4 > {content.title}</h4>
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
