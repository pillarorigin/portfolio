import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
          
  <div>
  <Navigation />
  <div className="main">
      <div className="cloumn-start">
          <Intro />
          <Project {...projects[0]}/> 
          <Project {...projects[1]}/> 
      </div>
  </div>
  </div>
  </div>
  );
}


class NavLink extends React.Component {
  render(){
      return(
          <a href={`#${this.props.itemName}`} className="nav_item">  
              {this.props.itemName}
          </a> 
      )
  }
}

const Navigation =() => (
  <nav className="Navigation">
      <img src="https://placehold.it/100*100" alt="avator" className="avator" /> 
      <NavLink itemName="INTRO" />
      <NavLink itemName="styel" />
      <NavLink itemName="SH_management" />
  </nav>
);

// intro 부분 (className 은 후에 css에서 사용하게 위해 미리 만들자)
const Intro = () => (
  <div id="INTRO" className="section">    
      <h1>Bobby YU's portfolios</h1>
      <div>
          <a href = "mailto:youig6495@naver.com">youig6495@naver.com</a>
          <p>학습하는 능력을 학습하는 개발자 지망생 유인국입니다</p>
      </div>
      <div>
          <h2>이력 및 경력</h2>
          <p> someting.. 수정 중  </p>
          <h2>자기소개</h2>
          <p> someting.. 수정 중  </p>
          <h2>기술 스택</h2>
          <p> Front-end: React </p>
          <p> Back-end:Node.js </p>
      </div>
  </div>

);

const Project = ({name, period, summary, epilogue, resultURL}) => (
  <div id={name} className="section">
      <h2> {name} </h2>
      <p>{period}</p>

     <div>
      <h3> 프로젝트 개요 </h3>
      <p> {summary} </p>

      <h3>후기</h3>
      <p> {epilogue} </p>

      <h3> 결과 </h3>
          <div> 
              {resultURL.map(url => (
                  <img src={url} alt="project result" />
              ))}
          </div>
      </div> 
  </div>
)


//project 정보는 배열로 관리
const projects = [
{
name: "styel",
period: "2019.08~2019.09",
summary: "스타일리쉬한 플랫폼 서비스",
epilogue: "forntend",
resultURL: [
    "https://github.com/styel-io",
    "https://placehold.it/200x200"
    ]
},
{
name: "SH_management",
period: "2019.10.15~2019.11.05",
summary: "후원이력관리 시스템",
epilogue: "backend, contract",
resultURL: [
    "https://github.com/lemontech119/SH_management",
    "https://github.com/lemontech119/SH_management"
    ]
}
];

export default App;
