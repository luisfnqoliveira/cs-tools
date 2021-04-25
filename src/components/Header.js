import React, { Component } from 'react';
import upittLogo from '../assets/images/Upitt_logo_400x400.jpg';
import { Radio } from "antd";
import "../styles/Header.css";
import "antd/dist/antd.css";

const roles = [
	{ label: "Student", value: "Student" },
	{ label: "Librarian", value: "Librarian" }
];

class Role extends Component {

	render() {
		const value = this.props.value;
		return (
			<Radio.Group
				options={roles}
				onChange={this.props.onChange}
				value={value}
				optionType="button"
				buttonStyle="solid"
			/>
		);
	}
}

class Header extends Component {

	render() {
		return (
			<header className="App-header" >
				<img src={upittLogo} alt='logo' className="App-logo" />
				<p className="title" >
					Memory Paging Practice System
                </p>
				<div className="overview-button">
					<a style={{color: "white"}} onClick={this.props.clickOverview}>Overview</a>
				</div>
				<div className="role-button">
					<Role value={this.props.value} onChange={this.props.onChange} />
				</div>
			</header>
		);
	}
}

export default Header;