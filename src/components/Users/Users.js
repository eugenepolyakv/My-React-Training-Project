import { NavLink } from 'react-router-dom';
import c from './users.module.css';
import { usersAPI } from '../../api/api';
import { useState } from 'react';
const Users = (props) => {
    const [currentBlockOfTen, setBlock] = useState(0);
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pagesArr = [];
    if (pagesCount > 0) {
        let helpArr = [];
        for (let i = 1; i < pagesCount + 1; i++) {
            helpArr.push(i);
            if (i % 10 == 0 || i == pagesCount) {
                pagesArr.push(helpArr);
                helpArr = [];
            }
        }
    }

    // console.log(pagesArr);
    // for (let i = 1; i < pagesCount + 1; i++) {
    //     pagesArr.push(i);
    // }
    return (
        <div>
            <div>
                {currentBlockOfTen > 0 ? (
                    <button
                        onClick={() => {
                            props.changeCurrentPage(
                                pagesArr[currentBlockOfTen - 1][0]
                            );
                            setBlock(currentBlockOfTen - 1);
                        }}
                    >
                        back
                    </button>
                ) : null}
                {pagesArr.length > 0
                    ? pagesArr[currentBlockOfTen].map((page) => (
                          <span
                              onClick={() => props.changeCurrentPage(page)}
                              className={
                                  props.currentPage == page && c.selectedPage
                              }
                          >
                              {page}
                          </span>
                      ))
                    : null}
                {(currentBlockOfTen + 1) * 10 >= pagesCount ? null : (
                    <button
                        onClick={() => {
                            props.changeCurrentPage(
                                pagesArr[currentBlockOfTen + 1][0]
                            );
                            setBlock(currentBlockOfTen + 1);
                        }}
                    >
                        forward
                    </button>
                )}
            </div>
            Users
            <div className={c.mainDiv}>
                {props.users.map((el) => (
                    <div className={c.wrapper}>
                        <div className={c.pictureForProfile}>
                            <NavLink to={`/profile/${el.id}`}>
                                <img
                                    src={
                                        el.photos.small ||
                                        'https://cdn-icons-png.flaticon.com/512/37/37943.png'
                                    }
                                />
                            </NavLink>
                            <div>
                                <button
                                    disabled={props.followInProgress.some(
                                        (val) => val == el.id
                                    )}
                                    id={el.id}
                                    onClick={() =>
                                        props.changeFollowConditionThunkCreator(
                                            el.id,
                                            el.followed
                                        )
                                    }
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
