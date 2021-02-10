import React from 'react'
import './Main.css'
import avatar from '../Img/sam.jpg'
import AvatarUI from '../AvatarUI/AvatarUI'
import proimg from '../Img/logo.png'
import { ClusterOutlined } from '@ant-design/icons'
import { HeatMapOutlined } from '@ant-design/icons'
import { BranchesOutlined } from '@ant-design/icons'
import { BankOutlined } from '@ant-design/icons'

function Main() {
  return (
    <div>
      <main className='mainD'>
        <section className='glass'>
          <div className='dashboard'>

            <div className='usersection'>
              {/* <img src={avatar} alt='' /> */}
              <AvatarUI />
              <h3>Olorunda Samuel</h3>
              <p>Pro Member</p>
            </div>


            <div className="links">
              <div className='link'>
                <ClusterOutlined />
                <h2>Streams</h2>
              </div>


              <div className='link'>
                <HeatMapOutlined />
                <h2>Games</h2>
              </div>


              <div className='link'>
                <BranchesOutlined />
                <h2>New</h2>
              </div>


              <div className='link'>
                <BankOutlined />
                <h2>Libuary</h2>
              </div>
            </div>


            <div className="pro">
              <h2>Join Pro For Free Games</h2>
              <img src={proimg} alt="" width="100px" />
            </div>
          </div>



          <div className="games">
            <div className="status">
              <h1>Active Games</h1>
              <input type="text" />
            </div>


            <div className="cards">
              <div className="card">
                <img src={avatar} alt="" style={{ height: '50px', width: '50px', objectFit: 'cover' }} />
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PSS Versions</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentsge">60%</h2>
              </div>


              <div className="card">
                <img src={avatar} alt="" style={{ height: '50px', width: '50px', objectFit: 'cover' }} />
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PSS Versions</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentsge">60%</h2>
              </div>


              <div className="card">
                <img src={avatar} alt="" style={{ height: '50px', width: '50px', objectFit: 'cover' }} />
                <div className="card-info">
                  <h2>Assassins Creed Valhalla</h2>
                  <p>PSS Versions</p>
                  <div className="progress"></div>
                </div>
                <h2 className="percentsge">60%</h2>
              </div>


            </div>
          </div>
        </section>
      </main>
      <div className='circle1'></div>
      <div className='circle2'></div>
    </div>
  )
}

export default Main
