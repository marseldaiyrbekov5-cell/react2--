import React, { useState } from 'react';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2>🔐</h2>
          <form onSubmit={handleLogin}>
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">SIGN IN</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <div className="header-title">React Admin</div>
        <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>LOGOUT</button>
      </header>

      <div className="admin-body">
        <aside className="admin-sidebar">
          <ul>
            <li 
              className={activeTab === 'dashboard' ? 'active' : ''} 
              onClick={() => setActiveTab('dashboard')}
            >
              📊 Dashboard
            </li>
            <li 
              className={activeTab === 'posts' ? 'active' : ''} 
              onClick={() => setActiveTab('posts')}
            >
              📄 Posts
            </li>
            <li 
              className={activeTab === 'users' ? 'active' : ''} 
              onClick={() => setActiveTab('users')}
            >
              👤 Users
            </li>
          </ul>
        </aside>
        
        <main className="admin-content">
          {activeTab === 'dashboard' && (
            <div>
              <h2>Welcome to the administration</h2>
              <p>Lorem ipsum sic dolor amet...</p>
            </div>
          )}

          {activeTab === 'posts' && (
            <div>
              <div className="content-header">
                <h2>Posts List</h2>
                <button className="action-btn">CREATE</button>
              </div>
              <table className="data-table">
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>ID</th>
                    <th>User</th>
                    <th>Title</th>
                    <th>Body</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>1</td>
                    <td>John Doe</td>
                    <td>React JS негиздери</td>
                    <td>React үйрөнүү абдан кызыктуу...</td>
                  </tr>
                  <tr>
                    <td><input type="checkbox" /></td>
                    <td>2</td>
                    <td>Айбек</td>
                    <td>CSS Grid жана Flexbox</td>
                    <td>Веб барагын стилдөө жолдору...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === 'users' && (
            <div>
              <h2>Users Management</h2>
              <p>Бул жерде колдонуучулардын тизмеси болот.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;