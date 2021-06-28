import './App.css';
import Base from './views/Base/base';
import Resume from './views/Resume/resume';
import Experience from './views/Experience/experience';
import School from './views/School/school';
import React from 'react';
import axios from "axios"
import { BackTop } from 'antd';
import 'antd/dist/antd.css';


class App extends React.Component {
  state = {
    data1:"",
    isLoading: true
  }
  componentDidMount(){
    // 获取数据
    axios.get("http://localhost:3000/base")
      .then(res=>{
        this.setState({
          data1:res.data.data[0],
          isLoading:false
        })
      })
      .catch(error =>{
        console.log(error.message)
      })
  }
  render(){
    const {isLoading} = this.state
    const {base,experience,skil,school,id} = this.state.data1
    if(isLoading){
      return(
        <p>加载中</p>
      )
    }
      return (
        <div className="App">
        <Base data={base}></Base>
        <Resume data={{id,skil}}></Resume>
        <Experience data={experience}></Experience>
        <School data={school}></School>
        <BackTop />
      </div>
    );
  }
}
export default App;
