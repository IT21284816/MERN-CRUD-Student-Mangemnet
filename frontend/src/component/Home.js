import React from 'react'

export default function Home() {
  return (
    <div className='container mt-5'>
      <h1 className='mt-5 text-center'>WELCOME TO MERN STACK PROJECT</h1>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <h5>Front-End Technology</h5>
          <div class="card shadow">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">React js</li>
              <li class="list-group-item">HTML,CSS,Bootstrap 5</li>
              <li class="list-group-item">React Router DOM 6</li>
            </ul>
          </div>
        </div>
        <div className='col-md-6'>
          <h5 >Back-End Technology</h5>
          <div class="card shadow">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Node js</li>
              <li class="list-group-item">Express JS </li>
              <li class="list-group-item">Mongodb Atlas</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
