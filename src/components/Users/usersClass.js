import c from './users.module.css';
import axios from 'axios';
import React from 'react';
class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    // componentDidMount() {
    //     axios
    //         .get(
    //             `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
    //         )
    //         .then((response) => {
    //             this.props.setUsers(response.data.items);
    //         });
    // }
    changeCurrentPage = (page) => {
        this.props.changeCurrentPage(page);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`
            )
            .then((response) => {
                this.props.setUsers(response.data.items);
            });
    };
    onFollowClick = (el) => {
        el.followed
            ? this.props.makePersonUnfollowed(el.id)
            : this.props.makePersonFollowed(el.id);
    };
    render() {
        let pagesCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        );
        let pagesArr = [];
        for (let i = 1; i < pagesCount + 1; i++) {
            pagesArr.push(i);
        }
        return (
            <div>
                <div>
                    {pagesArr.map((page) => (
                        <span
                            onClick={() => this.changeCurrentPage(page)}
                            className={
                                this.props.currentPage == page && c.selectedPage
                            }
                        >
                            {page}
                        </span>
                    ))}
                    {/* <span>2</span>
                    <span className={c.selectedPage}>3</span>
                    <span>4</span>
                    <span>5</span> */}
                </div>
                Users
                <div className={c.mainDiv}>
                    {this.props.users.map((el) => (
                        <div className={c.wrapper}>
                            <div className={c.pictureForProfile}>
                                <img src="https://cdn-icons-png.flaticon.com/512/37/37943.png" />
                                <div>
                                    <button
                                        id={el.id}
                                        onClick={() => this.onFollowClick(el)}
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
    }
}

export default Users;
