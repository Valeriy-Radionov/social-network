import React from "react";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/redux-store";
import {
    follow,
    followSuccess, getUsers,
    setCurrentPage,
    toggleIsFollowingProgress, unfollow,
    unfollowSuccess,
    UsersType,
} from "../../redux/usersReducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type UsersContainerType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    // setUsers: (users: UserType[]) => void
    setCurrentPage: (pageNumber: number) => void
    // setTotalCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    usersPage: UsersType
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isFetching: boolean
    followingInProgress: number[]
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

class UsersContainerComponent extends React.Component<UsersContainerType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage} usersPage={this.props.usersPage} follow={this.props.follow}
                       unfollow={this.props.unfollow} onPageChanged={this.onPageChanged}
                       toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }

}

type MapStatePropsType = {
    usersPage: UsersType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalCount,
        currentPage: state.usersPage.page,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsers
})(UsersContainerComponent)