import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div className={c.imgOnAllWidth}>
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" />
            </div>
            <div>pfp + description</div>
        </div>
    );
};

export default ProfileInfo;
