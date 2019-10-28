import React, { Component } from 'react'
import './shuindex.css'
import 'antd/dist/antd.css'
import img1 from './img/01.jpg'
import img2 from './img/02.jpg'
import img3 from './img/03.jpg'
import img4 from './img/04.jpg'
import { Carousel } from 'antd'

export default class shuHomePage extends Component {
  render() {
    return (
      <div className="shu-div-16">
        <Carousel autoplay>
          <div>
            <img src={img1} alt="" />
          </div>
          <div>
            <h3>
              <img src={img2} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={img3} alt="" />
            </h3>
          </div>
          <div>
            <h3>
              <img src={img4} alt="" />
            </h3>
          </div>
        </Carousel>
      </div>
    )
  }
}
