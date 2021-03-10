import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    follow,
    unfollow
} from "../../redux/reducer-users";
import * as axios from "axios";
import Preloader from "../Preloader/Preloader";



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.usersOnPageCount}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChange = (currentPage) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersOnPageCount}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <> {this.props.isFetching ?  <Preloader /> : null}
        <Users totalUsersCount={this.props.totalUsersCount}
                      usersOnPageCount={this.props.usersOnPageCount}
                      currentPage={this.props.currentPage}
                      usersData={this.props.usersData}
                      onPageChange={this.onPageChange}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}/>
        </>
    }
}
let mapStateToProps = (state) => ({
        usersData: state.usersPage.usersData,
        usersOnPageCount: state.usersPage.usersOnPageCount,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    })

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UsersContainer);