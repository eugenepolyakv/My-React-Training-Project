import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png"></img>
            </header>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className="content">
                <div className="imgOnAllWidth">
                    <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
                </div>
                <div>pfp + description</div>
                <div>My posts</div>
                <div>New post</div>
                <div>post1</div>
                <div>post2</div>
            </div>
        </div>
    );
};

export default App;
