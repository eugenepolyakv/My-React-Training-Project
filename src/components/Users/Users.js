import c from './users.module.css';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArr = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pagesArr.push(i);
    }
    return (
        <div>
            <div>
                {pagesArr.map((page) => (
                    <span
                        onClick={() => props.changeCurrentPage(page)}
                        className={props.currentPage == page && c.selectedPage}
                    >
                        {page}
                    </span>
                ))}
            </div>
            Users
            <div className={c.mainDiv}>
                {props.users.map((el) => (
                    <div className={c.wrapper}>
                        <div className={c.pictureForProfile}>
                            <img src="https://cdn-icons-png.flaticon.com/512/37/37943.png" />
                            <div>
                                <button
                                    id={el.id}
                                    onClick={() => props.onFollowClick(el)}
                                >
                                    {el.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </div>
                        </div>
                        <div className={c.information}>
                            <div className={c.wrapper}>
                                <div>{el.name}</div>
                                <div className={c.location}>
                                    {/* {props.location.country + ' ' + props.location.city} */}
                                </div>
                                <div>{el.status}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;
