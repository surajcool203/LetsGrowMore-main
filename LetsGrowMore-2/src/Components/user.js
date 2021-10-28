
/* New start*/
import React, { useState } from 'react';
import ReactLoading from 'react-loading';

function Users_card() {

  const [user, setUser] = useState([]);
  const [load, setLoading] = useState(false);
  const [style, setStyle] = useState("hello");
  
  async function fetchData() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 900);

    setStyle("hello2");

    const response = await fetch("https://reqres.in/api/users?page=1");
    const users = await response.json();
    setUser([]);
    setTimeout(() => {
      setUser(users.data);
    }, 1000);

  }

    return (      
    <>

     <nav className="listname">
          <h1 className="navbar-logo">LetsGrowMore</h1>
            <div className="nav-menu">
              <div className="column2">
                  <button className="button" onClick={fetchData}>Get Users</button>
              </div>
            </div>
        </nav>
        <div className={style}>
          <p>Click the button to fetch the data!</p>
        </div>
        {load ? (
          <div className="loader">
          <ReactLoading type={'balls'} color={'white'} height={99} width={99} />
          </div>
     
        ) : (
          " "
        )}
        
 
        <div className="main-container">
          <div className="inn">
          {user?.map(user => {
                      return (
                      <div className="profile">
                        <img src={user.avatar} alt={user.avatar} className="avatar"></img>
                        <h1 className="name">{user.first_name} {user.last_name}</h1>
                        <p className="email">{user.email}</p>
                        <p className="userid">User Id: {user.id}</p>
                        <div id="outer_icons"> 
                          <a id="icons" href="#"><i class="fa fa-twitter"></i></a>  
                          <a id="icons" href="#"><i class="fa fa-instagram"></i></a>  
                          <a id="icons" href="#"><i class="fa fa-linkedin"></i></a>  
                          <a id="icons" href="#"><i class="fa fa-facebook"></i></a> 
                        </div>
                        <p><button>Know more!</button></p>
                      </div>     
                      ); 
          })}
          </div>
        </div>

    </>
    );
}

export default Users_card;