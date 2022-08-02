import React from 'react';
import {UsersType, UserType} from "../../redux/UsersReducer";
import s from "./users.module.css"
import axios from "axios";
import userPhoto from "../../../src/assets/images/default avatar.png"

type UsersPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalCount: (totalCount: number) => void
    usersPage: UsersType
    totalUsersCount: number
    currentPage: number
    pageSize: number
}

export class Users extends React.Component<UsersPropsType> {

    getUsersData() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalCount(response.data.totalCount)

        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    componentDidMount() {
        this.getUsersData()
    }

    render() {
        console.log(this.props.usersPage)
        let pagesCount: number = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div>
                <div>
                    {pages.map(p => {
                        return <span key={p} className={this.props.currentPage === p ? s.selectedPage : ""}
                                     onClick={() => this.onPageChanged(p)}>{p}</span>
                    })}

                </div>
                {this.props.usersPage.items.map(user => {
                    return (
                        <div key={user.id}>
                            {/*avatar + button*/}
                            <span>
                            <div><img className={s.userPhoto}
                                      src={user.photos.small != null ? user.photos.small : userPhoto}/></div>
                            <div>
                                {user.followed ? <button onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}>Unfollow</button> :
                                    <button onClick={() => {
                                        this.props.follow(user.id)
                                    }}>Follow</button>}
                            </div>
                        </span>
                            <span>
                            {/*Name + status*/}
                                <span>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </span>
                        </span>
                        </div>
                    )
                })}
            </div>
        );
    }

}

//     let getUsers = () => {
//         if (props.usersPage.items.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//     return (
//         <div>
//             <button onClick={getUsers}>get users</button>
//             {props.usersPage.items.map(user => {
//                 return (
//                     <div key={user.id}>
//                         {/*avatar + button*/}
//                         <span>
//                             <div><img className={s.userPhoto}
//                                       src={user.photos.small != null ? user.photos.small : userPhoto}/></div>
//                             <div>
//                                 {user.followed ? <button onClick={() => {
//                                         props.unfollow(user.id)
//                                     }}>Unfollow</button> :
//                                     <button onClick={() => {
//                                         props.follow(user.id)
//                                     }}>Follow</button>}
//                             </div>
//                         </span>
//                         <span>
//                             {/*Name + status*/}
//                             <span>
//                                 <div>{user.name}</div>
//                                 <div>{user.status}</div>
//                             </span>
//                             <span>
//                                 <div>{"user.location.country"}</div>
//                                 <div>{"user.location.city"}</div>
//                             </span>
//                         </span>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// };

