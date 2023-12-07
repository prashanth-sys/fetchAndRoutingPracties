import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="user-info-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile"
      />
      <h1 className="profile-name">Wade Warren</h1>
      <p className="profile-description">Software Developer at UK</p>
    </div>
    <BlogList />
  </div>
)

export default Home
